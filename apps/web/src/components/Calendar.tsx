import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Event 1', date: '2024-07-01' },
        { title: 'Event 2', date: '2024-07-02' }
      ]}
    />
  )
}

export default Calendar