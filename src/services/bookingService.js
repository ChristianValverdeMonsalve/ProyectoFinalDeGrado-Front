import api from "./index"

export const createBooking = async () => {
  try {
    const { data } = await api.post("/user/book/:classId", {
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

export const deleteBooking = async () => {
  try {
    
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const adminCreateBooking = async () => {
  try {
    
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const adminDeleteBooking = async () => {
  try {
    
  } catch (error) {
    console.error(error)
    throw error
  }
}