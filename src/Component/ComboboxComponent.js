import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover'
import { Button } from '../components/ui/button'
import { ArrowUpCircle, Calendar, Check, CheckCircle2, ChevronsUpDown, Circle, HelpCircle, MoreHorizontal, Tags, Trash, User, XCircle } from 'lucide-react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../components/ui/command'
import { cn } from '../lib/utils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '../components/ui/dropdown-menu'
import { Drawer, DrawerContent, DrawerTrigger } from '../components/ui/drawer'
import { isBrowser } from 'react-device-detect'

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
]


const statuses = [
    {
        value: "backlog",
        label: "Backlog",
        icon: HelpCircle,
    },
    {
        value: "todo",
        label: "Todo",
        icon: Circle,
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: ArrowUpCircle,
    },
    {
        value: "done",
        label: "Done",
        icon: CheckCircle2,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: XCircle,
    },
]


const labels = [
    "feature",
    "bug",
    "enhancement",
    "documentation",
    "design",
    "question",
    "maintenance",
]

const status = [
    {
        value: "backlog",
        label: "Backlog",
    },
    {
        value: "todo",
        label: "Todo",
    },
    {
        value: "in progress",
        label: "In Progress",
    },
    {
        value: "done",
        label: "Done",
    },
    {
        value: "canceled",
        label: "Canceled",
    },
]


const ComboboxComponent = () => {
    const [openCombobox, setOpenCombobox] = useState(false)
    const [value, setValue] = useState('')

    const [openPopover, setOpenPopover] = useState(false)
    const [selectedStatus, setSelectedStatus] = useState('')

    const [openDropdown, setOpenDropdown] = useState(false)
    const [label, setLabel] = useState('feature')

    const [openResponsive, setOpenResponsive] = useState(false)
    const [selectedResponsive, setSelectedResponsive] = useState('')

    return (
        <div className='m-4'>
            {/* --- combobox --- */}
            <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        className="w-[200px] justify-between"
                    >
                        {value
                            ? frameworks.find((framework) => framework.value === value)?.label
                            : "Select framework..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                        key={framework.value}
                                        value={framework.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpenCombobox(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === framework.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {framework.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            {/* --- Popover --- */}
            <div className="flex items-center space-x-4 my-4">
                <p className="text-sm text-muted-foreground font-semibold">Status</p>
                <Popover open={openPopover} onOpenChange={setOpenPopover}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-[150px] justify-start"
                        >
                            {selectedStatus ? (
                                <>
                                    <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                                    {selectedStatus.label}
                                </>
                            ) : (
                                <>+ Set status</>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0" side="right" align="start">
                        <Command>
                            <CommandInput placeholder="Change status..." />
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup>
                                    {statuses.map((status) => (
                                        <CommandItem
                                            key={status.value}
                                            value={status.value}
                                            onSelect={(value) => {
                                                setSelectedStatus(
                                                    statuses.find((priority) => priority.value === value) ||
                                                    null
                                                )
                                                setOpenPopover(false)
                                            }}
                                        >
                                            <status.icon
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    status.value === selectedStatus?.value
                                                        ? "opacity-100"
                                                        : "opacity-40"
                                                )}
                                            />
                                            <span>{status.label}</span>
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>

            {/* --- Dropdown Menu --- */}
            <div className="flex w-[600px] flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
                <p className="text-sm font-medium leading-none">
                    <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
                        {label}
                    </span>
                    <span className="text-muted-foreground">Create a new project</span>
                </p>
                <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                Assign to...
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                Set due date...
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                    <Tags className="mr-2 h-4 w-4" />
                                    Apply label
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent className="p-0">
                                    <Command>
                                        <CommandInput
                                            placeholder="Filter label..."
                                            autoFocus={true}
                                        />
                                        <CommandList>
                                            <CommandEmpty>No label found.</CommandEmpty>
                                            <CommandGroup>
                                                {labels.map((label) => (
                                                    <CommandItem
                                                        key={label}
                                                        value={label}
                                                        onSelect={(value) => {
                                                            setLabel(value)
                                                            setOpenDropdown(false)
                                                        }}
                                                    >
                                                        {label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </DropdownMenuSubContent>
                            </DropdownMenuSub>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete
                                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* --- Responsive --- */}
            <div className='my-4'>
                {
                    isBrowser ? (
                        <Popover open={openResponsive} onOpenChange={setOpenResponsive}>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="w-[200px] justify-start">
                                    {selectedResponsive ? <>{selectedResponsive.label}</> : <>+ Set status</>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0" align="start">
                                <Command>
                                    <CommandInput placeholder="Filter status..." />
                                    <CommandList>
                                        <CommandEmpty>No results found.</CommandEmpty>
                                        <CommandGroup>
                                            {status.map((item) => (
                                                <CommandItem
                                                    key={item.value}
                                                    value={item.value}
                                                    onSelect={(value) => {
                                                        setSelectedResponsive(
                                                            status.find((priority) => priority.value === value) || null
                                                        )
                                                        setOpenResponsive(false)
                                                    }}
                                                >
                                                    {item.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <Drawer open={openResponsive} onOpenChange={setOpenResponsive}>
                            <DrawerTrigger asChild>
                                <Button variant="outline" className="w-[200px] justify-start">
                                    {selectedResponsive ? <>{selectedResponsive.label}</> : <>+ Set status</>}
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <div className="mt-4 border-t">
                                    <Command>
                                        <CommandInput placeholder="Filter status..." />
                                        <CommandList>
                                            <CommandEmpty>No results found.</CommandEmpty>
                                            <CommandGroup>
                                                {status.map((item) => (
                                                    <CommandItem
                                                        key={item.value}
                                                        value={item.value}
                                                        onSelect={(value) => {
                                                            setSelectedResponsive(
                                                                status.find((priority) => priority.value === value) || null
                                                            )
                                                            setOpenResponsive(false)
                                                        }}
                                                    >
                                                        {item.label}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    )
                }
            </div>
        </div>
    )
}

export default ComboboxComponent
