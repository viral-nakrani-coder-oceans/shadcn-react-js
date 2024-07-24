import React, { useState } from 'react'
import { Slider } from '../components/ui/slider'

const SliderComponent = () => {
    const [range, setRange] = useState([50])
    console.log(range);

    return (
        <div className='m-6'>
            <Slider value={range} onValueChange={(value) => setRange(value)} step={1} min={0} max={100} className='w-[50%]' />
        </div>
    )
}

export default SliderComponent