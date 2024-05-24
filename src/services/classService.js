import api from "./index"

export const getAllClasses = async () => {
  try {
    const { data } = await api.get("/class","",
    )
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}