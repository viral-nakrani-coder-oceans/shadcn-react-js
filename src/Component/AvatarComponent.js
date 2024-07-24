import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

const AvatarComponent = () => {
    return (
        <div className='m-4'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default AvatarComponent
