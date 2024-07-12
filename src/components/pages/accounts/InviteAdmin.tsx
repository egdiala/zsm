import React from "react";
import { Button, Input } from "@/components/core";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface InviteAdminProps {
    isOpen: boolean;
    // eslint-disable-next-line no-unused-vars
    close: (value: boolean) => void
}

export const InviteAdmin: React.FC<InviteAdminProps> = ({ isOpen, close }) => {
    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex flex-col min-h-full items-end">
                <DialogPanel transition className="flex flex-col justify-between flex-1 w-full max-w-md bg-white px-6 py-5 md:py-8 backdrop-blur-2xl duration-300 ease-out transform data-[closed]:translate-x-full">
                    <div className="grid gap-9">
                        <div className="grid gap-2">
                            <DialogTitle as="h1" className="text-3xl/8 font-bold text-grey-dark-1">
                                Add an Admin Account
                            </DialogTitle>
                            <p className="text-sm/5 text-grey-dark-2">
                                Lorem Ipsum dolor sit ament Lorem Ipsum dolor sit ament
                            </p>
                        </div>
                        <div className="grid gap-5">
                            <Input type="text" label="First Name" />
                            <Input type="text" label="Last Name" />
                            <Input type="text" label="Gender" />
                            <Input type="text" label="Phone Number" />
                            <Input type="email" label="Email" />
                            <Input type="text" label="Role" />
                        </div>
                    </div>
                    <div className="grid gap-3 md:gap-6">
                        <Button theme="primary" block>Add Member</Button>
                        <Button theme="ghost" onClick={() => close(false)} block>Cancel</Button>
                    </div>
                </DialogPanel>
            </div>
        </div>
        </Dialog>
    )
}