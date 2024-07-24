import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AccordionComponent from './Component/AccordionComponent';
import AlertComponent from './Component/AlertComponent';
import AlertDialogComponent from './Component/AlertDialogComponent';
import AspectRatioComponent from './Component/AspectRatioComponent';
import AvatarComponent from './Component/AvatarComponent';
import BadgeComponent from './Component/BadgeComponent';
import BreadcrumbComponent from './Component/BreadcrumbComponent';
import ButtonComponent from './Component/ButtonComponent';
import CalendarComponent from './Component/CalendarComponent';
import CardComponent from './Component/CardComponent';
import CarouselComponent from './Component/CarouselComponent';
import CheckboxComponent from './Component/CheckboxComponent';
import CollapsibleComponent from './Component/CollapsibleComponent';
import ComboboxComponent from './Component/ComboboxComponent';
import CommandComponent from './Component/CommandComponent';
import ContextMenuComponent from './Component/ContextMenuComponent';
import HoverCardComponent from './Component/HoverCardComponent';
import DatePickerComponent from './Component/DatePickerComponent';
import DialogComponent from './Component/DialogComponent';
import DrawerComponent from './Component/DrawerComponent';
import DropdownMenuComponent from './Component/DropdownMenuComponent';
import FormComponent from './Component/FormComponent';
import InputComponent from './Component/InputComponent';
import InputOTPComponent from './Component/InputOTPComponent';
import LabelComponent from './Component/LabelComponent';
import MenubarComponent from './Component/MenubarComponent';
import NavigationMenuComponent from './Component/NavigationMenuComponent';
import PaginationComponent from './Component/PaginationComponent';
import PopoverComponent from './Component/PopoverComponent';
import ProgressComponent from './Component/ProgressComponent';
import RadioGroupComponent from './Component/RadioGroupComponent';
import ResizableComponent from './Component/ResizableComponent';
import ScrollAreaComponent from './Component/ScrollAreaComponent';
import SelectComponent from './Component/SelectComponent';
import SeparatorComponent from './Component/SeparatorComponent';
import SheetComponent from './Component/SheetComponent';
import SkeletonComponent from './Component/SkeletonComponent';
import SliderComponent from './Component/SliderComponent';
import SonnerComponent from './Component/SonnerComponent';
import SwitchComponent from './Component/SwitchComponent';
import TableComponent from './Component/TableComponent';
import TabsComponent from './Component/TabsComponent';
import TextareaComponent from './Component/TextareaComponent';
import ToastComponent from './Component/ToastComponent';
import ToggleComponent from './Component/ToggleComponent';
import ToggleGroupComponent from './Component/ToggleGroupComponent';
import TooltipComponent from './Component/TooltipComponent';
import { ScrollArea } from './components/ui/scroll-area';
import Playground from './Component/Playground';
import { Theme } from '@radix-ui/themes';
import { ThemeContext } from './Component/CreateContext';
import { useState } from 'react';


const pages = [
  {
    title: "Accordion",
    path: "/accordion"
  },
  {
    title: "Alert",
    path: "/alert"
  },
  {
    title: "AlertDialog",
    path: "/alertdialog"
  },
  {
    title: "AspectRatio",
    path: "/aspectratio"
  },
  {
    title: "Avatar",
    path: "/avatar"
  },
  {
    title: "Badge",
    path: "/badge"
  },
  {
    title: "Breadcrumb",
    path: "/breadcrumb"
  },
  {
    title: "Button",
    path: "/button"
  },
  {
    title: "Calendar",
    path: "/calendar"
  },
  {
    title: "Card",
    path: "/card"
  },
  {
    title: "Carousel",
    path: "/carousel"
  },
  {
    title: "Checkbox",
    path: "/checkbox"
  },
  {
    title: "Collapsible",
    path: "/collapsible"
  },
  {
    title: "Combobox",
    path: "/combobox"
  },
  {
    title: "Command",
    path: "/command"
  },
  {
    title: "ContextMenu",
    path: "/contextmenu"
  },
  {
    title: "DatePicker",
    path: "/datepicker"
  },
  {
    title: "Dialog",
    path: "/dialog"
  },
  {
    title: "Drawer",
    path: "/drawer"
  },
  {
    title: "DropdownMenu",
    path: "/dropdownmenu"
  },
  {
    title: "Form",
    path: "/form"
  },
  {
    title: "HoverCard",
    path: "/hovercard"
  },
  {
    title: "Input",
    path: "/input"
  },
  {
    title: "InputOTP",
    path: "/inputotp"
  },
  {
    title: "Label",
    path: "/label"
  },
  {
    title: "Menubar",
    path: "/menubar"
  },
  {
    title: "NavigationMenu",
    path: "/navigationmenu"
  },
  {
    title: "Pagination",
    path: "/pagination"
  },
  {
    title: "Popover",
    path: "/popover"
  },
  {
    title: "Progress",
    path: "/progress"
  },
  {
    title: "RadioGroup",
    path: "/radiogroup"
  },
  {
    title: "Resizable",
    path: "/resizable"
  },
  {
    title: "ScrollArea",
    path: "/scrollarea"
  },
  {
    title: "Select",
    path: "/select"
  },
  {
    title: "Separator",
    path: "/separator"
  },
  {
    title: "Sheet",
    path: "/sheet"
  },
  {
    title: "Skeleton",
    path: "/skeleton"
  },
  {
    title: "Slider",
    path: "/slider"
  },
  {
    title: "Sonner",
    path: "/sonner"
  },
  {
    title: "Switch",
    path: "/switch"
  },
  {
    title: "Table",
    path: "/table"
  },
  {
    title: "Tabs",
    path: "/tabs"
  },
  {
    title: "Textarea",
    path: "/textarea"
  },
  {
    title: "Toast",
    path: "/toast"
  },
  {
    title: "Toggle",
    path: "/toggle"
  },
  {
    title: "ToggleGroup",
    path: "/togglegroup"
  },
  {
    title: "Tooltip",
    path: "/tooltip"
  }
]

function App() {
  const [theme, setTheme] = useState('')
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Theme>
          <BrowserRouter>
            <div className='flex'>
              <ScrollArea className="w-[20%] h-screen py-6">
                <h4 className='font-semibold px-4 py-2'>Components</h4>
                {
                  pages.map((page, index) => {
                    return (
                      <div key={index} className='px-4 py-1'>
                        <Link to={page.path}>{page.title}</Link>
                      </div>
                    )
                  })
                }
              </ScrollArea>
              <ScrollArea className="w-[60%] h-screen p-5">
                <Routes>
                  <Route path='/accordion' element={<AccordionComponent />} />
                  <Route path='/alert' element={<AlertComponent />} />
                  <Route path='/alertdialog' element={<AlertDialogComponent />} />
                  <Route path='/aspectratio' element={<AspectRatioComponent />} />
                  <Route path='/avatar' element={<AvatarComponent />} />
                  <Route path='/badge' element={<BadgeComponent />} />
                  <Route path='/breadcrumb' element={<BreadcrumbComponent />} />
                  <Route path='/button' element={<ButtonComponent />} />
                  <Route path='/calendar' element={<CalendarComponent />} />
                  <Route path='/card' element={<CardComponent />} />
                  <Route path='/carousel' element={<CarouselComponent />} />
                  <Route path='/checkbox' element={<CheckboxComponent />} />
                  <Route path='/collapsible' element={<CollapsibleComponent />} />
                  <Route path='/combobox' element={<ComboboxComponent />} />
                  <Route path='/command' element={<CommandComponent />} />
                  <Route path='/contextmenu' element={<ContextMenuComponent />} />
                  <Route path='/datepicker' element={<DatePickerComponent />} />
                  <Route path='/dialog' element={<DialogComponent />} />
                  <Route path='/drawer' element={<DrawerComponent />} />
                  <Route path='/dropdownmenu' element={<DropdownMenuComponent />} />
                  <Route path='/form' element={<FormComponent />} />
                  <Route path='/hovercard' element={<HoverCardComponent />} />
                  <Route path='/input' element={<InputComponent />} />
                  <Route path='/inputotp' element={<InputOTPComponent />} />
                  <Route path='/label' element={<LabelComponent />} />
                  <Route path='/menubar' element={<MenubarComponent />} />
                  <Route path='/navigationmenu' element={<NavigationMenuComponent />} />
                  <Route path='/pagination' element={<PaginationComponent />} />
                  <Route path='/popover' element={<PopoverComponent />} />
                  <Route path='/progress' element={<ProgressComponent />} />
                  <Route path='radiogroup' element={<RadioGroupComponent />} />
                  <Route path='/resizable' element={<ResizableComponent />} />
                  <Route path='/scrollarea' element={<ScrollAreaComponent />} />
                  <Route path='/select' element={<SelectComponent />} />
                  <Route path='/separator' element={<SeparatorComponent />} />
                  <Route path='/sheet' element={<SheetComponent />} />
                  <Route path='/skeleton' element={<SkeletonComponent />} />
                  <Route path='/slider' element={<SliderComponent />} />
                  <Route path='/sonner' element={<SonnerComponent />} />
                  <Route path='/switch' element={<SwitchComponent />} />
                  <Route path='/table' element={<TableComponent />} />
                  <Route path='/tabs' element={<TabsComponent />} />
                  <Route path='/textarea' element={<TextareaComponent />} />
                  <Route path='/toast' element={<ToastComponent />} />
                  <Route path='/toggle' element={<ToggleComponent />} />
                  <Route path='/togglegroup' element={<ToggleGroupComponent />} />
                  <Route path='/tooltip' element={<TooltipComponent />} />
                </Routes>
              </ScrollArea>
              <div className='w-[20%]'>
                <Playground />
              </div>
            </div>
          </BrowserRouter>
        </Theme>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
