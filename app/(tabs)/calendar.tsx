import React from 'react'
import MonthCalendar from '@/components/MonthCalendar'
import WeekCalendar from '@/components/WeekCalendar'

const Page = () => {
  const [calendarView, setCalendarView] = React.useState('month')
  const setViewedDay = (view: string) => {
    console.log('viewed day', view)
    // setCalendarView('day')
  }

  return (
    <>
      {calendarView === 'month' && (
        <MonthCalendar setViewedDay={setViewedDay} />
      )}
      {calendarView === 'week' && <WeekCalendar />}
    </>
  )
}

export default Page
