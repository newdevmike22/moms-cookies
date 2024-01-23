import { useState } from "react";
import menu from "./data";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

/*
const tempCategories = menu.map((item) => item.category);
const tempSet =  new Set(tempCategories);
const tempItems = ['all', ...tempSet];
console.log(tempItems);
*/

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category );
    setMenuItems(newItems);
  };

  return (
    <main className="w-[90vw] max-w-[1120px] my-[5rem] mx-[auto]">
      <section className="py-[5rem] px-0">
        <Title text="mom's delights" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;