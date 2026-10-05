import PlaylistsDisplay from '../components/PlaylistsDisplay';
import UserInformations from '../components/UserInformations';

function MainPage() {
  return (
    <>
      <div>
        <UserInformations></UserInformations>
        <PlaylistsDisplay></PlaylistsDisplay>
      </div>
    </>
  );
}

export default MainPage