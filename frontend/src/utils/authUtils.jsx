import axios from "axios";
import Cookies from "js-cookie";

export const getUserRole = async () => {
  const token = Cookies.get("token");
  if (!token) return null;

  try {
    const response = await axios.get(`${import.meta.env.VITE_RAILWAY_BACKEND_URL}/profile/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.isAdmin ? "Admin" : "Normal";
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
};

