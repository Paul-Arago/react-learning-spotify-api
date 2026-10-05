import { useEffect, useState } from "react";
import { getPlaylists } from "../services/playlistService";
import type { IPlaylist } from "../types/Playlist" ;
import type { IPlaylistResponse } from "../types/PlaylistResponse";
import Playlist from "./Playlist";

function PlaylistsDisplay() {
    const [playlists, setPlaylists] = useState<IPlaylist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const handleLoadPlaylists = async () => { 
        setLoading(true)
        setError(null)
        try {
            const data: IPlaylistResponse = await getPlaylists()
            setPlaylists(data?.items)
        } catch (error) { 
            console.error('Erreur:', error)
            setError('Impossible de récupérer les playlists')
        } finally { 
            setLoading(false)
        }
    }

    useEffect(() => {
        handleLoadPlaylists();
    }, []);

    if (loading) {
        return <p>Chargement des playlists...</p>
    }

    return (
        <div>
            <h1>Mes playlists</h1>
            {error && <p>{error}</p>}
            {
                playlists.map((playlist) => ( 
                    console.log('Playlist:', playlist),
                    <Playlist key={playlist.id} playlist={playlist} />
                ))
            }
        </div>
    )
}

export default PlaylistsDisplay;