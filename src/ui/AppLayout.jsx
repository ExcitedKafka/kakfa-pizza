import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen  grid-row-3 grid-rows-[auto_1fr_auto]">
      {/* {true && <Loader />} */}
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="  max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
