import React, { useState } from 'react'
import { Calendar } from '../components/ui/calendar'

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date())
    // console.log(date);
    return (
        <div className='m-4'>
            <Calendar
                selected={date}
                onSelect={setDate}
                mode='single'
                className='border w-[280px] rounded-lg'
            >
            </Calendar>
        </div>
    )
}

export default CalendarComponent
