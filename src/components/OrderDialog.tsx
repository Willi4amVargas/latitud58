import { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import type { Form } from "@/types/form";
import { GmailAuth } from "@/components/GmailAuth";

export function OrderDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [formData, setFormData] = useState<Form>({
    name: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    toast.success("Your order request has been submitted!");

    setFormData({
      name: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      message: "",
    });
    setOpen(!open);
  };

  return (
    <DialogContent className="sm:max-w-lg space-y-4">
      <DialogHeader>
        <DialogTitle className="flex flex-col items-center justify-center text-center">
          <Mail className="h-12 w-12 text-secondary mb-3" strokeWidth={1.5} />
          <span className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-tight">
            CONTACT US
          </span>
        </DialogTitle>
      </DialogHeader>

      <DialogDescription className="text-center">
        Please fill out the form below and we will get back to you as soon as
        possible to answer your questions.
      </DialogDescription>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Input
            name="name"
            placeholder="First Name"
            value={formData.name}
            onChange={handleChange}
          />

          <Input
            name="lastName"
            placeholder="Last Name (Optional)"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <Input
          type="number"
          name="mobileNumber"
          placeholder="Mobile Number (Optional)"
          value={formData.mobileNumber}
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <div>
          <label
            htmlFor="message"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            Your Message / Inquiry
          </label>

          <Textarea
            name="message"
            placeholder="E.g., I would like to inquire about your catering services for an event on August 15th."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <GmailAuth data={formData} onSend={onSubmit} />
      </div>
    </DialogContent>
  );
}
