import { create } from 'zustand'

interface AddFoodModalState {
  showModal: boolean
  setShowModal: (show: boolean) => void
}

export const useAddFoodModalStore = create<AddFoodModalState>((set) => ({
  showModal: false,
  setShowModal: (show: boolean) => set({ showModal: show }),
}))
