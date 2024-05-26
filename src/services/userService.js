import api from "./index"

export const getAllUsers = async () => {
  try {
    const { data } = await api.get("/user","",
  )
  return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getUserBookings = async () => {
  try {
    const { data } = await api.get(`/user/${userId}/bookings`, "",
    )
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}