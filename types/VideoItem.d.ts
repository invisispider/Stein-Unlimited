// types/VideoItem.d.ts

export interface VideoItem {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: {
      kind: string;
      videoId: string;
    };
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
      standard: Thumbnail;
      maxres: Thumbnail;
    };
    title: string;
    videoOwnerChannelId: string;
    videoOwnerChannelTitle: string;
  }
  
  export interface Thumbnail {
    url: string;
    width: number;
    height: number;
  }
  