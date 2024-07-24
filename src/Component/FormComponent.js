import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { useForm } from 'react-hook-form'
import { useToast } from '../components/ui/use-toast'
import { Toaster } from '../components/ui/toaster'
import { Checkbox } from '../components/ui/checkbox'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters."
    })
})

const FormComponent = () => {
    const form = useForm({
        resolver: zodResolver(formSchema)
    })
    const CheckboxForm = useForm()

    const { toast } = useToast()

    const onSubmit = (data) => {
        console.log(data);
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md p-4">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <div>
            <Toaster />
            <div className='form w-[400px] border rounded-md p-4 m-4'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>

            {/* --- Checkbox --- */}
            <div className='form w-[400px] border rounded-md p-4 m-4'>
                <Form {...CheckboxForm}>
                    <form onSubmit={CheckboxForm.handleSubmit(onSubmit)} className='space-y-6'>
                        <FormField
                            control={CheckboxForm.control}
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
        </div>
    )
}

export default FormComponent
