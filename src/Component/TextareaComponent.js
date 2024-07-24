import React from 'react'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'

const TextareaComponent = () => {
    return (
        <div className='m-4'>
            {/* --- Default --- */}
            <div className='w-[350px] mb-6'>
                <Textarea placeholder='Type your message here.' />
            </div>

            {/* --- Disabled --- */}
            <div className='w-[350px] mb-6'>
                <Textarea placeholder='Type your message here.' disabled />
            </div>

            {/* --- With Label --- */}
            <div className='w-[350px] mb-6'>
                <Label htmlFor="message" >Your Message</Label>
                <Textarea placeholder='Type your message here.' id="message" />
            </div>

            {/* --- With Text --- */}
            <div className='w-[350px] mb-6'>
                <Label htmlFor="message" >Your Message</Label>
                <Textarea placeholder='Type your message here.' id="message" />
                <p className="text-sm text-muted-foreground">Your message will be copied to the support team.</p>
            </div>

            {/* --- With Button --- */}
            <div className='grid w-[350px] gap-y-2'>
                <Textarea placeholder='Type your message here.' />
                <Button>Send Message</Button>
            </div>
        </div>
    )
}

export default TextareaComponent
