import React, { useState } from 'react'
import { Event } from '../lib/types'

interface EventFormProps {
  onSubmit: (event: Omit<Event, 'id'>) => void
  date: Date
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, date }) => {
  const [type, setType] = useState('')
  const [note, setNote] = useState('')
  const [link, setLink] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ type, note, link, image, date })
    setType('')
    setNote('')
    setLink('')
    setImage('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Event Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select type</option>
          <option value="Feeding">Feeding</option>
          <option value="Shedding">Shedding</option>
          <option value="Weight">Weight</option>
          <option value="Vet Visit">Vet Visit</option>
          <option value="Defecation">Defecation</option>
          <option value="Laying">Laying</option>
          <option value="Hatching">Hatching</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Link</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Image URL</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Event
      </button>
    </form>
  )
}

export default EventForm
