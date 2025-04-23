import React from "react";
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from "@headlessui/react";
import { Button } from "@/components/core";
import { Loader } from "@/components/core/Button/Loader";
import { Icon } from "@iconify/react";

interface BulkUploadVehiclesProps {
    isOpen: boolean;
    // eslint-disable-next-line no-unused-vars
    close: (value: boolean) => void
}

export const BulkUploadVehicles: React.FC<BulkUploadVehiclesProps> = ({ isOpen, close }) => {
    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex flex-col min-h-full items-end">
                    <DialogPanel transition className="flex flex-col justify-between flex-1 w-full max-w-md bg-white px-6 py-5 md:py-8 backdrop-blur-2xl duration-300 ease-out transform data-[closed]:translate-x-full">
                        <div className="grid gap-9">
                            <div className="grid gap-2">
                                <DialogTitle as="h1" className="text-3xl/8 font-bold text-grey-dark-1">
                                    Bulk upload
                                </DialogTitle>
                                <p className="text-sm/5 text-grey-dark-2">
                                    Ensure you use the template document meant for this information. <span className="text-green font-bold underline decoration-green underline-offset-2">Download here</span>
                                </p>
                            </div>
                            <div className="grid gap-5">
                                <label htmlFor="dropzone-file" className='w-full cursor-pointer py-12 border border-dashed border-green rounded-lg bg-[#EFFFE17A]'>
                                    <div className='grid gap-6 content-center justify-items-center w-full text-center mx-auto max-w-sm'>
                                        <Icon icon="solar:cloud-upload-linear" className="size-14 text-grey-dark-3" />
                                        <p className='text-sm text-neutral-base font-normal'>Drag & drop file here or<br/><span className='text-green font-semibold underline decoration-green underline-offset-2'>Select file</span></p>
                                    </div>
                                    <input name='file' id="dropzone-file" type="file" accept=".doc,.docx,.pdf" className="hidden" />
                                </label>
                                <div className="flex w-full items-center justify-between py-3 px-4 bg-blue-4 rounded">
                                    <span className="text-grey-dark-1 text-sm flex-1">File name</span>
                                    <div className="flex items-center gap-2">
                                        <Loader className="spinner text-green" />
                                        <span className="font-medium text-sm text-grey-dark-1">2 mins left</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-3 md:gap-6">
                            <Button theme="primary" block>Upload Document</Button>
                            <Button theme="ghost" onClick={() => close(false)} block>Cancel</Button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}