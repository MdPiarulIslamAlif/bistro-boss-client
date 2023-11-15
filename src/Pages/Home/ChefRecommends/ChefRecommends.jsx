import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import CustomBtn from "../../../customSharedStyle/button/CustomBtn";

const ChefRecommends = () => {
const [cards, setCards] = useState([]);

useEffect(()=>{
     fetch("menu.json")
     .then(res=>res.json())
     .then(data=>{
          const chef = data.filter(item=>item.category ==="popular")
          setCards(chef)
     })
},[])

     return (
       <div>
         <SectionTitles
           subHeading={"Should Try"}
           heading={"CHEF RECOMMENDS"}></SectionTitles>
         <Swiper
           autoplay={{
             delay: 3000,
             disableOnInteraction: false,
           }}
           slidesPerView={3}
           spaceBetween={30}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination, Autoplay]}
           className="mySwiper">
           {cards.map((card) => (
             <SwiperSlide key={card._id}>
               <div className="my-24">
                 <div className=" w-96  shadow-xl">
                   <figure>
                     <img className="w-full" src={card.image} alt="salad" />
                   </figure>
                   <div className="card-body">
                     <h2 className="card-title">{card.name}</h2>
                     <p>{card.recipe}</p>
                     <div className="card-actions justify-center mt-6">
                       {/* <CustomBtn className="w-[200px]" customBtn={"ADD TO CART"}></CustomBtn> */}
                       <button className="btn btn-outline text-[#D99904] mt-6 border-0 border-b-4">
                         ADD TO CART
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             </SwiperSlide>
           ))}
         </Swiper>
       </div>
     );
};

export default ChefRecommends;