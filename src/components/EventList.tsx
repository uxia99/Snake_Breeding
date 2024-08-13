import React from 'react'
import { Event } from '../lib/types'

interface EventListProps {
  events: Event[]
  onDelete: (eventId: number) => void
}

const EventList: React.FC<EventListProps> = ({ events = [], onDelete }) => {
  return (
    <ul className="space-y-2">
      {events.map((event) => (
        <li key={event.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
          <div>
            <span className="font-semibold">{event.type}</span>
            {event.note && <p className="text-sm">{event.note}</p>}
            {event.link && (
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
                Link
              </a>
            )}
            {event.image && (
              <img src={event.image} alt="Event" className="mt-2 max-w-xs rounded" />
            )}
          </div>
          <button onClick={() => onDelete(event.id)} className="text-red-500">
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default EventList
