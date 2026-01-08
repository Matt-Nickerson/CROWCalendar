'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect, useState } from 'react'

type DbEvent = {
  id: string
  title: string
  description: string | null
  location: string | null
  start_at: string
  end_at: string | null
  all_day: boolean
  
}

const Calendar = () => {
  const [events, setEvents] = useState<DbEvent[]>([])

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch('/api/events', { cache: 'no-store', method: 'GET' })
        if (!res.ok) throw new Error(await res.text())

        const data: DbEvent[] = await res.json()

        const calendarEvents = data.map((e) => ({
          id: e.id,
          title: e.title,
          start_at: e.start_at,
          end_at: e.end_at ?? null,
          all_day: e.all_day,
          description: e.description,
          location: e.location,
        }))

        setEvents(calendarEvents)
        console.log('Loaded events:', calendarEvents)
      } catch (err) {
        console.error('Failed to load events:', err)
        setEvents([])
      }
    }

    loadEvents()
  }, [])

  function transformEvents(dbEvents: DbEvent[]) {
    return dbEvents.map((event) => ({
      id: event.id,
      title: event.title,
      start_at: event.start_at,
      end_at: event.end_at ?? null,
      all_day: event.all_day,
      description: event.description,
      location: event.location,
    }))
  }

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height={1000}
      events={[{ title: 'event', start: '2026-01-09T12:30:00' }]}
    />
  )
}

export default Calendar;