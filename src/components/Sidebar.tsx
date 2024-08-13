'use client'

import React, { useState } from 'react'
import SnakeForm from './SnakeForm'

interface Snake {
  id: number
  name: string
  image: string
  adoptionDate: string
  birthDate: string
}

const Sidebar: React.FC = () => {
  const [snakes, setSnakes] = useState<Snake[]>([])
  const [showForm, setShowForm] = useState(false)
  const [editingSnake, setEditingSnake] = useState<Snake | null>(null)

  const handleAddSnake = (snake: Omit<Snake, 'id'>) => {
    setSnakes([...snakes, { ...snake, id: Date.now() }])
    setShowForm(false)
  }

  const handleEditSnake = (snake: Snake) => {
    setSnakes(snakes.map(s => s.id === snake.id ? snake : s))
    setEditingSnake(null)
  }

  const handleDeleteSnake = (id: number) => {
    setSnakes(snakes.filter(s => s.id !== id))
  }

  return (
    <aside className="w-64 bg-gray-100 p-4 h-screen">
      <h2 className="text-xl font-bold mb-4">My Snakes</h2>
      <ul>
        {snakes.map(snake => (
          <li key={snake.id} className="mb-2">
            <div className="flex items-center">
              <img src={snake.image} alt={snake.name} className="w-10 h-10 rounded-full mr-2" />
              <span>{snake.name}</span>
            </div>
            <button onClick={() => setEditingSnake(snake)} className="text-blue-500 mr-2">Edit</button>
            <button onClick={() => handleDeleteSnake(snake.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowForm(true)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Add Snake
      </button>
      {(showForm || editingSnake) && (
        <SnakeForm
          onSubmit={editingSnake ? handleEditSnake : handleAddSnake}
          onCancel={() => {
            setShowForm(false)
            setEditingSnake(null)
          }}
          initialData={editingSnake}
        />
      )}
    </aside>
  )
}

export default Sidebar
