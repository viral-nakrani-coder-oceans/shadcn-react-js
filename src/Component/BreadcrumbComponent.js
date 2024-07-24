import React, { useState } from 'react'
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../components/ui/drawer'
import { Link } from 'react-router-dom'
import { ChevronDown, Slash } from 'lucide-react'
import { Button } from '../components/ui/button'
import { isBrowser } from 'react-device-detect'

const BreadcrumbComponent = () => {
    const [open, setOpen] = useState(false)

    const items = [
        { href: "#", label: "Home" },
        { href: "#", label: "Documentation" },
        { href: "#", label: "Building Your Application" },
        { href: "#", label: "Data Fetching" },
        { label: "Caching and Revalidating" },
    ]

    const ITEMS_TO_DISPLAY = 3

    return (
        <div className='m-4'>
            {/* --- Custom Separator --- */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* --- Dropdown --- */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1">
                                Components
                                <ChevronDown className="h-4 w-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem>Documentation</DropdownMenuItem>
                                <DropdownMenuItem>Themes</DropdownMenuItem>
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* --- Collapsed Breadcrumb --- */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbEllipsis />
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Component</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* --- Link Component --- */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="#">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="#">Components</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* --- Responsive Breadcrumb --- */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href={items[0].href}>{items[0].label}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    {items.length > ITEMS_TO_DISPLAY ? (
                        <>
                            <BreadcrumbItem>
                                {isBrowser ? (
                                    <DropdownMenu open={open} onOpenChange={setOpen}>
                                        <DropdownMenuTrigger
                                            className="flex items-center gap-1"
                                            aria-label="Toggle menu"
                                        >
                                            <BreadcrumbEllipsis className="h-4 w-4" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start">
                                            {items.slice(1, -2).map((item, index) => (
                                                <DropdownMenuItem key={index}>
                                                    <Link to={item.href ? item.href : "#"}>
                                                        {item.label}
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <Drawer open={open} onOpenChange={setOpen}>
                                        <DrawerTrigger aria-label="Toggle Menu">
                                            <BreadcrumbEllipsis className="h-4 w-4" />
                                        </DrawerTrigger>
                                        <DrawerContent>
                                            <DrawerHeader className="text-left">
                                                <DrawerTitle>Navigate to</DrawerTitle>
                                                <DrawerDescription>
                                                    Select a page to navigate to.
                                                </DrawerDescription>
                                            </DrawerHeader>
                                            <div className="grid gap-1 px-4">
                                                {items.slice(1, -2).map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        to={item.href ? item.href : "#"}
                                                        className="py-1 text-sm"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                            <DrawerFooter className="pt-4">
                                                <DrawerClose asChild>
                                                    <Button variant="outline">Close</Button>
                                                </DrawerClose>
                                            </DrawerFooter>
                                        </DrawerContent>
                                    </Drawer>
                                )}
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </>
                    ) : null}
                    {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
                        <BreadcrumbItem key={index}>
                            {item.href ? (
                                <>
                                    <BreadcrumbLink
                                        asChild
                                        className="max-w-20 truncate md:max-w-none"
                                    >
                                        <Link to={item.href}>{item.label}</Link>
                                    </BreadcrumbLink>
                                    <BreadcrumbSeparator />
                                </>
                            ) : (
                                <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                                    {item.label}
                                </BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

export default BreadcrumbComponent
