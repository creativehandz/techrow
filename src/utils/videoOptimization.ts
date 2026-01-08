// Network and device optimization utilities

export const getConnectionSpeed = (): string => {
  // @ts-ignore - NetworkInformation API
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (connection) {
    const effectiveType = connection.effectiveType;
    return effectiveType || 'unknown';
  }
  
  return 'unknown';
};

export const isSlowConnection = (): boolean => {
  const speed = getConnectionSpeed();
  return ['slow-2g', '2g'].includes(speed);
};

export const isMobileDevice = (): boolean => {
  return window.innerWidth <= 768 || 
         /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const getOptimalVideoSettings = () => {
  const mobile = isMobileDevice();
  const slowConnection = isSlowConnection();
  
  return {
    preload: mobile || slowConnection ? 'none' : 'metadata',
    autoplay: !mobile && !slowConnection,
    quality: slowConnection ? 'low' : mobile ? 'medium' : 'high',
    loadDelay: mobile ? 1000 : 0 // Delay loading on mobile
  };
};