import { NavLink } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items,title, img}) => {
     return (
       <div className="pt-8">
         {title && <Cover img={img} title={title}></Cover>}
         <div className="grid md:grid-close-2 lg:grid-cols-2 gap-10 mt-16 ">
           {items?.map((item) => (
             <MenuItem key={item.i_d} item={item}></MenuItem>
           ))}
         </div>
         <NavLink to={`/order/${title}`}>
           <button className="btn btn-outline text-black mt-6 border-0 border-b-4">
             ORDER NOW
           </button>
         </NavLink>
       </div>
     );
};

export default MenuCategory;