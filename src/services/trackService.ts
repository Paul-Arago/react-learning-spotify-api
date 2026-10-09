import type { IPlaylistTracks } from "../types/Playlist";

const API_URL = 'http://127.0.0.1:8000'

export async function getTracks(playlistId: string): Promise<IPlaylistTracks> {
    const response = await fetch(`${API_URL}/playlists/${playlistId}/tracks`);

    if (!response.ok) {
        const errorText = await response.text();
        console.error('Erreur API tracks:', response.status, errorText);
        throw new Error('Impossible de récupérer les pistes');
    }

    return response.json();
}