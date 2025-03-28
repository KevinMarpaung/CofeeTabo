import Main from "../Fragments/Main";
import MenuPopular from "../Components/Elements/MenuPopular";
import Service from "../Components/Elements/Service";
import About from "../Components/Elements/about";
import SpecialMenu from "../Components/Elements/SpecialMenu";
import Comentar from "../Components/Elements/Comentar";
import Footer from "../Components/Elements/Footer";
const Home = () => {
  return (
    <>
      <Main />
      <MenuPopular />
      <Service />
      <About />
      <SpecialMenu />
      <Comentar></Comentar>
      <Footer></Footer>
    </>
  );
};

export default Home;
