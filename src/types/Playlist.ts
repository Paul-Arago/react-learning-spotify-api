export interface IExternalUrls { 
  spotify: string; 
} 

export interface IImage { 
  url: string; 
  height: number | null; 
  width: number | null; 
}

export interface IUser { 
  external_urls: IExternalUrls; 
  href: string; 
  id: string; 
  type: string; 
  uri: string; 
  display_name: string; 
} 

export interface IArtist { 
  external_urls: IExternalUrls; 
  href: string; 
  id: string; 
  name: string; 
  type: string; 
  uri: string; 
} 

export interface IAlbumRestrictions { 
  reason: string; 
} 

export interface IAlbum { 
  album_type: string; 
  total_tracks: number; 
  available_markets: string[]; 
  external_urls: IExternalUrls; 
  href: string; 
  id: string; 
  images: IImage[]; 
  name: string; 
  release_date: string; 
  release_date_precision: string; 
  restrictions: IAlbumRestrictions; 
  type: string;
  uri: string; 
  artists: IArtist[]; 
} 

export interface ITrackExternalIds { 
  isrc: string; 
  ean: string; 
  upc: string; 
} 

export interface ITrackRestrictions { 
  reason: string; 
} 

export interface ITrack { 
  album: IAlbum; 
  artists: IArtist[]; 
  available_markets: string[]; 
  disc_number: number; 
  duration_ms: number; 
  explicit: boolean; 
  external_ids: ITrackExternalIds; 
  external_urls: IExternalUrls; 
  href: string; 
  id: string; 
  is_playable: boolean; 
  linked_from: Record<string, unknown>; 
  restrictions: ITrackRestrictions; 
  name: string; 
  popularity: number; 
  preview_url: string; 
  track_number: number; 
  type: string; 
  uri: string; 
  is_local: boolean; 
} 

export interface IPlaylistItem { 
  added_at: string; 
  added_by: IUser;
  is_local: boolean;
  item: ITrack;
  track: ITrack; 
} 

export interface IPlaylistTracks { 
  href: string; 
  limit: number;
  next: string | null;
  offset: number; 
  previous: string | null; 
  total: number; 
  items: IPlaylistItem[]; 
}

export interface IPlaylist { 
  collaborative: boolean; 
  description: string; 
  external_urls: IExternalUrls; 
  href: string; 
  id: string; 
  images: IImage[]; 
  name: string; 
  owner: IUser; 
  public: boolean; 
  snapshot_id: string; 
  items: IPlaylistTracks; 
  tracks: IPlaylistTracks; 
  type: string; 
  uri: string; 
}