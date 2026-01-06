'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'


const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}

      droppable={true}
      
      timeZone='EST'
      initialView="dayGridMonth"
      headerToolbar={{
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      height={1000}
      events={[
        { title: 'Event 1', date: '2024-07-01' },
        { title: 'Event 2', date: '2024-07-02' }
      ]}
    />
  )
}

export default Calendar