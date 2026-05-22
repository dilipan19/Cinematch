import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  detectTVPlatform,
  initPlatformSDK,
  isSmartTVPlatform,
  isTenFootUI,
  mapKeyEvent,
  TV_PLATFORM_LABELS,
} from '../platforms';
import { handleSpatialKey } from '../utils/spatialNavigation';

const SmartTVContext = createContext(null);

export function SmartTVProvider({ children }) {
  const navigate = useNavigate();
  const [platform] = useState(() => detectTVPlatform());

  const value = useMemo(
    () => ({
      platform,
      platformLabel: TV_PLATFORM_LABELS[platform],
      isTV: isSmartTVPlatform(platform),
      isTenFoot: isTenFootUI(platform),
    }),
    [platform]
  );

  useEffect(() => {
    initPlatformSDK(platform);
    if (value.isTenFoot) {
      document.body.classList.add('tv-ten-foot-ui');
    }
    return () => document.body.classList.remove('tv-ten-foot-ui');
  }, [platform, value.isTenFoot]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (mapKeyEvent(platform, e) === 'BACK') {
        e.preventDefault();
        if (window.history.length > 1) {
          navigate(-1);
        } else {
          navigate('/');
        }
        return;
      }
      handleSpatialKey(platform, e, mapKeyEvent);
    };

    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, [platform, navigate]);

  return (
    <SmartTVContext.Provider value={value}>{children}</SmartTVContext.Provider>
  );
}

export function useSmartTV() {
  const ctx = useContext(SmartTVContext);
  if (!ctx) {
    throw new Error('useSmartTV must be used within SmartTVProvider');
  }
  return ctx;
}
