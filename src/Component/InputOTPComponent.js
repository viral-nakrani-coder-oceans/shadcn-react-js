import React, { useState } from 'react'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../components/ui/input-otp'

const InputOTPComponent = () => {
    const [value, setValue] = useState('')
    const pattern = "^[a-zA-Z0-9]+$"

    return (
        <div>
            {/* --- Pattern --- */}
            <div className='Pattern m-4'>
                <InputOTP maxLength={6} pattern={pattern}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
            </div>
            {/* --- Separator --- */}
            <div className='Separator'>
                <div className='m-4'>
                    <InputOTP maxLength={6}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <div className='m-4'>
                    <InputOTP maxLength={6}>
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={2} />
                            <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
            </div>

            {/* --- Controlled --- */}
            <div className="Controlled space-y-2 m-4">
                <InputOTP
                    maxLength={6}
                    value={value}
                    onChange={(value) => setValue(value)}
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <div className="text-sm">
                    {value === "" ? (
                        <>Enter your one-time password.</>
                    ) : (
                        <>You entered: {value}</>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InputOTPComponent
