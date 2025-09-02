import { DateObject } from '@/types/calendarTypes'

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

export const getToday = () => getDateObject()
