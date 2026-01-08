'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useState } from 'react'
import { Theme } from '@fullcalendar/core/internal'





const Calendar = () => {

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}

      droppable={true}
      
      timeZone='EST'
      initialView="dayGridMonth"

      customButtons={{
        addEvent: {
          text: "Add Event"
        }
      }}

      headerToolbar={{
        start: 'prev,next today addEvent',
        center: 'title',
        end: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      height={1000}
      events={[
        { title: 'Event 1', date: '2026-01-01T12:30:00'},
        { title: 'Event 2', date: '2026-01-10T13:30:00' }
      ]}

      eventColor = '#470905'
      eventTextColor='#f2e1ac'
      displayEventTime = {true}
    />
  )
}

export default Calendar