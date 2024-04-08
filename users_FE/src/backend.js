const { VITE_BACKEND_URL } = import.meta.env;

export const getUsers = async () => {
  const response = await fetch(`${VITE_BACKEND_URL}/users`)
  const data = await response.json();
  return data;
}