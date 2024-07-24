import React, { useContext } from 'react'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'
import { AlertCircle, Terminal } from 'lucide-react'
import { ThemeContext } from './CreateContext'

const AlertComponent = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className='m-4'>
            {/* --- Default Alert --- */}
            <Alert className='my-4' style={{ backgroundColor: theme }}>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components and dependencies to your app using the cli.
                </AlertDescription>
            </Alert>

            {/* --- Destructive Alert --- */}
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Your session has expired. Please log in again.
                </AlertDescription>
            </Alert>
        </div>
    )
}

export default AlertComponent
