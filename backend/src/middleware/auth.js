export async function refreshToken() {
    const response = await fetch('/refresh-token-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: localStorage.getItem('refreshToken') }),
    });
  
    if (response.ok) {
      const { accessToken } = await response.json();
      localStorage.setItem('accessToken', accessToken);
      return accessToken;
    } else {
      throw new Error('Error al refrescar el token');
    }
  }
  