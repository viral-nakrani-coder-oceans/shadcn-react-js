import React from 'react'
import { Button } from '../components/ui/button'
import { Toaster } from '../components/ui/sonner'
import { toast } from 'sonner'

const SonnerComponent = () => {
    return (
        <div className='m-4'>
            <Toaster richColors />
            <Button
                variant="outline"
                onClick={() =>
                    toast.success("Event has been created", {
                        description: "Sunday, December 03, 2023 at 9:00 AM",
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Show Toast
            </Button>
        </div>
    )
}

export default SonnerComponent
