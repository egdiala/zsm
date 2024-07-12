import React from "react";
import { Button } from "@/components/core";
import trash3d from "@/assets/trash_3d.webp";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface DeleteAdminProps {
    isOpen: boolean;
    // eslint-disable-next-line no-unused-vars
    close: (value: boolean) => void
}

export const DeleteAdmin: React.FC<DeleteAdminProps> = ({ isOpen, close }) => {
    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-grey-dark-1/60">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="flex flex-col gap-5 w-full max-w-sm rounded-lg bg-white p-5 backdrop-blur-2xl duration-500 ease-out transform data-[closed]:-translate-y-full data-[closed]:opacity-0"
            >
                <img src={trash3d} className="size-12" alt="trash_3d" loading="lazy" />
                <div className="grid gap-1">
                    <DialogTitle as="h3" className="text-xl font-semibold text-grey-dark-1">
                        Delete Ifeanyi Seye?
                    </DialogTitle>
                    <p className="text-sm text-grey-dark-2">
                        This action would remove vehicle KJA123JD from the breakdown and is irreversible.
                    </p>
                </div>
              <div className="flex items-center gap-4">
                <Button theme="grey" block onClick={() => close(false)}>
                  Cancel
                </Button>
                <Button theme="primary" block>
                  Delete
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    )
}