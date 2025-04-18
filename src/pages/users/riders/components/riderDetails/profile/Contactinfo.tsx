import EditComponent from "@/components/utilities/buttonComponents/EditComonent";
import GreenButton from "@/components/utilities/inputComponents/GreenButton";
import DetailsLayout from "@/pages/users/components/DetailsLayout";
import { ObjectType } from "@/types/global.types";
import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  riderDetails: {
    [key: string]: any;
  };
};

const ContactInfo = (props: Props) => {
  console.log(props);
  //   const { riderDetails } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [data] = useState<ObjectType | null>(null);
  const { phoneNumber, emailAddress } = data || {};

  const handleToggle = () => {
    setModalOpen((prev) => !prev);
  };

  const items = [
    { label: "Phone Number", value: "0816 2758 092" },
    { label: "Email Address", value: "Wade@gmail.com" },
  ];

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <div className="flex items-center px-3 pb-3 mt-1">
              <div className="flex-grow">
                <h3 className="text-[#058CEC] font-semibold text-sm">Contact Info</h3>
                <DetailsLayout gridCols={4} items={items} itemsCols={1} />
              </div>
            </div>
          </div>
          <div className="text-right">
            <EditComponent onClick={() => setModalOpen(true)} />
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">Edit Rider's Contact Information</div>
              <AiOutlineClose size={20} className="cursor-pointer" onClick={handleToggle} />
            </div>
            <form onSubmit={() => null}>
              <div className="mb-4">
                <Field className="col-span-12">
                  <Label className="block mb-2">Phone Number</Label>
                  <Input id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" type="text" className={clsx("input-styles", "w-full")} value={phoneNumber} onChange={() => {}} />
                </Field>
              </div>

              <div className="mb-4">
                <Field className="col-span-12">
                  <Label className="block mb-2">Email Address</Label>
                  <Input id="emailAddress" name="emailAddress" placeholder="Enter Email Address" type="email" className={clsx("input-styles", "w-full")} value={emailAddress} onChange={() => {}} />
                </Field>
              </div>

              <div className="flex justify-end mt-8">
                <GreenButton text="Update" className="w-32" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
