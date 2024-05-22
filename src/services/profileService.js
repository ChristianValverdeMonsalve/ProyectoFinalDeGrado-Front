import api from "./index"

export const getOwnProfile = async () => {
  try {
    const { data } = await api.get("/user/me", {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}