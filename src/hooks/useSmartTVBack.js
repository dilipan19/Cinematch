import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSmartTV } from '../context/SmartTVContext';
import { isBackKey } from '../platforms';

/**
 * Page-level back handler (Player also uses global SmartTVProvider).
 */
export function useSmartTVBack(enabled = true) {
  const navigate = useNavigate();
  const { platform } = useSmartTV();

  useEffect(() => {
    if (!enabled) return;

    const handler = (e) => {
      if (isBackKey(platform, e)) {
        e.preventDefault();
        navigate(-1);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [platform, navigate, enabled]);
}
