import { create } from "zustand";
import { backendRequest } from "../api/backend";

export const useAlertStore = create((set) => ({
  alert: {
    status: false,
    message: "",
    title: "",
    variant: ""
  },
  changeState: (newAlert) =>
    set((state) => ({
      alert: { ...newAlert },
    })),
  resetState: (newAlert) =>
    set(() => ({
      alert: {
        status: false,
        message: "",
        title: "",
      },
    })),
}));
