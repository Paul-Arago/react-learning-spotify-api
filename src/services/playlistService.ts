import type { IPlaylist } from "../types/Playlist"
import type { IPlaylistResponse } from "../types/PlaylistResponse"

const API_URL = 'http://127.0.0.1:8000'

export async function getPlaylists(): Promise<IPlaylistResponse> {
  const response = await fetch(`${API_URL}/playlists`)

  if (!response.ok) {
    const errorText = await response.text() 
    console.error('Erreur API playlists:', response.status, errorText)
    throw new Error('Impossible de récupérer les playlists')
  }

  return response.json()
}

export async function getPlaylistDetails(playlistId: string): Promise<IPlaylist> {
  const response = await fetch(`${API_URL}/playlists/${playlistId}`)

  if (!response.ok) {
    const errorText = await response.text()
    console.error('Erreur API playlist details:', response.status, errorText)
    throw new Error('Impossible de récupérer les détails de la playlist')
  }

  return response.json()
}