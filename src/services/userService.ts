const API_URL = 'http://127.0.0.1:8000'

export async function getUserInfo() {
  const response = await fetch(`${API_URL}/user/info`);

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Erreur API user info:', response.status, errorText);
    throw new Error('Impossible de récupérer les informations utilisateur');
  }

  return response.json();
}
