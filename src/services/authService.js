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

export const logout = async () => {
  try {
    await api.post("/auth/logout", null, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
    localStorage.removeItem("token")
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const checkAdmin = async () => {
  try {
    const response = await api.get("/auth/checkAdmin", {
      headers: {
        authorization: localStorage.getItem("token")
      }
  })
    return response.data.checkAdmin
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const checkAuth = () => {
  return !!localStorage.getItem('token')
}