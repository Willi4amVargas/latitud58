import { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";

export function OrderDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    order: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonDisable(true);

    if (!formData.name || !formData.email || !formData.order) {
      toast.error("Please fill in Name, Email, and Order details.");
      setButtonDisable(false);
      return;
    }
    console.log("Order Data Submitted:", formData);
    toast.success("Your order request has been submitted!");

    setFormData({
      name: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      order: "",
    });
    setOpen(!open);
    setButtonDisable(false);
  };

  return (
    <DialogContent className="sm:max-w-lg space-y-4">
      <DialogHeader>
        <DialogTitle className="flex flex-col items-center justify-center text-center">
          <ShoppingBag
            className="h-12 w-12 text-secondary mb-3"
            strokeWidth={1.5}
          />
          <span className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-tight">
            PLACE YOUR ORDER
          </span>
        </DialogTitle>
      </DialogHeader>

      <DialogDescription className="text-center">
        Please fill out the form below and we will get back to you as soon as
        possible.
      </DialogDescription>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          placeholder="Mobile Number"
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
            htmlFor="order"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            Your Order Details / Request
          </label>
          <Textarea
            name="order"
            placeholder="E.g., I would like one Single Croqueta with bacon, a side of large fries, and one Parrilla for pickup at 7 PM."
            value={formData.order}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-full text-tertiary"
          disabled={buttonDisable}
        >
          Submit Order Request
        </Button>
      </form>
    </DialogContent>
  );
}
