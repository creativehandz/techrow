import type { CSSProperties } from 'react';

const muxPlaybackIds: Record<string, string> = {
  '/media/videos/hero/techrow_montage_new-v1.mp4':
    'MHQqwG1QSY6T02OTZ02qDZzWJAmu72iNxREgJtI6GGFHM',
  '/media/videos/pages/donate.mp4':
    'rKRH23ADXRLfa3ZDbRLRcyIPCXan9IHuHsxg93nWZJA',
  '/media/videos/pages/harlem_s-legendary-cultural-history-v1.mp4':
    'OpLkqRmvw402n02r8HgzdHqZmfcL2uHzWq401K6nQ4RzV4',
  '/media/videos/pages/our-vision.mp4':
    'GR5JtQfHJ4z00JhFUfhQz9GBgpU00GmBwpoUcjE3fXK24',
  '/media/videos/pages/thechallagne.mp4':
    '2FW01yfQXfKmOEplzH6NHJXZwZhcTERXtOOevkFSReEw',
  '/media/videos/pages/we-help.mp4':
    'yafkIgCNN8VYmUNoNKMsYMVpRqW414Xm14NNEvUYL6g',
  '/media/videos/pages/what-we-bring.mp4':
    'uRZ0138yFZCaWlO8HEVfkjpKUtYA700UxwjUlcrjhaq00Y'
};

export const getMuxPlaybackId = (src?: string) => {
  if (!src) return undefined;
  return muxPlaybackIds[src];
};

export const getMuxPosterUrl = (playbackId?: string, width = 1280) => {
  if (!playbackId) return undefined;
  const [id, query = ''] = playbackId.split('?');
  const base = `https://image.mux.com/${id}/thumbnail.jpg`;
  const params = new URLSearchParams(query);
  params.set('width', String(width));
  return `${base}?${params.toString()}`;
};

export const muxBackgroundVideoStyle: CSSProperties = {
  backgroundColor: '#000'
};
