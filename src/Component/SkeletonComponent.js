import React, { useEffect, useState } from 'react'
import { Skeleton } from '../components/ui/skeleton'
import axios from 'axios'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

const SkeletonComponent = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(data);

    const getData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        try {
            setLoading(false)
            setData(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 2000)
    }, [])

    return (
        <div className='m-4'>
            {
                loading && (
                    <div>
                        <Card className="w-[400px] mb-3">
                            <CardHeader>
                                <CardTitle className='flex justify-center'>
                                    <Skeleton className="w-[350px] h-[30px] rounded-full" />
                                </CardTitle>
                            </CardHeader>
                        </Card>
                        <Card className="w-[400px] mb-3">
                            <CardHeader>
                                <CardTitle className='flex justify-center'>
                                    <Skeleton className="w-[350px] h-[30px] rounded-full" />
                                </CardTitle>
                            </CardHeader>
                        </Card>
                        <Card className="w-[400px] mb-3">
                            <CardHeader>
                                <CardTitle className='flex justify-center'>
                                    <Skeleton className="w-[350px] h-[30px] rounded-full" />
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                )

            }
            {
                !loading && data && (
                    data.map((item) => {
                        return (
                            <Card className="w-[400px] my-3">
                                <CardHeader>
                                    <CardTitle>{item.name}</CardTitle>
                                </CardHeader>
                            </Card>
                        )
                    })
                )
            }
        </div>
    )
}

export default SkeletonComponent
