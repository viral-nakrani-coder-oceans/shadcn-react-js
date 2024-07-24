import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'

const AccordionComponent = () => {
    return (
        <div className='m-4'>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other components' aesthetic.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default AccordionComponent
