import React from 'react'
import { Button } from '../components/ui/button'
import { ChevronRight, Loader2, Mail } from 'lucide-react'

const ButtonComponent = () => {
    return (
        <div className='m-4'>
            {/* --- Primary Button ---  */}
            <div className='mb-4'>
                <Button>Primary</Button>
            </div>

            {/* --- Secondary Button --- */}
            <div className='mb-4'>
                <Button variant="secondary">Secondary</Button>
            </div>

            {/* --- Destructive Button --- */}
            <div className='mb-4'>
                <Button variant="destructive">Destructive</Button>
            </div>

            {/* --- Outline Button --- */}
            <div className='mb-4'>
                <Button variant="outline">Outline</Button>
            </div>

            {/* ---Ghost Button --- */}
            <div className='mb-4'>
                <Button variant='ghost'>Ghost</Button>
            </div>

            {/* --- Link Button --- */}
            <div className='mb-4'>
                <Button variant='link'>Link</Button>
            </div>

            {/* --- Icon Button --- */}
            <div className='mb-4'>
                <Button variant='secondary' size='icon' ><ChevronRight className="h-4 w-4" /></Button>
                <Button variant='outline'><Mail className='mr-2 h-4 w-4' /> Login With Email</Button>
            </div>

            {/* --- Loading Button --- */}
            <div className='mb-4'>
                <Button><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please Wait</Button>
            </div>
        </div>
    )
}

export default ButtonComponent
