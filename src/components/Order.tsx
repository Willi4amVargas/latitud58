import Logo from "@/logo.png";
import { Button } from "@/components/ui/button";
import { Store, Truck, Star } from "lucide-react"; // Added Store and Truck icons

export function Order() {
  return (
    <section id="order" className="relative w-full overflow-hidden bg-slate-50 py-16 md:py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "120px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
            Hungry? <span className="text-red-600">Order Now.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Choose your preferred way to enjoy our food.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* PICKUP - Direct Link */}
            <div className="relative group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-yellow-400 text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                NO SERVICE FEES
              </div>
              <Button
                asChild
                className="w-full h-full py-8 text-2xl md:text-3xl bg-red-600 hover:bg-red-700 text-white rounded-2xl transition-all duration-300 shadow-xl hover:scale-[1.02] border-none"
              >
                <a
                  href="https://orders.latitud58.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-3">
                      <Store className="w-8 h-8" />
                      <span className="font-bold uppercase tracking-tight">Pickup</span>
                    </div>
                    <span className="text-sm opacity-90 font-normal">
                      Order & Collect at Restaurant
                    </span>
                  </div>
                </a>
              </Button>
            </div>

            {/* DELIVERY - DoorDash */}
            <Button
              asChild
              variant="outline"
              className="w-full h-full py-8 text-2xl md:text-3xl border-2 border-gray-200 hover:border-red-400 bg-white text-gray-800 rounded-2xl transition-all duration-300 shadow-md hover:scale-[1.02]"
            >
              <a
                href="https://order.online/business/latitud-58-16165955"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3">
                    <Truck className="w-8 h-8 text-red-500" />
                    <span className="font-bold uppercase tracking-tight">Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 uppercase font-semibold">Via</span>
                    <img
                      className="h-6"
                      src="https://cdn.sanity.io/images/rs91tm40/production/38474eb728adbe5b3dd923d84253016aa706e22a-2000x971.png"
                      alt="DoorDash"
                    />
                  </div>
                </div>
              </a>
            </Button>
          </div>

          <p className="mt-10 text-sm text-gray-400 flex items-center justify-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Fast service & fresh ingredients guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}