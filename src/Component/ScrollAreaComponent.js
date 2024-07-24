import React from 'react'
import { ScrollArea, ScrollBar } from '../components/ui/scroll-area'

const data = [
    {
        id: "recents",
        label: "Recents",
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    },
    {
        id: "home",
        label: "Home",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
    },
    {
        id: "applications",
        label: "Applications",
        title: "dolorem eum magni eos aperiam quia"
    },
    {
        id: "desktop",
        label: "Desktop",
        title: "nesciunt iure omnis dolorem tempora et accusantium"
    },
    {
        id: "downloads",
        label: "Downloads",
        title: "et ea vero quia laudantium autem"
    },
    {
        id: "documents",
        label: "Documents",
        title: "dolorum ut in voluptas mollitia et saepe quo animi"
    },
    {
        id: "recents",
        label: "Recents",
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
    },
    {
        id: "home",
        label: "Home",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
    },
    {
        id: "applications",
        label: "Applications",
        title: "dolorem eum magni eos aperiam quia"
    },
    {
        id: "desktop",
        label: "Desktop",
        title: "nesciunt iure omnis dolorem tempora et accusantium"
    },
    {
        id: "downloads",
        label: "Downloads",
        title: "et ea vero quia laudantium autem"
    },
    {
        id: "documents",
        label: "Documents",
        title: "dolorum ut in voluptas mollitia et saepe quo animi"
    },
]

const ScrollAreaComponent = () => {
    return (
        <div>
            <div className='m-4'>
                <ScrollArea className="h-60 w-60 border rounded-md p-4">
                    <h4 className='font-medium mb-4'>Data</h4>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.label}
                                </div>
                            )
                        })
                    }
                </ScrollArea>
            </div>

            {/* --- Orientation --- */}
            <div className='m-4'>
                <ScrollArea className="h-60 w-72 border rounded-md whitespace-nowrap p-4">
                    <h4 className='font-medium mb-4'>Data</h4>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    )
}

export default ScrollAreaComponent
