import { FoodEmoji } from '@/types/FoodEmoji'
// import { DateData } from 'react-native-calendars'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// interface MealDiaryItemsByDate {
//   date: DateData
//   meals: FoodEmoji[]
// }

interface MealDiaryState {
  mealItems: FoodEmoji[]
  addItem: (item: FoodEmoji) => void
  // itemsByDate: MealDiaryItemsByDate[]
}

export const useMealDiaryStore = create<MealDiaryState>()(
  persist(
    (set) => ({
      mealItems: [],
      addItem: (item: FoodEmoji) =>
        set((state) => ({ mealItems: [...state.mealItems, item] })),
      // itemsByDate: (state) => state.mealItems,
      // setItemsByDate: (itemsByDate: MealDiaryItemsByDate[]) =>
      //   set({ itemsByDate }),
    }),
    { name: 'meal-diary' }, // storage key
  ),
)
