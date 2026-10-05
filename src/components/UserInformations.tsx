import { useEffect, useState } from 'react';
import { getUserInfo } from '../services/userService';

interface User { 
    name: string; 
    email: string; 
}

function UserInformations() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUserInfo() {
      try {
        const data = await getUserInfo();
        setUser(data);
      } catch (err: any) {
        setError(err.message);
      }
    }
    loadUserInfo();
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <p>Nom : {user.name}</p>
      <p>Email : {user.email}</p>
    </div>
  );
}

export default UserInformations;