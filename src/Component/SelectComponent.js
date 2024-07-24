import React, { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../components/ui/select'

const data = [
  {
    id: "apple",
    name: "Apple"
  },
  {
    id: "banana",
    name: "Banana"
  },
  {
    id: "blueberry",
    name: "Blueberry"
  },
  {
    id: "grapes",
    name: "Grapes"
  },
  {
    id: "pineapple",
    name: "Pineapple"
  }
]

const timezone = [
  {
    time: "Eastern Standard Time (EST)"
  },
  {
    time: "Central Standard Time (CST)"
  },
  {
    time: "Mountain Standard Time (MST)"
  },
  {
    time: "Pacific Standard Time (PST)"
  },
  {
    time: "Alaska Standard Time (AKST)"
  },
  {
    time: "Hawaii Standard Time (HST)"
  },
  {
    time: "Greenwich Mean Time (GMT)"
  },
  {
    time: "Central European Time (CET)"
  },
  {
    time: "Eastern European Time (EET)"
  },
  {
    time: "Western European Summer Time (WEST)"
  }
]

const SelectComponent = () => {
  return (
    <div>
      <div className='m-4'>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              {
                data.map((item, index) => {
                  return (
                    <div key={index}>
                      <SelectItem value={item}>{item.name}</SelectItem>
                    </div>
                  )
                })
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* --- Scrollable --- */}
      <div className='m-4'>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Timezone" />
          </SelectTrigger>
          <SelectContent className="h-48">
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              {
                timezone.map((item, index) => {
                  return (
                    <div key={index}>
                      <SelectItem value={item}>{item.time}</SelectItem>
                    </div>
                  )
                })
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default SelectComponent