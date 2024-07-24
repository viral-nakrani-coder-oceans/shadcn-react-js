import React from 'react'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'

const InputComponent = () => {
    return (
        <div className='m-4'>
            {/* --- Default Input --- */}
            <div className='Default mb-4'>
                <Input type="email" placeholder="Email" className="w-[250px]" />
            </div>

            {/* --- File Input --- */}
            <div className='File mb-4'>
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" className="w-[250px]" />
            </div>

            {/* --- Disabled Input --- */}
            <div className='Disabled mb-4'>
                <Input type="email" placeholder="Email" disabled className="w-[250px]" />
            </div>

            {/* --- With Label Input --- */}
            <div className='Label mb-4'>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" className="w-[250px]" />
            </div>

            {/* --- With Button Input --- */}
            <div className='Button flex'>
                <Input type="email" placeholder="Email" className="w-[250px] me-2" />
                <Button type="submit">Subscribe</Button>
            </div>
        </div>
    )
}

export default InputComponent