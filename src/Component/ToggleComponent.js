import React, { useState } from 'react'
import { Toggle } from '../components/ui/toggle'
import { Bold, Italic } from 'lucide-react'

const ToggleComponent = () => {
  const [value, setValue] = useState(false)
  // console.log(value);    
  return (
    <div>
      {/* --- Default --- */}
      <div className='m-4'>
        <Toggle aria-label="Toggle bold" value={value} onClick={() => setValue(!value)}>
          <Bold className="h-4 w-4" />
        </Toggle>
      </div>

      {/* --- Outline --- */}
      <div className='m-4'>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>

      {/* --- With Text --- */}
      <div className='m-4'>
        <Toggle aria-label="Toggle italic">
          <Italic className="mr-2 h-4 w-4" />
          Italic
        </Toggle>
      </div>

      {/* --- Small --- */}
      <div className='m-4'>
        <Toggle size="sm" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>

      {/* --- Large --- */}
      <div className='m-4'>
        <Toggle size="lg" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      </div>

      {/* --- Disabled --- */}
      <div className='m-4'>
        <Toggle aria-label="Toggle bold" disabled>
          <Bold className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  )
}

export default ToggleComponent
