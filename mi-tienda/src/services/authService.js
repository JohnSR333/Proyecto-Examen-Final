import axios from "axios";

const api = axios.create({
  baseURL: "https://691d0054d58e64bf0d34ac65.mockapi.io" 
});

export async function login(email, password) {
  try {
    const res = await api.get("/usuarios", {
      params: { email, password }
    });

    if (res.data.length === 0) {
      return null;
    }

    const token = "TOKEN-" + Date.now();
    sessionStorage.setItem("token", token);

    return res.data[0];
  } catch (err) {
    console.error("Error en login:", err);
    return null;
  }
}

export function logout() {
  sessionStorage.removeItem("token");
}

export function isAuthenticated() {
  return !!sessionStorage.getItem("token");
}
