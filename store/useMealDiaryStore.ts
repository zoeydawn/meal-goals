import { MealItem } from '@/types/FoodEmoji'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MealDiaryState {
  mealItems: MealItem[]
  addItem: (item: MealItem) => void
}

export const useMealDiaryStore = create<MealDiaryState>()(
  persist(
    (set) => ({
      mealItems: [],
      addItem: (item: MealItem) =>
        set((state) => ({ mealItems: [...state.mealItems, item] })),
    }),
    { name: 'meal-diary' }, // storage key
  ),
)
