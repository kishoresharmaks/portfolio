import { createClient } from '@supabase/supabase-js';

export interface AnalyticsRecord {
  id: string;
  visitor_id: string;
  timestamp: string;
  ip: string;
  country: string;
  country_code: string;
  region_state: string; // e.g. "Tamil Nadu"
  city_district: string; // e.g. "Chennai", "Salem"
  area_district: string; // e.g. "Adyar / 600020" or postal code
  isp: string;
  latitude?: number | string;
  longitude?: number | string;
  loc_source?: string;
  maps_url?: string;
  device_type: 'Desktop' | 'Mobile' | 'Tablet';
  os: string;
  browser: string;
  screen_res: string;
  referrer: string;
  path: string;
  is_bot: boolean;
  duration_seconds: number;
}

const STORAGE_KEY = 'kishoresharma_beacon_analytics_v1';
const VISITOR_KEY = 'kishoresharma_beacon_visitor_id';
const PASSCODE_KEY = 'kishoresharma_beacon_admin_pin';
const SUPABASE_CONFIG_KEY = 'kishoresharma_beacon_supabase_cfg';

// Hardcoded Supabase Credentials
export const HARDCODED_SUPABASE_URL = 'https://iaxpebarwkzncjdjovgc.supabase.co';
export const HARDCODED_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlheHBlYmFyd2t6bmNqZGpvdmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyNTE5ODQsImV4cCI6MjEwNjgyNzk4NH0.HA9RWNUFeftSrqOQIQbePOJrqpteDLEoDOzGCIp20NA';

// Default Admin PIN
export const DEFAULT_ADMIN_PIN = '052005';

// Supabase helper
const getSupabaseClient = () => {
  const envUrl = (import.meta as any).env?.VITE_SUPABASE_URL;
  const envKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;
  
  let savedCfg: { url?: string; key?: string } = {};
  try {
    const raw = localStorage.getItem(SUPABASE_CONFIG_KEY);
    if (raw) savedCfg = JSON.parse(raw);
  } catch (e) {
    // ignore
  }

  const url = envUrl || savedCfg.url || HARDCODED_SUPABASE_URL;
  const key = envKey || savedCfg.key || HARDCODED_SUPABASE_KEY;

  if (url && key) {
    try {
      return createClient(url, key);
    } catch (e) {
      console.warn('Supabase init failed:', e);
    }
  }
  return null;
};

// Check if visitor userAgent matches known search engine bots or crawlers
const isBotUserAgent = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent.toLowerCase();
  const botPatterns = [
    'bot', 'spider', 'crawler', 'slurp', 'lighthouse', 'headlesschrome',
    'inspect', 'semrush', 'ahrefs', 'googlebot', 'bingbot', 'yandex'
  ];
  return botPatterns.some(pattern => ua.includes(pattern));
};

// Parse Browser from UserAgent
const parseBrowser = (ua: string): string => {
  if (ua.includes('edg/')) return 'Edge';
  if (ua.includes('chrome')) return 'Chrome';
  if (ua.includes('safari') && !ua.includes('chrome')) return 'Safari';
  if (ua.includes('firefox')) return 'Firefox';
  if (ua.includes('opera') || ua.includes('opr/')) return 'Opera';
  return 'Other Browser';
};

// Parse OS from UserAgent
const parseOS = (ua: string): string => {
  if (ua.includes('win')) return 'Windows';
  if (ua.includes('mac')) return 'macOS';
  if (ua.includes('android')) return 'Android';
  if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) return 'iOS';
  if (ua.includes('linux')) return 'Linux';
  return 'Unknown OS';
};

// Detect Device Type
const parseDeviceType = (): 'Desktop' | 'Mobile' | 'Tablet' => {
  if (typeof window === 'undefined') return 'Desktop';
  const ua = navigator.userAgent.toLowerCase();
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'Tablet';
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated/i.test(ua)) return 'Mobile';
  return 'Desktop';
};

// Generate or fetch Visitor ID
export const getVisitorId = (): string => {
  let vid = localStorage.getItem(VISITOR_KEY);
  if (!vid) {
    vid = 'v_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now().toString(36);
    localStorage.setItem(VISITOR_KEY, vid);
  }
  return vid;
};

// Helper to fetch explicit public IPv4 address
const fetchIPv4Address = async (): Promise<string | null> => {
  try {
    const res = await fetch('https://api4.ipify.org?format=json', { signal: AbortSignal.timeout(3500) });
    if (res.ok) {
      const data = await res.json();
      if (data.ip && !data.ip.includes(':')) return data.ip;
    }
  } catch (e) {
    try {
      const res2 = await fetch('https://api.ipify.org?format=json', { signal: AbortSignal.timeout(3500) });
      if (res2.ok) {
        const data2 = await res2.json();
        if (data2.ip && !data2.ip.includes(':')) return data2.ip;
      }
    } catch (e2) {
      // ignore
    }
  }
  return null;
};

// Helper to query browser GPS if available
const fetchBrowserGPSCoordinates = (): Promise<{ latitude: number; longitude: number; accuracy: number } | null> => {
  return new Promise((resolve) => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        });
      },
      (err) => {
        resolve(null);
      },
      { enableHighAccuracy: true, timeout: 2500, maximumAge: 60000 }
    );
  });
};

// ipgeolocation.io API Key
export const HARDCODED_IPGEOLOCATION_KEY = 'ccc967cd86b3448393807c662f91d0a7';

// Primary High-Accuracy Geolocation via ipgeolocation.io
const fetchIPGeolocationIO = async (ipParam?: string | null) => {
  const apiKey = (import.meta as any).env?.VITE_IPGEOLOCATION_API_KEY || HARDCODED_IPGEOLOCATION_KEY;
  try {
    const url = ipParam 
      ? `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ipParam}`
      : `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`;
    
    const res = await fetch(url, { signal: AbortSignal.timeout(4500) });
    if (res.ok) {
      const data = await res.json();
      if (data && data.ip) {
        const lat = data.latitude ? parseFloat(data.latitude) : undefined;
        const lng = data.longitude ? parseFloat(data.longitude) : undefined;
        const mapsUrl = (lat && lng) ? `https://www.google.com/maps?q=${lat},${lng}` : undefined;

        return {
          ip: data.ip,
          country: data.country_name || 'India',
          country_code: data.country_code2 || 'IN',
          region_state: data.state_prov || 'Tamil Nadu',
          city_district: data.city || data.district || 'Salem',
          area_district: data.district && data.city !== data.district 
            ? `${data.district} (PIN ${data.zipcode || ''})`.trim()
            : (data.zipcode ? `PIN ${data.zipcode}` : 'District Area'),
          isp: data.isp || data.organization || 'Bharat Sanchar Nigam Limited',
          latitude: lat,
          longitude: lng,
          loc_source: 'IP Geolocation',
          maps_url: mapsUrl
        };
      }
    }
  } catch (err) {
    console.warn('ipgeolocation.io lookup fallback:', err);
  }
  return null;
};

// Fetch Geo IP location details with IPv4 priority & high-precision city mapping
export const fetchGeoLocation = async (): Promise<{
  ip: string;
  country: string;
  country_code: string;
  region_state: string;
  city_district: string;
  area_district: string;
  isp: string;
  latitude?: number | string;
  longitude?: number | string;
  loc_source?: string;
  maps_url?: string;
}> => {
  // Step 1: Force IPv4 lookup
  const ipv4 = await fetchIPv4Address();

  // Strategy 1: Primary - ipgeolocation.io API (Using provided API Key)
  const ipgeoData = await fetchIPGeolocationIO(ipv4);
  if (ipgeoData) {
    return ipgeoData;
  }

  // Strategy 2: High accuracy Geolocation lookup via ip-api with explicit IPv4
  if (ipv4) {
    try {
      const res = await fetch(`https://ip-api.com/json/${ipv4}?fields=status,country,countryCode,regionName,city,zip,lat,lon,isp,org,as,query`, { signal: AbortSignal.timeout(4000) });
      if (res.ok) {
        const data = await res.json();
        if (data.status === 'success') {
          const lat = data.lat;
          const lng = data.lon;
          return {
            ip: data.query || ipv4,
            country: data.country || 'India',
            country_code: data.countryCode || 'IN',
            region_state: data.regionName || 'Tamil Nadu',
            city_district: data.city || 'Salem',
            area_district: data.zip ? `PIN ${data.zip}` : 'District Area',
            isp: data.isp || data.org || data.as || 'BSNL / MTNL',
            latitude: lat,
            longitude: lng,
            loc_source: 'IP Geolocation',
            maps_url: (lat && lng) ? `https://www.google.com/maps?q=${lat},${lng}` : undefined
          };
        }
      }
    } catch (err) {
      // fallback
    }

    try {
      const res2 = await fetch(`https://ipapi.co/${ipv4}/json/`, { signal: AbortSignal.timeout(4000) });
      if (res2.ok) {
        const data2 = await res2.json();
        const lat = data2.latitude;
        const lng = data2.longitude;
        return {
          ip: data2.ip || ipv4,
          country: data2.country_name || 'India',
          country_code: data2.country_code || 'IN',
          region_state: data2.region || 'Tamil Nadu',
          city_district: data2.city || 'Salem',
          area_district: data2.postal ? `PIN ${data2.postal}` : 'District Area',
          isp: data2.org || data2.asn || 'ISP Provider',
          latitude: lat,
          longitude: lng,
          loc_source: 'IP Geolocation',
          maps_url: (lat && lng) ? `https://www.google.com/maps?q=${lat},${lng}` : undefined
        };
      }
    } catch (e2) {
      // fallback
    }
  }

  return {
    ip: ipv4 || '120.60.127.93',
    country: 'India',
    country_code: 'IN',
    region_state: 'Tamil Nadu',
    city_district: 'Salem',
    area_district: 'District Area',
    isp: 'Bharat Sanchar Nigam Limited',
    latitude: 11.6643,
    longitude: 78.1460,
    loc_source: 'IP Geolocation',
    maps_url: 'https://www.google.com/maps?q=11.6643,78.1460'
  };
};

// Record a new tracking beacon visit
export const recordBeaconVisit = async (): Promise<AnalyticsRecord | null> => {
  if (typeof window === 'undefined') return null;

  // Check session deduplication (don't overcount rapid refresh within 2 minutes)
  const sessionKey = 'kishoresharma_beacon_last_visit';
  const lastTime = sessionStorage.getItem(sessionKey);
  const now = Date.now();
  if (lastTime && now - parseInt(lastTime, 10) < 120000) {
    // Return existing record without duplicating
    return null;
  }
  sessionStorage.setItem(sessionKey, now.toString());

  const isBot = isBotUserAgent();
  const visitorId = getVisitorId();
  const geo = await fetchGeoLocation();
  const ua = navigator.userAgent.toLowerCase();

  let referrerClean = 'Direct / Bookmark';
  if (document.referrer) {
    try {
      const refUrl = new URL(document.referrer);
      if (refUrl.hostname.includes('google')) referrerClean = 'Google Search';
      else if (refUrl.hostname.includes('linkedin')) referrerClean = 'LinkedIn';
      else if (refUrl.hostname.includes('github')) referrerClean = 'GitHub';
      else if (refUrl.hostname.includes('twitter') || refUrl.hostname.includes('t.co')) referrerClean = 'X / Twitter';
      else if (refUrl.hostname.includes('whatsapp')) referrerClean = 'WhatsApp';
      else referrerClean = refUrl.hostname;
    } catch (e) {
      referrerClean = document.referrer;
    }
  }

  // Attempt high precision GPS coordinates if browser allows
  const gps = await fetchBrowserGPSCoordinates();
  if (gps) {
    geo.latitude = gps.latitude;
    geo.longitude = gps.longitude;
    geo.loc_source = `GPS High Precision (±${Math.round(gps.accuracy)}m)`;
    geo.maps_url = `https://www.google.com/maps?q=${gps.latitude},${gps.longitude}`;
  }

  const record: AnalyticsRecord = {
    id: 'rec_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now().toString(36),
    visitor_id: visitorId,
    timestamp: new Date().toISOString(),
    ip: geo.ip,
    country: geo.country,
    country_code: geo.country_code,
    region_state: geo.region_state,
    city_district: geo.city_district,
    area_district: geo.area_district,
    isp: geo.isp,
    latitude: geo.latitude,
    longitude: geo.longitude,
    loc_source: geo.loc_source || 'IP Geolocation',
    maps_url: geo.maps_url || (geo.latitude && geo.longitude ? `https://www.google.com/maps?q=${geo.latitude},${geo.longitude}` : undefined),
    device_type: parseDeviceType(),
    os: parseOS(ua),
    browser: parseBrowser(ua),
    screen_res: `${window.screen.width}x${window.screen.height}`,
    referrer: referrerClean,
    path: window.location.pathname + window.location.hash,
    is_bot: isBot,
    duration_seconds: 5
  };

  // Save locally
  saveRecordLocally(record);

  // Sync to Supabase if configured
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      await supabase.from('beacon_analytics').insert([record]);
    } catch (e) {
      console.warn('Supabase sync warning:', e);
    }
  }

  return record;
};

// Local storage helper functions
const saveRecordLocally = (record: AnalyticsRecord) => {
  try {
    const existing = getAllLocalRecords();
    // Keep max 500 records locally
    const updated = [record, ...existing].slice(0, 500);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save beacon record locally:', e);
  }
};

export const getAllLocalRecords = (): AnalyticsRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
};

// Fetch all analytics records (from Supabase if connected, else Local)
export const fetchAllAnalyticsRecords = async (): Promise<AnalyticsRecord[]> => {
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('beacon_analytics')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(1000);
      
      if (!error && data && data.length > 0) {
        // Merge with local records to ensure complete dataset
        const local = getAllLocalRecords();
        const map = new Map<string, AnalyticsRecord>();
        data.forEach((r: AnalyticsRecord) => map.set(r.id, r));
        local.forEach((r: AnalyticsRecord) => map.set(r.id, r));
        return Array.from(map.values()).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to local storage:', e);
    }
  }

  return getAllLocalRecords();
};

// Clear logs
export const clearAllAnalytics = async (): Promise<void> => {
  localStorage.removeItem(STORAGE_KEY);
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      await supabase.from('beacon_analytics').delete().neq('id', '0');
    } catch (e) {
      console.warn('Failed to clear Supabase analytics:', e);
    }
  }
};

// Admin Auth Helper
export const getAdminPIN = (): string => {
  return localStorage.getItem(PASSCODE_KEY) || DEFAULT_ADMIN_PIN;
};

export const setAdminPIN = (newPin: string): void => {
  localStorage.setItem(PASSCODE_KEY, newPin);
};

export const saveSupabaseConfig = (url: string, key: string): void => {
  localStorage.setItem(SUPABASE_CONFIG_KEY, JSON.stringify({ url, key }));
};

export const getSupabaseConfig = (): { url: string; key: string } => {
  try {
    const raw = localStorage.getItem(SUPABASE_CONFIG_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.url && parsed.key) return parsed;
    }
  } catch (e) {
    // ignore
  }
  return {
    url: (import.meta as any).env?.VITE_SUPABASE_URL || HARDCODED_SUPABASE_URL,
    key: (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || HARDCODED_SUPABASE_KEY
  };
};
