import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import featuredImage from "../../../assets/home/featured.jpg"
import './featured.css'
const Featured = () => {
     return (
       <div className="featuredBackgroundImg bg-fixed text-white ">
         <div className="hero-overlay bg-black/40 ">
           <div className="p-10">
             <SectionTitles
               subHeading={"check it out"}
               heading={"featured item"}></SectionTitles>
             <div className="md:flex justify-center items-center py-20 px-36 gap-8 ">
               <div>
                 <img src={featuredImage} alt="" />
               </div>
               <div>
                 <p>Agu 20, 2029</p>
                 <p className="uppercase">WHERE CAN I GET SOME?</p>
                 <p className="">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Error voluptate facere, deserunt dolores maiores quod nobis
                   quas quasi. Eaque repellat recusandae ad laudantium tempore
                   consequatur consequuntur omnis ullam maxime tenetur.
                 </p>
                 <button className="btn btn-outline text-white mt-6 border-0 border-b-4">ORDER NOW</button>
               </div>
             </div>
           </div>
         </div>
       </div>
     );
};

export default Featured;