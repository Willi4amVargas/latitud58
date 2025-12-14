import Logo from "@/logo.png";
// import { DialogTrigger } from "@/components/ui/dialog";
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
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 py-38 text-center text-gray-800">
        <h1 className="text-4xl font-bold">Ready to order?</h1>
        <h2 className="text-xl mt-2">Join us and take your order today!</h2>
        <Button asChild className="text-3xl md:text-5xl cursor-pointer">
          <a
            className="text-white mt-5 px-10 md:px-36 py-10 border border-red-400 bg-red-400 rounded-full hover:bg-red-300 transition-colors"
            target="_blank"
            href="https://order.online/business/latitud-58-16165955"
          >
            <div className="flex text-center">
              <span className="">ORDER</span>
              <div className="bg-white rounded-md p-1 ml-5">
                <img
                  className="h-10 mx-auto"
                  src="https://cdn.sanity.io/images/rs91tm40/production/38474eb728adbe5b3dd923d84253016aa706e22a-2000x971.png"
                  alt=""
                />
              </div>
            </div>
          </a>
        </Button>
      </div>
    </div>
  );
}
