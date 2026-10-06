import React, { useEffect } from 'react';
import { recordBeaconVisit } from '../services/beaconService';

export const BeaconTracker: React.FC = () => {
  useEffect(() => {
    // Firing beacon asynchronously after initial render
    const timer = setTimeout(() => {
      recordBeaconVisit().catch(err => {
        console.debug('Beacon tracking background note:', err);
      });
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return null; // Invisible component
};
