import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MainPage from './pages/MainPage'
import PlaylistDetails from './pages/PlaylistDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />}/>
        <Route path="/playlistDetails/:id" element={<PlaylistDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App