import React, { useContext } from 'react'
import { Badge } from '../components/ui/badge'
import { ThemeContext } from './CreateContext'

const BadgeComponent = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div className='m-4'>
            {/* --- Default Badge --- */}
            <Badge style={{ backgroundColor: theme }}>Default</Badge>

            {/* --- Secondary Badge --- */}
            <Badge style={{ backgroundColor: theme }} variant='secondary'>Secondary</Badge>

            {/* --- Outline Badge --- */}
            <Badge style={{ backgroundColor: theme }} variant='outline'>Outline</Badge>

            {/* --- Destructive --- */}
            <Badge style={{ backgroundColor: theme }} variant='destructive'>Destructive</Badge>
        </div>
    )
}

export default BadgeComponent
