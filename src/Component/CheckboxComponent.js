import React from 'react'
import { Checkbox } from '../components/ui/checkbox'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form'
import { useForm } from 'react-hook-form'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const items = [
    {
        id: "recents",
        label: "Recents",
    },
    {
        id: "home",
        label: "Home",
    },
    {
        id: "applications",
        label: "Applications",
    },
    {
        id: "desktop",
        label: "Desktop",
    },
    {
        id: "downloads",
        label: "Downloads",
    },
    {
        id: "documents",
        label: "Documents",
    },
]

const CheckboxComponent = () => {
    const singleValueForm = useForm({
        defaultValues: {
            Mobile: true
        }
    })

    const multipeValueForm = useForm({
        defaultValues: {
            items: ['recents', 'home', 'applications']
        }
    })

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            {/* --- Disabled --- */}
            <div className="flex items-center space-x-2 m-4">
                <Checkbox id="terms" disabled />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </label>
            </div>

            <div className="items-top flex space-x-2 m-4">
                <Checkbox id="terms1" />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Accept terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                        You agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </div>

            {/* --- Form --- */}
            <div className='form w-[400px] border rounded-md p-4 m-4'>
                <Form {...singleValueForm}>
                    <form onSubmit={singleValueForm.handleSubmit(onSubmit)} className='space-y-6'>
                        <FormField
                            control={singleValueForm.control}
                            name="Mobile"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Use different settings for my mobile devices
                                        </FormLabel>
                                        <FormDescription>
                                            You can manage your mobile notifications in the{" "}
                                            <Link to="#">mobile settings</Link> page.
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>


            <div className='form w-[400px] border rounded-md p-4 m-4'>
                <Form {...multipeValueForm}>
                    <form onSubmit={multipeValueForm.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={multipeValueForm.control}
                            name="items"
                            render={() => (
                                <FormItem>
                                    <div className="mb-4">
                                        <FormLabel className="text-base">Sidebar</FormLabel>
                                        <FormDescription>
                                            Select the items you want to display in the sidebar.
                                        </FormDescription>
                                    </div>
                                    {items.map((item) => (
                                        <FormField
                                            key={item.id}
                                            control={multipeValueForm.control}
                                            name="items"
                                            render={({ field }) => {
                                                return (
                                                    <FormItem
                                                        key={item.id}
                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(item.id)}
                                                                onCheckedChange={(checked) => {
                                                                    return checked
                                                                        ? field.onChange([...field.value, item.id])
                                                                        : field.onChange(
                                                                            field.value?.filter(
                                                                                (value) => value !== item.id
                                                                            )
                                                                        )
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {item.label}
                                                        </FormLabel>
                                                    </FormItem>
                                                )
                                            }}
                                        />
                                    ))}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CheckboxComponent
