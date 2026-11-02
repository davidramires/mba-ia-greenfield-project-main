import { buildOriginalKey, buildThumbnailKey } from './video-storage-keys.util';

describe('video-storage-keys', () => {
  const videoId = '11111111-1111-1111-1111-111111111111';

  it('builds the original object key under videos/{id}/', () => {
    expect(buildOriginalKey(videoId, '.mp4')).toBe(
      `videos/${videoId}/original.mp4`,
    );
  });

  it('builds the thumbnail object key under thumbnails/', () => {
    expect(buildThumbnailKey(videoId)).toBe(`thumbnails/${videoId}.jpg`);
  });
});
