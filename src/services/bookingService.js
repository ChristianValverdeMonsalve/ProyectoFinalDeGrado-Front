import api from "./index"

export const createBooking = async () => {
  try {
    const { data } = await api.post("/booking/:userId", {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
    if (response.status === 200) {
      alert(`Has reservado ${className} el ${date} a las ${timeTable}`);
    } else {
      alert('Error al reservar la clase. Inténtalo de nuevo.');
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getOwnBooking = async () => {
  try {
    const { data } = await api.get("/booking/me", {
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