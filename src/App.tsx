import "@/index.css";
import { lazy, Suspense, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

import { Menu } from "@/components/Menu";
import { Home } from "@/components/Home";
import { Dialog } from "@/components/ui/dialog";
import { OrderDialog } from "@/components/OrderDialog";

// Lazy loaded components for Code Splitting (Performance Optimization)
const AboutUs = lazy(() => import("@/components/AboutUs").then(module => ({ default: module.AboutUs })));
const Order = lazy(() => import("@/components/Order").then(module => ({ default: module.Order })));
const FoodMenu = lazy(() => import("@/components/FoodMenu").then(module => ({ default: module.FoodMenu })));
const Reviews = lazy(() => import("@/components/Reviews").then(module => ({ default: module.Reviews })));
const Contact = lazy(() => import("@/components/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

export function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Latitud 58 | Authentic Venezuelan Food</title>
        <meta name="description" content="Experience the best authentic Venezuelan food. Order online or visit us today!" />
        <meta name="keywords" content="venezuelan food, arepas, empanadas, latitud 58, restaurant" />
        <link rel="canonical" href="https://latitud58.net/" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Latitud 58 | Authentic Venezuelan Food" />
        <meta property="og:description" content="Experience the best authentic Venezuelan food. Order online or visit us today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://latitud58.net/" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Latitud 58 | Authentic Venezuelan Food" />
        <meta name="twitter:description" content="Experience the best authentic Venezuelan food. Order online or visit us today!" />
      </Helmet>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <Menu />
        <main>
          <Home />
          <Suspense fallback={<div className="flex h-40 items-center justify-center">Loading...</div>}>
            <AboutUs />
            <Order />
            <FoodMenu />
            <Reviews />
            <Contact open={dialogOpen} setOpen={setDialogOpen} />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <OrderDialog open={dialogOpen} setOpen={setDialogOpen} />
        <ToastContainer position="bottom-right" />
      </Dialog>
    </>
  );
}

export default App;
