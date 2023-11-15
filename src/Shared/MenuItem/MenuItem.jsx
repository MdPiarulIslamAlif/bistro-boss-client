
const MenuItem = ({item}) => {
     const{_id ,name,recipe,image,category,price} = item;
     return (
       <div className="flex space-x-2">
         <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
         <div>
           <h3 className="uppercase">{name}----------</h3>
           <p>{recipe}</p>
         </div>
         <p className="text-[#D99904]">${price}</p>
       </div>
     );
};

export default MenuItem;