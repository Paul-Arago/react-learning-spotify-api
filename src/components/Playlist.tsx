import './Playlist.css';
import { Link } from 'react-router-dom';
import type { IPlaylist } from '../types/Playlist';

function Playlist({ playlist }: { playlist: IPlaylist }) {
    return (
        <>
            <Link
                to={`/playlistDetails/${playlist.id}`}
                className="PlaylistContainer"
            >
                <div>
                    <img className="PlaylistImage" src={playlist.images[0]?.url} alt={playlist.name} />
                </div>
                <div className="PlaylistDetails">
                    <h2>{playlist.name}</h2>
                    <p>{playlist.description}</p>
                    <p>Nombre de morceaux : {playlist.tracks.total}</p>
                </div>
            </Link>
        </>
    )
}


export default Playlist;