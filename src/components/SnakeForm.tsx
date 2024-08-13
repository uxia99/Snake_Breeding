import React, { useState, useEffect } from 'react'

interface SnakeFormProps {
  onSubmit: (snake: { name: string; image: string; adoptionDate: string; birthDate: string }) => void
  onCancel: () => void
  initialData?: { name: string; image: string; adoptionDate: string; birthDate: string } | null
}

const SnakeForm: React.FC<SnakeFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [name, setName] = useState(initialData?.name || '')
  const [image, setImage] = useState(initialData?.image || '')
  const [adoptionDate, setAdoptionDate] = useState(initialData?.adoptionDate || '')
  const [birthDate, setBirthDate] = useState(initialData?.birthDate || '')

  useEffect(() => {
    if (initialData) {
      setName(initialData.name)
      setImage(initialData.image)
      setAdoptionDate(initialData.adoptionDate)
      setBirthDate(initialData.birthDate)
    }
  }, [initialData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ name, image, adoptionDate, birthDate })
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="date"
        value={adoptionDate}
        onChange={(e) => setAdoptionDate(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mr-2">
        {initialData ? 'Update' : 'Add'} Snakes
      </button>
      <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">
        Cancel
      </button>
    </form>
  )
}

export default SnakeForm
