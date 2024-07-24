import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
import { Card, CardContent } from '../components/ui/card'

const CarouselComponent = () => {
    return (
        <div>
            {/* --- Default Carousel --- */}
            <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* --- Size Carousel --- */}
            <Carousel
                opts={{
                    align: "center",
                    loop: true
                }}
                className="w-full max-w-sm mx-auto my-8"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* --- Spacing Carousel --- */}
            <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* --- Orientation Carousel --- */}
            <Carousel
                opts={{
                    align: "start",
                }}
                orientation="vertical"
                className="w-full max-w-xs mx-auto my-20"
            >
                <CarouselContent className="-mt-1 lg:h-[300px] md:h-[200px] h-[100px]">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pt-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-6">
                                        <span className="text-3xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CarouselComponent
