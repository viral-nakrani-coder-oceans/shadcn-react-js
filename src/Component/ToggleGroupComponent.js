import React, { useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group'
import { Bold, BoldIcon, Italic, ItalicIcon, Underline, UnderlineIcon } from 'lucide-react'

const powersList = [<BoldIcon />, <ItalicIcon />, <UnderlineIcon />]

const ToggleGroupComponent = () => {
    const [selectedPower, setSelectedPower] = useState('')

    return (
        <div>
            <div className='flex flex-col justify-between mt-8'>
                <ToggleGroup
                    type='single'
                    defaultValue={selectedPower}
                    value={selectedPower}
                    className='w-full'
                    onValueChange={(value) => setSelectedPower(value)}
                >
                    {powersList.map((value) => {
                        return (
                            <ToggleGroupItem
                                key={value}
                                variant='outline'
                                value={value}
                                className={selectedPower === value ? "bg-gray-200" : ""}
                            >
                                {value}
                            </ToggleGroupItem>
                        )
                    })}
                </ToggleGroup>
            </div>

            {/* --- Default --- */}
            <div className='my-4'>
                <ToggleGroup type="multiple">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {/* --- Outline --- */}
            <div className='my-4'>
                <ToggleGroup variant="outline" type="multiple">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {/* --- Single --- */}
            <div className='my-4'>
                <ToggleGroup type="single">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {/* --- Small --- */}
            <div className='my-4'>
                <ToggleGroup size="sm" type="multiple">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {/* --- Large --- */}
            <div className='my-4'>
                <ToggleGroup size="lg" type="multiple">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

            {/* --- Disabled --- */}
            <div className='my-4'>
                <ToggleGroup type="multiple" disabled>
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                        <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                        <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="underline" aria-label="Toggle underline">
                        <Underline className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>

        </div>
    )
}

export default ToggleGroupComponent
