import React from 'react'
import { AspectRatio } from '../components/ui/aspect-ratio'
import Image from '../../src/assets/bg_img_shadcn.jpeg'

const AspectRatioComponent = () => {
    return (
        <div className='w-[500px] m-4'>
            <AspectRatio ratio={3 / 4}>
                <img src={Image} alt="Image" className="rounded-md object-cover" />
            </AspectRatio>
        </div>
    )
}

export default AspectRatioComponent
