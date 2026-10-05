import { useAuth } from '../context/AuthContext'

function Home() {
  const { login } = useAuth()
  return (
    <div>
      <h1>Home</h1>
      <button onClick={login}>
        Se connecter
      </button>
    </div>
  )
}

export default Home