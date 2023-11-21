import React from 'react';
import SectionTitles from '../../../Components/SectionTitle/SectionTitles';
import useMenu from '../../../Hook/useMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSequre from '../../../Hook/useAxiosSequre';
import { Link } from 'react-router-dom';

const MangeItem = () => {
     const [menu, , refetch] = useMenu();
     const axiosSecure = useAxiosSequre()

     const handleDeleteItem =(item)=>{
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then( async(result) => {
            if (result.isConfirmed) {
               const res = await axiosSecure.delete(`/menu/${item._id}`);
               console.log(res.data);
               if(res.data.deletedCount > 0){
                    // refetch the update ui
                    refetch()
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${item.name} has been deleted`,
                      showConfirmButton: false,
                      timer: 1500,
                    });
               }
            }
          });
     }

     return (
       <div>
         <SectionTitles
           heading={"Manage All Items"}
           subHeading={"Hurry Up"}></SectionTitles>
         <div>
           <div className="overflow-x-auto">
             <table className="table">
               {/* head */}
               <thead>
                 <tr>
                   <th>#</th>
                   <th>Image</th>
                   <th>Item Name</th>
                   <th>Price</th>
                   <th>Update</th>
                   <th>Delete</th>
                 </tr>
               </thead>
               <tbody>
                 {menu?.map((item, index) => (
                   <tr key={item._id}>
                     <td>{index + 1}</td>
                     <td>
                       <div className="flex items-center gap-3">
                         <div className="avatar">
                           <div className="mask mask-squircle w-12 h-12">
                             <img
                               src={item.image}
                               alt="Avatar Tailwind CSS Component"
                             />
                           </div>
                         </div>
                       </div>
                     </td>
                     <td>{item.name}</td>
                     <td className="text-right">${item.price}</td>
                     <td>
                       <Link to={`/dashboard/updateItem/${item._id}`}>
                         <button className="btn btn-ghost btn-md bg-orange-500">
                           <FaEdit className="text-white "></FaEdit>
                         </button>
                       </Link>
                     </td>
                     <td>
                       <button
                         onClick={() => handleDeleteItem(item)}
                         className="btn btn-ghost btn-md">
                         <FaTrash className="text-red-500" /> Delete
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       </div>
     );
};

export default MangeItem;