import Logo from "@/logo.png";
import { Button } from "@/components/ui/button";
import { Store, Star, Info } from "lucide-react";

export function Order() {
  return (
    <section
      id="order"
      className="relative w-full overflow-hidden bg-slate-50 py-16 md:py-24"
    >
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
            Hungry? <span className="text-red-600">Order Now.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Choose your preferred way to enjoy our food.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-2xl relative group">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-yellow-400 text-black text-xs md:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg border-2 border-white animate-bounce">
                BEST PRICE · MEJOR PRECIO
              </div>

              <Button
                asChild
                className="w-full h-auto py-10 px-6 bg-red-600 hover:bg-red-700 text-white rounded-4xl transition-all duration-300 shadow-2xl hover:scale-[1.01] border-none flex flex-col gap-4"
              >
                <a
                  href="https://orders.latitud58.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-3 mb-2">
                      <Store className="w-8 h-8 md:w-10 md:h-10" />
                      <h3 className="text-xl md:text-3xl font-black uppercase leading-none tracking-tighter">
                        ORDER DIRECT · NO SERVICE FEES
                        <span className="block text-lg md:text-2xl font-bold opacity-90 mt-1">
                          ORDENA DIRECTO · SIN CARGOS EXTRA
                        </span>
                      </h3>
                    </div>

                    <div className="bg-white/10 w-full h-px my-4" />

                    <p className="text-sm md:text-lg font-medium opacity-95">
                      Pickup or Delivery Available <br className="md:hidden" />
                      <span className="mx-2 hidden md:inline">|</span>
                      Recoge en el food truck o pide delivery
                    </p>
                  </div>
                </a>
              </Button>

              <p className="mt-4 text-red-600 font-bold text-sm md:text-base flex items-center justify-center gap-2">
                <Star className="w-4 h-4 fill-red-600" />
                Same food · Better price | La misma comida · Mejor precio
              </p>
            </div>

            <div className="w-full max-w-md">
              <Button
                asChild
                variant="outline"
                className="w-full h-auto py-6 border-2 border-gray-300 hover:border-gray-400 bg-white/50 text-gray-500 rounded-2xl transition-all duration-300 shadow-sm hover:grayscale-0 grayscale opacity-80 hover:opacity-100"
              >
                <a
                  href="https://order.online/business/latitud-58-16165955"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm md:text-base font-bold uppercase">
                        Order with DoorDash
                      </span>
                      <img
                        className="h-5 md:h-6 object-contain"
                        src="https://cdn.sanity.io/images/rs91tm40/production/38474eb728adbe5b3dd923d84253016aa706e22a-2000x971.png"
                        alt="DoorDash"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gray-400">
                      <Info className="w-3 h-3" />
                      Service fees apply · Aplican cargos de servicio
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </div>

          <p className="mt-16 text-xs text-gray-400 flex items-center justify-center gap-2 italic">
            Fast service & fresh ingredients guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
}
