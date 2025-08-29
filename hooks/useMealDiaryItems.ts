import { useMealDiaryStore } from '@/store/useMealDiaryStore'
import { MealItem } from '@/types/FoodEmoji'

type MealItemsByDate = Record<number, MealItem[]>

export function useMealDiaryItems(): MealItemsByDate {
  const { mealItems } = useMealDiaryStore()
  const mealItemsByDate = mealItems.reduce((acc, item) => {
    const { timestamp } = item.dateAdded

    if (!acc[timestamp]) {
      acc[timestamp] = []
    }

    acc[timestamp].push(item)
    return acc
  }, {} as MealItemsByDate)

  return mealItemsByDate
}
