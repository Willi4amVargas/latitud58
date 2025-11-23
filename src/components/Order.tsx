import Logo from "@/logo.png";
import {
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Order() {
  return (
    <div className="relative w-full bg-primary h-96">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "100px 100px",
          backgroundColor: "white",
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 py-38 text-center text-gray-800">
        <h1 className="text-4xl font-bold">Ready to order?</h1>
        <h2 className="text-xl mt-2">Join us and take your order today!</h2>
        <Button asChild>
          <DialogTrigger className="mt-5 px-6 py-3 bg-fourthary text-tertiary rounded-full hover:bg-fourthary/90 transition-colors">
            ORDER
          </DialogTrigger>
        </Button>
      </div>
    </div>
  );
}
