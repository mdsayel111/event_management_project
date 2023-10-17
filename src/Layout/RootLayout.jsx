import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";

const RootLayout = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet context={data}/>
    </div>
  );
};

export default RootLayout;
