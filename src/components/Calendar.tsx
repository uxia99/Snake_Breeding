import { useState } from 'react'

interface CalendarProps {
  onDateClick: (date: Date) => void
}

const Calendar: React.FC<CalendarProps> = ({ onDateClick }) => {
  const [currentDate] = useState(new Date())

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {['일', '월', '화', '수', '목', '금', '토'].map(day => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}
        {Array(firstDayOfMonth).fill(null).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map(day => (
          <button
            key={day}
            onClick={() => onDateClick(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
            className="p-2 text-center hover:bg-gray-100 rounded-full"
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calendar

// import { useState } from 'react'
// import { Event } from '../lib/types'

// interface CalendarProps {
//   onDateClick: (date: Date) => void
//   events: Event[]
// }

// const Calendar: React.FC<CalendarProps> = ({ onDateClick, events }) => {
//   const [currentDate, setCurrentDate] = useState(new Date())

//   const daysInMonth = new Date(
//     currentDate.getFullYear(),
//     currentDate.getMonth() + 1,
//     0
//   ).getDate()

//   const firstDayOfMonth = new Date(
//     currentDate.getFullYear(),
//     currentDate.getMonth(),
//     1
//   ).getDay()

//   const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

//   const handlePrevMonth = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
//     )
//   }

//   const handleNextMonth = () => {
//     setCurrentDate(
//       new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
//     )
//   }

//   return (
//     <div className="bg-white p-4 rounded-lg shadow w-full">
//       <div className="flex justify-between mb-4">
//         <button onClick={handlePrevMonth}>Prev</button>
//         <h2 className="text-xl font-semibold">
//           {currentDate.toLocaleString('default', {
//             month: 'long',
//             year: 'numeric',
//           })}
//         </h2>
//         <button onClick={handleNextMonth}>Next</button>
//       </div>
//       <div className="grid grid-cols-7 gap-2">
//         {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//           <div key={day} className="text-center font-semibold">
//             {day}
//           </div>
//         ))}
//         {Array(firstDayOfMonth)
//           .fill(null)
//           .map((_, index) => (
//             <div key={`empty-${index}`} />
//           ))}
//         {days.map((day) => {
//           const date = new Date(
//             currentDate.getFullYear(),
//             currentDate.getMonth(),
//             day
//           )
//           const hasEvents = events.some(
//             (event) => event.date.toDateString() === date.toDateString()
//           )
//           return (
//             <button
//               key={day}
//               onClick={() => onDateClick(date)}
//               className={`p-2 text-center rounded-full ${
//                 hasEvents ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
//               }`}
//             >
//               {day}
//             </button>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Calendar
