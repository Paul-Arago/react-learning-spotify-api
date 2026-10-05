import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistDetails } from "../services/playlistService";
import type { IPlaylist, ITrack } from "../types/Playlist";
import Playlist from "../components/Playlist";
import { getTracks } from "../services/trackService";   

function PlaylistDetails() {
    const { id } = useParams();
    const [playlistDetails, setPlaylistDetails] = useState<IPlaylist | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [tracks, setTracks] = useState<ITrack[]>([]);

    const loadPlaylistDetails = async () => {
            if (!id) {
                setError("ID de playlist manquant");
                setLoading(false);
                return;
            }
            try {
                const playlistData = await getPlaylistDetails(id);
                setPlaylistDetails(playlistData);
            } catch (error) {
                console.error(error);
                setError("Impossible de récupérer la playlist");
            } finally {
                setLoading(false);
            }
        };

    const loadTracks = async () => {
        if (!id) {
            setError("ID de playlist manquant");
            setLoading(false);
            return;
        }
        try {
            const tracksData = await getTracks(id);
            setTracks(tracksData);
        } catch (error) {
            console.error(error);
            setError("Impossible de récupérer les pistes");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPlaylistDetails();
        loadTracks();
    }, [id]);

    if (loading) {
        return <p>Chargement de la playlist...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!playlistDetails) {
        return <p>Playlist introuvable.</p>;
    }

    return (
        <>
            <Playlist playlist={playlistDetails} />
            <div>
                <h2>Pistes</h2>
                <ul>
                    {tracks.map((track) => <li key={track.id}>{track.name}</li>)}
                </ul>
            </div>
        </>
    );
}

export default PlaylistDetails;