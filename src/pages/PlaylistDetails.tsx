import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistDetails } from "../services/playlistService";
import type { IPlaylist, IPlaylistItem } from "../types/Playlist";
import Playlist from "../components/Playlist";
import { getTracks } from "../services/trackService";
import './PlaylistDetails.css';

function PlaylistDetails() {
    const { id } = useParams();
    const [playlistDetails, setPlaylistDetails] = useState<IPlaylist | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [tracks, setTracks] = useState<IPlaylistItem[]>([]);

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
            setTracks(tracksData.items);
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
                <table className="trackTable">
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Artiste</th>
                            <th scope="col">Durée</th>
                            <th scope="col">Album</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {tracks.map((item) => ( 
                            <tr key={item.track.id}> 
                                <td> 
                                    <div className="trackInfo"> 
                                        <img className="TrackImage" src={item.track.album.images[0]?.url} alt={`Pochette de ${item.track.album.name}`} /> 
                                        <span className="trackName"> {item.track.name} </span> 
                                    </div>
                                </td> 
                                <td> 
                                    {item.track.artists.map((artist) => artist.name).join(", ")} 
                                </td> 
                                <td> 
                                    {Math.floor(item.track.duration_ms / 60000)}: {String( Math.floor( (item.track.duration_ms % 60000) / 1000 ) ).padStart(2, "0")} 
                                </td> 
                                <td>
                                    {item.track.album.name}
                                </td> 
                                <td> 
                                    <button>Supprimer</button>
                                </td> 
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PlaylistDetails;