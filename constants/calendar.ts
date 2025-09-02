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
