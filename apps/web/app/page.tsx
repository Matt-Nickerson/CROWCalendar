import Calendar from './components/Calendar'
import Navbar from './components/Sidebar'

export default function Home() {
  return (
    <main className="p-6">    
      <Navbar />
      <Calendar />
    </main>
  )
}