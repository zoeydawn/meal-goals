import { DateObject } from '@/types/calendarTypes'

export const getToday = (): DateObject => {
  // TODO: change this so that it's actually today
  return {
    dateString: '2025-08-25',
    day: 25,
    month: 8,
    timestamp: 1756080000000,
    year: 2025,
  }
}
