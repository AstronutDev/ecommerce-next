import create, { StoreApi } from "zustand";
import { IUseUI } from "./useUI.type";

const initialState = {
  displaySidebar: false,
};

const useUI = create<IUseUI>(
  (set: StoreApi<IUseUI>["setState"], get: StoreApi<IUseUI>["getState"]) => ({
    ...initialState,
    openSidebar: () => {
      set({ displaySidebar: true });
    },

    closeSidebar: () => {
      set({ displaySidebar: false });
    },
  })
);

export default useUI;
