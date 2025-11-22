import "@/index.css";
import { Menu } from "@/components/Menu";
import { Home } from "@/components/Home";
import { AboutUs } from "@/components/AboutUs";
import { FoodMenu } from "@/components/FoodMenu";
import { Contact } from "@/components/Contact";
import { Order } from "@/components/Order";

export function App() {
  return (
    <>
      <Menu />
      <Home />
      <AboutUs />
      <FoodMenu />
      <Order />
      <Contact />
    </>
  );
}

export default App;
