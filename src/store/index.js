import { defineStore } from "pinia"
import { getOwnProfile } from "../services/profileService"

export const useStore = defineStore("store", {
  state: () => ({
    //Navbar
    current: 0,
    navOptions: {
      user: ["Reservar clases", "Actividades", "Contacto", "perfil"],
      admin: ["Reservar clases", "Actividades", "Contacto", "Usuarios"]
    },
    rol: "admin",
    selectedUser: false,

    //User info
    userInfo: {},
    counter: 0,
    lastStep: 0
  }),
  actions: {
    setUserInfo(obj) {
      this.userInfo = obj
    },
    async getMyProfile() {
      const { result } = await getOwnProfile()
      this.setCV(result)
    }
  },
  persist: true
})
