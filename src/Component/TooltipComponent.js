import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip'
import { Button } from '../components/ui/button'

const TooltipComponent = () => {
    return (
        <div className='m-4'>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button>Hover</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}

export default TooltipComponent