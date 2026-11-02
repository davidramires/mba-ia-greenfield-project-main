/**
 * Video object-key layout (phase-03-videos/TD-02). Lives in the videos domain —
 * storage only moves bytes; it does not own naming conventions.
 */
export function buildOriginalKey(videoId: string, extension: string): string {
  return `videos/${videoId}/original${extension}`;
}

export function buildThumbnailKey(videoId: string): string {
  return `thumbnails/${videoId}.jpg`;
}
