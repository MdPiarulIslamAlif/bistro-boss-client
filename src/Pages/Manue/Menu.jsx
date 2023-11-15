import { Helmet, HelmetProvider } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import PopularMenu from "../Home/PopularManu/PopularMenu";
import useMenu from "../../Hook/useMenu";
import SectionTitles from "../../Components/SectionTitle/SectionTitles";
import MenuCategory from "./ManuCategory/MenuCategory";




const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div data-theme="cupcake">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="OUR MENU"></Cover>
      {/* main cover */}
      <SectionTitles
        subHeading={"Don't miss"}
        heading={"Today's offer"}></SectionTitles>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={dessert}
        title="dessert"
        img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
