import { create } from "zustand";
import { backendRequest } from "../api/backend";

export const useAuthStore = create((set) => ({
  user: {
    Authstatus: null,
    name: "",
    roles: [],
    permissionsList: [],
    document_id: "",
    token: localStorage.getItem("token_access"),
    load: false,
  },
  auth: async (userdata) => {
    set((state) => ({
      user: {
        ...state.user,
        load: true,
      },
    }));
    try {
      const { data } = await backendRequest.post(`auth/login`, userdata);
      let permissionsList = [];
      data.data.roles.forEach((element) => {
        permissionsList.push(...element.permissions);
      });
      localStorage.setItem("token_access", data.data.token);
      set((state) => ({
        user: {
          Authstatus: true,
          name: data.data.name,
          roles: data.data.roles,
          permissionsList,
          document_id: "",
          token: data.data.token,
          load: false,
        },
      }));
      return [
        {
          authStatus: true,
        },
        {
          title: `Bienvenido otra vez ${data.data.name}`,
          message: "Comencemos a trabajar.",
          status: true,
        },
      ];
    } catch (error) {
      if (error.status == 401) {
        return [
          {
            authStatus: false,
          },
          {
            title: "Ups hay un error",
            message:
              "El usuario o contraseña es incorrecto, verifique e intente de nuevo.",
            variant: "destructive",
            status: false,
            load: false,
          },
        ];
      }
    }
  },

  checkAuth: async () => {
    try {
      const { data } = await backendRequest.get(`auth/whoIAm`);
      let permissionsList = [];
      data.data.roles.forEach((element) => {
        permissionsList.push(...element.permissions);
      });
      const dataRes = {
        user: {
          Authstatus: true,
          name: data.data.name,
          roles: data.data.roles,
          permissionsList,
          document_id: data.data.document_id,
          token: localStorage.getItem("token_access"),
        },
      };
      set((state) => dataRes);
    } catch (error) {
      if (error.status == 401) {
        localStorage.removeItem("token_access");
        set((state) => ({
          user: {
            Authstatus: false,
            name: "",
            roles: [],
            permissionsList: [],
            document_id: "",
            token: null,
            load: false,
          },
        }));
      }
    }
  },

  logOut: async () => {
    set((state) => ({
      user: {
        ...state.user,
        load: true,
      },
    }));
    try {
      const { data } = await backendRequest.get(`auth/logout`);
      localStorage.removeItem("token_access");
      set((state) => ({
        user: {
          Authstatus: false,
          name: "",
          roles: [],
          permissionsList: [],
          document_id: "",
          token: null,
          load: false,
        },
      }));

      return [
        {
          authStatus: false,
        },
        {
          title: `Has cerrado sesión`,
          message: "Que tengas buen día.",
          status: true,
        },
      ];
      
    } catch (error) {}
  },
}));
