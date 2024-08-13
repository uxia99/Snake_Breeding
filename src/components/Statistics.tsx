import React, { useState } from 'react'
import { Event } from '../lib/types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

interface StatisticsProps {
  events: Event[]
}

const Statistics: React.FC<StatisticsProps> = ({ events }) => {
  const [selectedStat, setSelectedStat] = useState('Weight')

  const prepareData = () => {
    const sortedEvents = events
      .filter((event) => event.type === selectedStat)
      .sort((a, b) => a.date.getTime() - b.date.getTime())

    return sortedEvents.map((event) => ({
      date: event.date.toISOString().split('T')[0],
      value: parseFloat(event.note || '0') || 0,
    }))
  }

  const data = prepareData()

  const statTypes = ['Weight', 'Feeding', 'Shedding', 'Vet Visit', 'Defecation', 'Laying', 'Hatching']

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <div className="flex space-x-2 mb-4">
        {statTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedStat(type)}
            className={`px-3 py-1 rounded ${
              selectedStat === type ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

export default Statistics
