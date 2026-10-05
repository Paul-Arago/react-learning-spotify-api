import type { IPlaylist } from "./Playlist";

export interface IPlaylistResponse {
    items: IPlaylist[];
    total: number;
    offset: number;
    limit: number;
    href: string;
}