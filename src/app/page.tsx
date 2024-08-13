'use client'

import { useState } from 'react'
import AnimalProfile from '../components/SnakeForm'
import Calendar from '../components/Calendar'
import EventList from '../components/EventList'
import SnakeForm from '../components/SnakeForm'

export default function Home() {
  const [events, setEvents] = useState([])
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  return (
    <div className="flex gap-8">
      <div className="w-1/3">
        <SnakeForm onSubmit={function (snake: { name: string; image: string; adoptionDate: string; birthDate: string }): void {
          throw new Error('Function not implemented.')
        } } onCancel={function (): void {
          throw new Error('Function not implemented.')
        } } />
      </div>
      <div className="w-2/3">
        <Calendar onDateClick={setSelectedDate} />
        <EventList events={events} onDelete={function (eventId: number): void {
          throw new Error('Function not implemented.')
        } } />
      </div>
    </div>
  )
}

// 'use client'

// import { useState } from 'react'
// import Calendar from '../components/Calendar'
// import EventForm from '../components/EventForm'
// import Statistics from '../components/Statistics'
// import { Event } from '../lib/types'

// export default function Home() {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null)
//   const [events, setEvents] = useState<Event[]>([])
//   const [showEventForm, setShowEventForm] = useState(false)

//   const handleDateClick = (date: Date) => {
//     setSelectedDate(date)
//     setShowEventForm(true)
//   }

//   const handleEventSubmit = (newEvent: Omit<Event, 'id'>) => {
//     setEvents([...events, { ...newEvent, id: Date.now() }])
//     setShowEventForm(false)
//   }

//   const handleEventDelete = (eventId: number) => {
//     setEvents(events.filter(event => event.id !== eventId))
//   }

//   return (
//     <div className="container mx-auto px-2">
//       <div className="mb-4">
//         <Calendar onDateClick={handleDateClick} events={events} />
//       </div>
//       {showEventForm && selectedDate && (
//         <EventForm
//           onSubmit={handleEventSubmit}
//           date={selectedDate}
//           onCancel={() => setShowEventForm(false)}
//         />
//       )}
//       <Statistics events={events} />
//     </div>
//   )
// }
