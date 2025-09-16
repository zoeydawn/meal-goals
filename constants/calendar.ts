import { DateObject } from '@/types/calendarTypes'
import { MealItem } from '@/types/FoodEmoji'

export const getDateObject = (date: Date = new Date()): DateObject => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // JS months are 0-based
  const day = date.getDate()

  const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`

  return {
    dateString,
    day,
    month,
    year,
    timestamp: date.getTime(),
  }
}

/**
 * Get a date relative to a base date (DateObject).
 * @param offset number of days relative to baseDate (e.g. -1 for yesterday, 0 for same, 1 for next)
 * @param baseDate optional base date (defaults to today)
 */
export const getRelativeDateObject = (
  offset: number,
  baseDate: DateObject = getDateObject(),
): DateObject => {
  const date = new Date(baseDate.timestamp)
  date.setDate(date.getDate() + offset)
  return getDateObject(date)
}

/**
 * Check if two DateObjects fall on the same calendar day.
 */
export const isSameDay = (a: DateObject, b: DateObject): boolean => {
  return a.year === b.year && a.month === b.month && a.day === b.day
}

/**
 * Check if a DateObject is today.
 */
export const isToday = (date: DateObject): boolean => {
  return isSameDay(date, getDateObject())
}

/**
 * Check if a DateObject is yesterday.
 */
export const isYesterday = (date: DateObject): boolean => {
  return isSameDay(date, getRelativeDateObject(-1))
}

/**
 * Check if a DateObject is tomorrow.
 */
export const isTomorrow = (date: DateObject): boolean => {
  return isSameDay(date, getRelativeDateObject(1))
}

export const getToday = () => getDateObject()

export const formatDateObject = (
  date: DateObject,
  options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' },
): string => {
  if (isToday(date)) {
    return 'Today'
  }
  if (isTomorrow(date)) {
    return 'Tomorrow'
  }
  if (isYesterday(date)) {
    return 'Yesterday'
  }

  return new Intl.DateTimeFormat('en-US', options).format(
    new Date(date.timestamp),
  )
}

function startOfWeek(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay() // 0 = Sunday, 6 = Saturday
  d.setHours(0, 0, 0, 0)
  d.setDate(d.getDate() - day) // rewind to Sunday
  return d
}

function startOfMonth(date: Date): Date {
  const d = new Date(date.getFullYear(), date.getMonth(), 1)
  d.setHours(0, 0, 0, 0)
  return d
}

export function filterMealsThisWeek(mealItems: MealItem[]): MealItem[] {
  const now = new Date()
  const weekStart = startOfWeek(now).getTime()
  const today = now.getTime()

  return mealItems.filter((item) => {
    const ts = item.dateAdded.timestamp
    return ts >= weekStart && ts <= today
  })
}

export function filterMealsThisMonth(mealItems: MealItem[]): MealItem[] {
  const now = new Date()
  const monthStart = startOfMonth(now).getTime()
  const today = now.getTime()

  return mealItems.filter((item) => {
    const ts = item.dateAdded.timestamp
    return ts >= monthStart && ts <= today
  })
}
