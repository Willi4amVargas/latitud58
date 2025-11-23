import "@/index.css";
import { Menu } from "@/components/Menu";
import { Home } from "@/components/Home";
import { AboutUs } from "@/components/AboutUs";
import { FoodMenu } from "@/components/FoodMenu";
import { Contact } from "@/components/Contact";
import { Order } from "@/components/Order";
import { Footer } from "@/components/Footer";
import { Dialog } from "@/components/ui/dialog";
import { OrderDialog } from "@/components/OrderDialog";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Reviews } from "@/components/Reviews";

export function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <Menu />
        <Home />
        <AboutUs />
        <FoodMenu />
        <Order />
        <Reviews />
        <Contact open={dialogOpen} setOpen={setDialogOpen} />
        <Footer />
        <OrderDialog open={dialogOpen} setOpen={setDialogOpen} />
        <ToastContainer position="bottom-right" />
      </Dialog>
    </>
  );
}

export default App;
