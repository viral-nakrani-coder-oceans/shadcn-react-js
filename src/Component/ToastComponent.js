import React from 'react'
import { Button } from '../components/ui/button'
import { Toaster } from '../components/ui/toaster'
import { useToast } from '../components/ui/use-toast'
import { ToastAction } from '../components/ui/toast'

const ToastComponent = () => {
    const { toast } = useToast()

    return (
        <div>
            <Toaster />
            {/* --- Simple --- */}
            <div className='m-4'>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast({
                            description: "Your message has been sent.",
                        })
                    }}
                >
                    Show Toast
                </Button>
            </div>

            {/* --- With Title --- */}
            <div className='m-4'>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast({
                            title: "Uh oh! Something went wrong.",
                            description: "There was a problem with your request.",
                        })
                    }}
                >
                    Show Toast
                </Button>
            </div>

            {/* --- With Action --- */}
            <div className='m-4'>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast({
                            title: "Uh oh! Something went wrong.",
                            description: "There was a problem with your request.",
                            action: <ToastAction altText="Try again">Try again</ToastAction>,
                        })
                    }}
                >
                    Show Toast
                </Button>
            </div>

            {/* --- Destructive --- */}
            <div className='m-4'>
                <Button
                    variant="outline"
                    onClick={() => {
                        toast({
                            variant: "destructive",
                            title: "Uh oh! Something went wrong.",
                            description: "There was a problem with your request.",
                            action: <ToastAction altText="Try again">Try again</ToastAction>,
                        })
                    }}
                >
                    Show Toast
                </Button>
            </div>
        </div>
    )
}

export default ToastComponent
