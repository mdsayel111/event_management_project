import { useLoaderData, useOutletContext } from "react-router-dom";
import Slider from "../Components/slider";
import Survices from "../Components/Services/Survices";
import Gallery from "../Components/Galery/Gallery";
import Footer from "../Components/Footer";
import OurTeamMeber from "../Components/OurTeamMembers/OurTeamMeber";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useOutletContext()

  return (
    <>
    <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <Survices data={data} />
      <Gallery />
      <OurTeamMeber />
      <Footer data={data} />
    </>
  );
};

export default Home;
