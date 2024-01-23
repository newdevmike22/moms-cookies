import { useState } from "react";
import menu from "./data";
import Title from "./components/Title";
import Menu from "./components/Menu";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main className="w-[90vw] max-w-[1120px] my-[5rem] mx-[auto]">
      <section className="py-[5rem] px-0">
        <Title text="mom's delights" />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;