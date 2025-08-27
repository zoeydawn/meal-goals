import { DateObject } from '@/types/calendarTypes'

export function getTodayDateObject(): DateObject {
  const now = new Date()

  const year = now.getFullYear()
  const month = now.getMonth() + 1 // JS months are 0-indexed
  const day = now.getDate()
  const timestamp = now.getTime()

  // Ensure zero-padded month/day for YYYY-MM-DD format
  const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`

  return {
    dateString,
    day,
    month,
    year,
    timestamp,
  }
}
