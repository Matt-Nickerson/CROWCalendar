'use client'
import Calendar from './components/Calendar'




export default function Home() {

  function handleAddEvent() {
    console.log('Add Event button clicked');
  }
  return (
    <main className="p-6">
      <button onClick={handleAddEvent}> Add Event </button>

      <Calendar />
    </main>
  )
}