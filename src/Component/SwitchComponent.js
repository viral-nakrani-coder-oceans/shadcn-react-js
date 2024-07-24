import React from 'react'
import { Switch } from '../components/ui/switch'
import { Label } from '../components/ui/label'

const SwitchComponent = () => {
    return (
        <div>
            <div className="flex items-center space-x-2 m-4">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>

            <div className="flex items-center space-x-2 m-4">
                <Switch id="airplane-mode" checked disabled />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
        </div>
    )
}

export default SwitchComponent