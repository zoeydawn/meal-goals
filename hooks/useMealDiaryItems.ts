import { useMealDiaryStore } from '@/store/useMealDiaryStore'
import { MealItemsByDate } from '@/types/calendarTypes'

export function useMealDiaryItems(): MealItemsByDate {
  const { mealItems } = useMealDiaryStore()
  const mealItemsByDate = mealItems.reduce((acc, item) => {
    const { dateString } = item.dateAdded

    if (!acc[dateString]) {
      acc[dateString] = []
    }

    acc[dateString].push(item)
    return acc
  }, {} as MealItemsByDate)

  return mealItemsByDate
}
