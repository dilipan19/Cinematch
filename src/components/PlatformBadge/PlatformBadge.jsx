import React from 'react';
import { useSmartTV } from '../../context/SmartTVContext';
import './PlatformBadge.css';

const PlatformBadge = () => {
  const { platform, platformLabel, isTV } = useSmartTV();

  return (
    <span
      className={`platform-badge ${isTV ? 'platform-badge--tv' : 'platform-badge--web'}`}
      title={`Runtime: ${platformLabel}. Dev test: ?platform=tizen|webos|firetv|androidtv`}
    >
      {isTV ? '📺' : '🌐'} {platformLabel}
    </span>
  );
};

export default PlatformBadge;
