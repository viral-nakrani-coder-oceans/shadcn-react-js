import React from 'react'
import { Progress } from '../components/ui/progress'

const ProgressComponent = () => {
    return (
        <div className='m-4'>
            <Progress value={75} className="w-[50%]" />
        </div>
    )
}

export default ProgressComponent