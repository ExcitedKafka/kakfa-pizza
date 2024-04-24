import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y divide-stone-300 px-2 space-y-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//这个loader函数放哪里都可以 只要我在App createBrowserRouter 中的menu中的loader挂载了 就能用useLoaderData勾出来
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
