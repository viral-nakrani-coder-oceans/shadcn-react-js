import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../components/ui/navigation-menu'
import { cn } from '../lib/utils'

const components = [
    {
        title: "Alert Dialog",
        href: "/alertdialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/hovercard",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/process",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/scrollarea",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    }
]

const NavigationMenuComponent = () => {
    return (
        <div className='m-4'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                shadcn/ui
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Beautifully designed components that you can copy and
                                                paste into your apps. Accessible. Customizable. Open
                                                Source.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="#" title="Introduction" desc="Re-usable components built using Radix UI and Tailwind CSS."></ListItem>
                                <ListItem href="#" title="Installation" desc="How to install dependencies and structure your app."></ListItem>
                                <ListItem href="#" title="Typography" desc="Styles for headings, paragraphs, lists...etc"></ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                        desc={component.description}
                                    >
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

const ListItem = (({ className, title, desc, href }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    href={href}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {desc}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})

export default NavigationMenuComponent
