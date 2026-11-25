import { create } from "zustand";

interface IPStore {
  ipAddress: string;
  setIPAddress: (ip: string) => void;
}

export const useIPStore = create<IPStore>((set) => ({
  ipAddress: "192.212.174.101",

  setIPAddress: (ip) => {
    set({ ipAddress: ip });
  },
}));