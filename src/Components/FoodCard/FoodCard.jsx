
const FoodCard = ({item}) => {
      const { name, recipe, image, category, price } = item;
     return (
       <div className="max-w-screen-2xl mx-auto">
         <div className=" w-96 relative shadow-xl">
           <figure>
             <img className="w-full" src={image} alt="image" />
           </figure>
           <p className="absolute right-0 top-0 px-4 p-1 mr-4 mt-4  bg-slate-900 text-white ">
             ${price}
           </p>
           <div className="card-body">
             <h2 className="card-title text-center">{name}</h2>
             <p>{recipe}</p>
             <div className="card-actions justify-center">
               <button className="btn btn-outline bg-slate-100 text-[#D99904] hover:text-[#D99904] mt-6 border-0 border-b-4">
                 ADD TO CART
               </button>
             </div>
           </div>
         </div>
       </div>
     );
};

export default FoodCard;