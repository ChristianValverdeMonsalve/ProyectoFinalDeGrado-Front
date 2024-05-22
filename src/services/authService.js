import api from "./index"

export const login = async (userInfo) => {
  try {
    const { data } = await api.post("/auth/login", userInfo)
    localStorage.setItem("token", data.result.token)
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}