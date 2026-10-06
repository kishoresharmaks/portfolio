import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  KeyRound, 
  Eye, 
  Users, 
  MapPin, 
  Globe, 
  Smartphone, 
  Monitor, 
  RefreshCw, 
  Download, 
  Trash2, 
  Settings, 
  LogOut, 
  Search, 
  Filter, 
  Check, 
  ArrowLeft,
  Server,
  Zap,
  Activity,
  Layers,
  Database,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import { 
  AnalyticsRecord, 
  fetchAllAnalyticsRecords, 
  clearAllAnalytics, 
  getAdminPIN, 
  setAdminPIN, 
  saveSupabaseConfig, 
  getSupabaseConfig,
  DEFAULT_ADMIN_PIN,
  recordBeaconVisit
} from '../services/beaconService';

interface BeaconDashboardProps {
  onBackToPortfolio?: () => void;
}

export const BeaconDashboard: React.FC<BeaconDashboardProps> = ({ onBackToPortfolio }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('kishoresharma_beacon_authed') === 'true';
  });
  const [inputPin, setInputPin] = useState<string>('');
  const [pinError, setPinError] = useState<string | null>(null);

  const [records, setRecords] = useState<AnalyticsRecord[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'INDIA' | 'MOBILE' | 'TODAY'>('ALL');
  const [selectedRecord, setSelectedRecord] = useState<AnalyticsRecord | null>(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  // Reset page to 1 when search term or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeFilter]);

  // Settings Modal State
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [newPin, setNewPin] = useState<string>('');
  const [pinSuccessMsg, setPinSuccessMsg] = useState<string | null>(null);
  
  const [supabaseUrl, setSupabaseUrl] = useState<string>('');
  const [supabaseKey, setSupabaseKey] = useState<string>('');
  const [dbSuccessMsg, setDbSuccessMsg] = useState<string | null>(null);

  // Load analytics records when authenticated
  const loadAnalytics = async () => {
    setLoading(true);
    try {
      const data = await fetchAllAnalyticsRecords();
      setRecords(data);
    } catch (e) {
      console.error('Failed to load analytics:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadAnalytics();
      // Auto refresh every 15 seconds
      const interval = setInterval(loadAnalytics, 15000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const cfg = getSupabaseConfig();
    setSupabaseUrl(cfg.url);
    setSupabaseKey(cfg.key);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPin = getAdminPIN();
    if (inputPin.trim() === currentPin) {
      setIsAuthenticated(true);
      sessionStorage.setItem('kishoresharma_beacon_authed', 'true');
      setPinError(null);
    } else {
      setPinError('Invalid passcode');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('kishoresharma_beacon_authed');
    setInputPin('');
  };

  const handleUpdatePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPin || newPin.length < 4) {
      setPinSuccessMsg('PIN must be at least 4 digits');
      return;
    }
    setAdminPIN(newPin);
    setPinSuccessMsg('Passcode updated successfully!');
    setNewPin('');
    setTimeout(() => setPinSuccessMsg(null), 3000);
  };

  const handleSaveDbConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveSupabaseConfig(supabaseUrl.trim(), supabaseKey.trim());
    setDbSuccessMsg('Supabase credentials saved locally!');
    setTimeout(() => {
      setDbSuccessMsg(null);
      loadAnalytics();
    }, 2000);
  };

  const handleClearLogs = async () => {
    if (window.confirm('Are you sure you want to clear all recorded analytics logs?')) {
      await clearAllAnalytics();
      setRecords([]);
    }
  };

  const handleSeedSample = async () => {
    await recordBeaconVisit();
    await loadAnalytics();
  };

  const exportToCSV = () => {
    if (records.length === 0) return;
    const headers = ['ID', 'Timestamp', 'IP', 'Country', 'State', 'City/District', 'Area/ISP', 'Device', 'OS', 'Browser', 'Referrer', 'Path'];
    const rows = records.map(r => [
      r.id,
      r.timestamp,
      r.ip,
      `"${r.country}"`,
      `"${r.region_state}"`,
      `"${r.city_district}"`,
      `"${r.area_district} / ${r.isp}"`,
      r.device_type,
      r.os,
      r.browser,
      `"${r.referrer}"`,
      `"${r.path}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `beacon_analytics_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Records
  const realRecords = records.filter(r => !r.is_bot);
  const totalViews = realRecords.length;
  const uniqueVisitors = new Set(realRecords.map(r => r.visitor_id)).size;

  const todayStr = new Date().toISOString().slice(0, 10);
  const todayViews = realRecords.filter(r => r.timestamp.startsWith(todayStr)).length;

  // Indian Views breakdown
  const indianRecords = realRecords.filter(r => r.country_code === 'IN' || r.country.toLowerCase().includes('india'));
  
  // Top State
  const stateCounts: Record<string, number> = {};
  realRecords.forEach(r => {
    const key = r.region_state || 'Unknown State';
    stateCounts[key] = (stateCounts[key] || 0) + 1;
  });
  const topState = Object.entries(stateCounts).sort((a, b) => b[1] - a[1])[0] || ['N/A', 0];

  // Top City/District
  const cityCounts: Record<string, number> = {};
  realRecords.forEach(r => {
    const key = `${r.city_district} (${r.region_state})`;
    cityCounts[key] = (cityCounts[key] || 0) + 1;
  });
  const topCity = Object.entries(cityCounts).sort((a, b) => b[1] - a[1])[0] || ['N/A', 0];

  // Device breakdown
  const deviceCounts = { Desktop: 0, Mobile: 0, Tablet: 0 };
  realRecords.forEach(r => {
    if (r.device_type in deviceCounts) {
      deviceCounts[r.device_type]++;
    }
  });

  // OS Breakdown
  const osCounts: Record<string, number> = {};
  realRecords.forEach(r => {
    osCounts[r.os] = (osCounts[r.os] || 0) + 1;
  });

  // Browser Breakdown
  const browserCounts: Record<string, number> = {};
  realRecords.forEach(r => {
    browserCounts[r.browser] = (browserCounts[r.browser] || 0) + 1;
  });

  // Referrer Breakdown
  const referrerCounts: Record<string, number> = {};
  realRecords.forEach(r => {
    referrerCounts[r.referrer] = (referrerCounts[r.referrer] || 0) + 1;
  });

  // Filter table records
  const filteredRecords = realRecords.filter(r => {
    if (activeFilter === 'INDIA' && r.country_code !== 'IN' && !r.country.toLowerCase().includes('india')) return false;
    if (activeFilter === 'MOBILE' && r.device_type !== 'Mobile') return false;
    if (activeFilter === 'TODAY' && !r.timestamp.startsWith(todayStr)) return false;

    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      r.ip.toLowerCase().includes(term) ||
      r.country.toLowerCase().includes(term) ||
      r.region_state.toLowerCase().includes(term) ||
      r.city_district.toLowerCase().includes(term) ||
      r.area_district.toLowerCase().includes(term) ||
      r.isp.toLowerCase().includes(term) ||
      r.device_type.toLowerCase().includes(term) ||
      r.os.toLowerCase().includes(term) ||
      r.browser.toLowerCase().includes(term) ||
      r.referrer.toLowerCase().includes(term)
    );
  });

  // Pagination Calculations
  const totalFilteredRecords = filteredRecords.length;
  const totalPages = Math.ceil(totalFilteredRecords / pageSize) || 1;
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), totalPages);
  
  const startIndex = (safeCurrentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalFilteredRecords);
  const paginatedRecords = filteredRecords.slice(startIndex, endIndex);

  // --- 1. LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070A12] text-slate-100 flex items-center justify-center p-4 font-sans relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-md bg-[#0D1222] border border-indigo-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 relative z-10 backdrop-blur-xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-600/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white tracking-tight font-outfit">Beacon Console</h1>
                <p className="text-xs text-slate-400 font-mono">Protected Analytics Portal</p>
              </div>
            </div>
            {onBackToPortfolio && (
              <button
                onClick={onBackToPortfolio}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors bg-slate-800/60 px-2.5 py-1.5 rounded-lg border border-slate-700/60"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Site</span>
              </button>
            )}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                Enter Admin Passcode / PIN
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={inputPin}
                  onChange={(e) => setInputPin(e.target.value)}
                  placeholder="Enter PIN"
                  className="w-full px-4 py-3 bg-[#080B14] border border-slate-700/80 focus:border-indigo-500 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 font-mono text-sm tracking-widest transition-all"
                  autoFocus
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>
              {pinError && (
                <p className="text-xs text-rose-400 mt-2 flex items-center gap-1 font-mono">
                  <ShieldAlert className="w-3.5 h-3.5" /> {pinError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold rounded-xl text-sm transition-all duration-300 shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Authenticate Session</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- 2. DASHBOARD MAIN UI ---
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Top Header Console Navbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0B0F1D] border border-slate-800/90 rounded-2xl p-4 sm:px-6 shadow-xl">
        <div className="flex items-center gap-3">
          {onBackToPortfolio && (
            <button
              onClick={onBackToPortfolio}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
              title="Return to Portfolio"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight font-outfit">
                Beacon Analytics
              </h1>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span> LIVE
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">Real-Time Traffic & Geographic Location Intelligence</p>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={loadAnalytics}
            className="px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold border border-slate-700/80 flex items-center gap-1.5 transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={exportToCSV}
            className="px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold border border-slate-700/80 flex items-center gap-1.5 transition-colors"
            title="Export CSV"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => setShowSettings(true)}
            className="px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 text-xs font-semibold border border-slate-700/80 flex items-center gap-1.5 transition-colors"
            title="Settings & Cloud DB"
          >
            <Settings className="w-3.5 h-3.5 text-cyan-400" />
            <span>Settings</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-3 py-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 text-xs font-semibold border border-rose-800/50 flex items-center gap-1.5 transition-colors"
            title="Lock Session"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Exit</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        <div className="p-4 rounded-2xl bg-[#0B0F1D] border border-slate-800/80 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider">Total Views</span>
            <Eye className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-white font-outfit">{totalViews}</div>
          <p className="text-[10px] text-slate-400 font-mono mt-1">Filtered Real Traffic</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#0B0F1D] border border-slate-800/80 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider">Unique Visitors</span>
            <Users className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-outfit">{uniqueVisitors}</div>
          <p className="text-[10px] text-slate-400 font-mono mt-1">Unique Devices</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#0B0F1D] border border-slate-800/80 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider">Today's Visits</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-outfit">{todayViews}</div>
          <p className="text-[10px] text-slate-400 font-mono mt-1">Last 24 Hours</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#0B0F1D] border border-slate-800/80 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider">Top State</span>
            <MapPin className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-base sm:text-lg font-bold text-amber-300 font-outfit truncate" title={topState[0]}>
            {topState[0]}
          </div>
          <p className="text-[10px] text-slate-400 font-mono mt-1">{topState[1]} Visits</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#0B0F1D] border border-slate-800/80 shadow-lg col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider">Top City / District</span>
            <Globe className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-base sm:text-lg font-bold text-purple-300 font-outfit truncate" title={topCity[0]}>
            {topCity[0]}
          </div>
          <p className="text-[10px] text-slate-400 font-mono mt-1">{topCity[1]} Visits</p>
        </div>
      </div>

      {/* Analytics Details Grid: Geolocation Breakdown & Tech Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Geographic Location Drilldown (India Focus) */}
        <div className="lg:col-span-2 bg-[#0B0F1D] border border-slate-800/90 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <h2 className="text-sm font-bold text-white font-outfit">Geographic Location Distribution</h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              India ({indianRecords.length} visits)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* States Breakdown */}
            <div className="bg-[#070A14] p-4 rounded-xl border border-slate-800/60 space-y-3">
              <h3 className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-wider">
                🇮🇳 State / Region Breakdown
              </h3>
              <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                {Object.entries(stateCounts).length === 0 ? (
                  <p className="text-xs text-slate-500 font-mono italic">No location records yet</p>
                ) : (
                  Object.entries(stateCounts)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 7)
                    .map(([stateName, count]) => {
                      const pct = Math.round((count / totalViews) * 100);
                      return (
                        <div key={stateName} className="space-y-1">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-slate-200 font-medium truncate">{stateName}</span>
                            <span className="text-indigo-400 font-bold">{count} ({pct}%)</span>
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500" 
                              style={{ width: `${pct}%` }} 
                            />
                          </div>
                        </div>
                      );
                    })
                )}
              </div>
            </div>

            {/* City / District Breakdown */}
            <div className="bg-[#070A14] p-4 rounded-xl border border-slate-800/60 space-y-3">
              <h3 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                📍 City & District Breakdown
              </h3>
              <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                {Object.entries(cityCounts).length === 0 ? (
                  <p className="text-xs text-slate-500 font-mono italic">No location records yet</p>
                ) : (
                  Object.entries(cityCounts)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 7)
                    .map(([cityName, count]) => {
                      const pct = Math.round((count / totalViews) * 100);
                      return (
                        <div key={cityName} className="space-y-1">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-slate-200 font-medium truncate">{cityName}</span>
                            <span className="text-cyan-400 font-bold">{count} ({pct}%)</span>
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full rounded-full transition-all duration-500" 
                              style={{ width: `${pct}%` }} 
                            />
                          </div>
                        </div>
                      );
                    })
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Device & Referrer Analytics */}
        <div className="bg-[#0B0F1D] border border-slate-800/90 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-cyan-400" />
              <h2 className="text-sm font-bold text-white font-outfit">Device & Tech Intelligence</h2>
            </div>
          </div>

          <div className="space-y-4">
            {/* Device Type */}
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">Device Categories</span>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#070A14] p-2.5 rounded-xl border border-slate-800 text-center">
                  <Monitor className="w-4 h-4 mx-auto text-indigo-400 mb-1" />
                  <div className="text-xs font-mono text-slate-300 font-bold">{deviceCounts.Desktop}</div>
                  <div className="text-[10px] text-slate-500">Desktop</div>
                </div>
                <div className="bg-[#070A14] p-2.5 rounded-xl border border-slate-800 text-center">
                  <Smartphone className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
                  <div className="text-xs font-mono text-slate-300 font-bold">{deviceCounts.Mobile}</div>
                  <div className="text-[10px] text-slate-500">Mobile</div>
                </div>
                <div className="bg-[#070A14] p-2.5 rounded-xl border border-slate-800 text-center">
                  <Layers className="w-4 h-4 mx-auto text-amber-400 mb-1" />
                  <div className="text-xs font-mono text-slate-300 font-bold">{deviceCounts.Tablet}</div>
                  <div className="text-[10px] text-slate-500">Tablet</div>
                </div>
              </div>
            </div>

            {/* Referrers */}
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">Top Referrers</span>
              <div className="space-y-1.5 max-h-36 overflow-y-auto">
                {Object.entries(referrerCounts).map(([ref, count]) => (
                  <div key={ref} className="flex justify-between items-center text-xs font-mono bg-[#070A14] px-2.5 py-1.5 rounded-lg border border-slate-800/60">
                    <span className="text-slate-300 truncate max-w-[170px]">{ref}</span>
                    <span className="text-emerald-400 font-bold">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Visitor Logs Table Header Controls & Search */}
      <div className="bg-[#0B0F1D] border border-slate-800/90 rounded-2xl p-5 shadow-xl space-y-4">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
          <div>
            <h2 className="text-base font-bold text-white font-outfit flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" /> Live Visitor Beacon Logs
            </h2>
            <p className="text-xs text-slate-400 font-mono">Real-Time IP, State, City, District & Device Audit Log</p>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* Filter Pills */}
            <div className="flex bg-[#070A14] p-1 rounded-xl border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActiveFilter('ALL')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${activeFilter === 'ALL' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                All ({realRecords.length})
              </button>
              <button
                onClick={() => setActiveFilter('INDIA')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${activeFilter === 'INDIA' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                🇮🇳 India ({indianRecords.length})
              </button>
              <button
                onClick={() => setActiveFilter('MOBILE')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${activeFilter === 'MOBILE' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Mobile ({deviceCounts.Mobile})
              </button>
              <button
                onClick={() => setActiveFilter('TODAY')}
                className={`px-2.5 py-1 rounded-lg transition-colors ${activeFilter === 'TODAY' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'}`}
              >
                Today ({todayViews})
              </button>
            </div>

            {/* Search Box */}
            <div className="relative min-w-[180px]">
              <input
                type="text"
                placeholder="Search state, city, IP..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-[#070A14] border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
              />
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
            </div>
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-mono uppercase text-slate-400 bg-[#070A14]">
                <th className="py-3 px-3">Time</th>
                <th className="py-3 px-3">IP Address</th>
                <th className="py-3 px-3">Country & State</th>
                <th className="py-3 px-3">City / District</th>
                <th className="py-3 px-3">Area / ISP</th>
                <th className="py-3 px-3">Device & OS</th>
                <th className="py-3 px-3">Source</th>
                <th className="py-3 px-3 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono text-xs text-slate-300">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-500 italic">
                    {records.length === 0 ? (
                      <div className="space-y-3">
                        <p>No beacon visits recorded yet.</p>
                        <button
                          onClick={handleSeedSample}
                          className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold"
                        >
                          Trigger Test Visit Now
                        </button>
                      </div>
                    ) : (
                      'No visits matching current filter.'
                    )}
                  </td>
                </tr>
              ) : (
                paginatedRecords.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 text-slate-400 whitespace-nowrap">
                      {new Date(r.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      <span className="block text-[10px] text-slate-500">
                        {new Date(r.timestamp).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="py-3 px-3 font-semibold text-cyan-300 whitespace-nowrap">
                      {r.ip}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <span className="font-bold text-white flex items-center gap-1">
                        {r.country_code === 'IN' ? '🇮🇳' : '🌐'} {r.country}
                      </span>
                      <span className="block text-[11px] text-indigo-300 font-semibold">
                        {r.region_state}
                      </span>
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-800/50 text-indigo-200 font-bold text-[11px]">
                        📍 {r.city_district}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-400 max-w-[160px] truncate" title={`${r.area_district} - ${r.isp}`}>
                      {r.area_district} <span className="text-[10px] text-slate-500">({r.isp})</span>
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
                      <span className="text-slate-200 font-medium">{r.device_type}</span>
                      <span className="block text-[10px] text-slate-400">{r.os} • {r.browser}</span>
                    </td>
                    <td className="py-3 px-3 text-emerald-400 font-medium whitespace-nowrap">
                      {r.referrer}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <button
                        onClick={() => setSelectedRecord(r)}
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-indigo-300 transition-colors border border-slate-700"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls Footer */}
        {totalFilteredRecords > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80 font-mono text-xs text-slate-400">
            {/* Range info & Page size picker */}
            <div className="flex flex-wrap items-center gap-3">
              <span>
                Showing <strong className="text-white">{startIndex + 1}</strong> - <strong className="text-white">{endIndex}</strong> of <strong className="text-cyan-400">{totalFilteredRecords}</strong> logs
              </span>
              
              <div className="flex items-center gap-1.5 border-l border-slate-800 pl-3">
                <span className="text-slate-500">Per page:</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-[#070A14] border border-slate-800 text-slate-200 rounded px-2 py-1 focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
            </div>

            {/* Navigation Page Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={safeCurrentPage === 1}
                className="p-1.5 rounded-lg bg-[#070A14] hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-slate-300 transition-colors"
                title="First Page"
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={safeCurrentPage === 1}
                className="p-1.5 rounded-lg bg-[#070A14] hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-slate-300 transition-colors"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="px-3 py-1 font-bold text-white bg-[#070A14] border border-slate-800 rounded-lg text-xs">
                Page <span className="text-indigo-400">{safeCurrentPage}</span> of <span className="text-slate-300">{totalPages}</span>
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={safeCurrentPage === totalPages}
                className="p-1.5 rounded-lg bg-[#070A14] hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-slate-300 transition-colors"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={safeCurrentPage === totalPages}
                className="p-1.5 rounded-lg bg-[#070A14] hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-800 text-slate-300 transition-colors"
                title="Last Page"
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Detail Inspector Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1222] border border-indigo-500/40 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl font-mono">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" /> Visitor Beacon Payload
              </h3>
              <button 
                onClick={() => setSelectedRecord(null)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 bg-slate-800 rounded"
              >
                Close
              </button>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="bg-[#070A14] p-3 rounded-xl space-y-1.5 border border-slate-800">
                <p><span className="text-slate-500">Log ID:</span> {selectedRecord.id}</p>
                <p><span className="text-slate-500">Timestamp:</span> {new Date(selectedRecord.timestamp).toLocaleString()}</p>
                <p><span className="text-slate-500">IP Address:</span> <strong className="text-cyan-300">{selectedRecord.ip}</strong></p>
                <p><span className="text-slate-500">Country:</span> {selectedRecord.country} ({selectedRecord.country_code})</p>
                <p><span className="text-slate-500">State/Region:</span> <strong className="text-indigo-300">{selectedRecord.region_state}</strong></p>
                <p><span className="text-slate-500">City/District:</span> <strong className="text-emerald-300">{selectedRecord.city_district}</strong></p>
                <p><span className="text-slate-500">Area/Postal:</span> {selectedRecord.area_district}</p>
                <p><span className="text-slate-500">Network / ISP:</span> {selectedRecord.isp}</p>
                <p><span className="text-slate-500">Device Type:</span> {selectedRecord.device_type}</p>
                <p><span className="text-slate-500">OS & Browser:</span> {selectedRecord.os} ({selectedRecord.browser})</p>
                <p><span className="text-slate-500">Screen Resolution:</span> {selectedRecord.screen_res}</p>
                <p><span className="text-slate-500">Traffic Source:</span> {selectedRecord.referrer}</p>
                <p><span className="text-slate-500">Page Route:</span> {selectedRecord.path}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings & Supabase Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1222] border border-indigo-500/40 rounded-2xl max-w-xl w-full p-6 space-y-6 shadow-2xl font-mono text-xs">
            
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 font-outfit">
                <Settings className="w-4 h-4 text-cyan-400" /> Beacon Settings & Cloud Database
              </h3>
              <button 
                onClick={() => setShowSettings(false)}
                className="text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded"
              >
                Done
              </button>
            </div>

            {/* Change Admin PIN */}
            <div className="bg-[#070A14] p-4 rounded-xl border border-slate-800 space-y-3">
              <h4 className="font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                <KeyRound className="w-4 h-4" /> Change Admin Passcode
              </h4>
              <form onSubmit={handleUpdatePin} className="flex gap-2">
                <input
                  type="password"
                  placeholder="New PIN (min 4 digits)"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  className="flex-1 px-3 py-2 bg-[#0B0F1D] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold"
                >
                  Save PIN
                </button>
              </form>
              {pinSuccessMsg && <p className="text-emerald-400 font-bold">{pinSuccessMsg}</p>}
            </div>

            {/* Supabase Integration Setup */}
            <div className="bg-[#070A14] p-4 rounded-xl border border-slate-800 space-y-3">
              <h4 className="font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
                <Database className="w-4 h-4" /> Supabase Cloud Database (Optional)
              </h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Connect your free Supabase PostgreSQL database to sync real visitor traffic across all devices.
              </p>
              
              <form onSubmit={handleSaveDbConfig} className="space-y-2">
                <div>
                  <label className="block text-[10px] text-slate-400 mb-1">VITE_SUPABASE_URL</label>
                  <input
                    type="text"
                    placeholder="https://your-project.supabase.co"
                    value={supabaseUrl}
                    onChange={(e) => setSupabaseUrl(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0B0F1D] border border-slate-700 rounded-lg text-white font-mono text-[11px] focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-slate-400 mb-1">VITE_SUPABASE_ANON_KEY</label>
                  <input
                    type="password"
                    placeholder="eyJhbGciOiJIUzI1Ni..."
                    value={supabaseKey}
                    onChange={(e) => setSupabaseKey(e.target.value)}
                    className="w-full px-3 py-2 bg-[#0B0F1D] border border-slate-700 rounded-lg text-white font-mono text-[11px] focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-colors"
                >
                  Save Database Credentials
                </button>
              </form>
              {dbSuccessMsg && <p className="text-emerald-400 font-bold">{dbSuccessMsg}</p>}

              <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 space-y-1">
                <p className="font-bold text-slate-400">SQL Table Schema for Supabase:</p>
                <pre className="bg-[#0B0F1D] p-2 rounded border border-slate-800 text-[9px] text-cyan-300 overflow-x-auto">
{`create table beacon_analytics (
  id text primary key,
  visitor_id text,
  timestamp text,
  ip text,
  country text,
  country_code text,
  region_state text,
  city_district text,
  area_district text,
  isp text,
  device_type text,
  os text,
  browser text,
  screen_res text,
  referrer text,
  path text,
  is_bot boolean,
  duration_seconds int
);`}
                </pre>
              </div>
            </div>

            {/* Clear Data */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={handleClearLogs}
                className="px-3 py-2 bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 rounded-lg font-semibold border border-rose-800/50 flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" /> Purge All Analytics Logs
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
