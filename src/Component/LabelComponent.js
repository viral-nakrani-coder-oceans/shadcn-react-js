import React from 'react'
import { Label } from '../components/ui/label'
import { Checkbox } from '../components/ui/checkbox'
import { Input } from '../components/ui/input'

const LabelComponent = () => {
    return (
        <div className='m-4'>
            <div className='label my-4'>
                <Checkbox id="terms" className='me-2' />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>

            <div className='label'>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="email" className="w-[250px]" />
            </div>
        </div>
    )
}

export default LabelComponent