import { Box, Button, Card, Text } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import React, { useContext } from 'react'
import { ThemeContext } from './CreateContext';
import { Moon, Sun } from 'lucide-react';


const accentColor = [
    {
        id: 1,
        bgColor: "#3E63DD"
    },
    {
        id: 2,
        bgColor: "#12677E"
    },
    {
        id: 3,
        bgColor: "#D6409F"
    },
    {
        id: 4,
        bgColor: "#46A758"
    }
]

const grayColor = [
    {
        id: 1,
        bgColor: "#3A3A3A"
    },
    {
        id: 2,
        bgColor: "#49474E"
    },
    {
        id: 3,
        bgColor: "#777B84"
    },
    {
        id: 4,
        bgColor: "#62605B"
    }
]


const Playground = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    // console.log(theme);

    return (
        <div>
            <Box className='my-10 px-2'>
                <Card>
                    <Text as="div" size="4" weight="bold">
                        Theme
                    </Text>
                    <Text as="div" color="gray" size="2">
                        Accent Color
                    </Text>
                    <div className='flex gap-2 my-3'>
                        {
                            accentColor.map((item) => {
                                return <div key={item.id} className='w-6 h-6 rounded-full' onClick={() => setTheme(item.bgColor)} style={{ backgroundColor: item.bgColor }}></div>
                            })
                        }
                    </div>
                    <Text as="div" color="gray" size="2">
                        Gray Color
                    </Text>
                    <div className='flex gap-2 my-3'>
                        {
                            grayColor.map((item) => {
                                return <div key={item.id} className='w-6 h-6 rounded-full' onClick={() => setTheme(item.bgColor)} style={{ backgroundColor: item.bgColor }}></div>
                            })
                        }
                    </div>
                    <div className='darkmode'>
                        <Text as="div" color="gray" size="2">
                            Appearance
                        </Text>
                        <div className='flex gap-3 my-3'>
                            <Button variant="outline">
                                <Sun /> Light
                            </Button>
                            <Button variant="outline">
                                <Moon /> Dark
                            </Button>
                        </div>
                    </div>
                </Card>
            </Box>
        </div>
    )
}

export default Playground
