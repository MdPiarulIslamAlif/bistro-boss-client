import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Contact from "./Contact/Contact";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularManu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";




const Home = () => {
     return (
       <div data-theme="cupcake">
         <Helmet>
           <title>Bistro Boss | Home</title>
         </Helmet>
         <Banner></Banner>
         <Category></Category>
         <BistroBoss></BistroBoss>
         <PopularMenu></PopularMenu>
         <Contact></Contact>
         <ChefRecommends></ChefRecommends>
         <Featured></Featured>
         <Testimonials></Testimonials>
       </div>
     );
};

export default Home;