import { useForm } from "react-hook-form";
import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSequre from "../../../Hook/useAxiosSequre";
import Swal from "sweetalert2";



const image_hosting_key = import.meta.env.VITE_IMGAE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSequre()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) =>{
    console.log(data);
    //image4 upload toi imgbb and then get an error
  const imageFile = {image: data.image[0]}
  const res = await axiosPublic.post(image_hosting_api,imageFile,{
    headers: {
      'content-type' : 'multipart/form-data'
    }
  })
  if(res.data.success){
    //now send the menu item dta to the success with the image
    const menuItem = {
      name:data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
      image: res.data.data.display_url,
    }
    //
    const menuRes = await axiosSecure.post('/menu', menuItem);
    console.log(menuRes.data);
    if(menuRes.data.insertedId){
      //show the success message;
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is added to the menu`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  console.log(res.data);
  } 
  return (
    <div>
      <SectionTitles
        heading={"add an item"}
        subHeading={"ADD AN ITEM"}></SectionTitles>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              {...register("name")}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select defaultValue={"default"}
                {...register("gender", { required: true })}
                className="select select-bordered w-full ">
                <option disabled value ="default">
                  Select a Category
                </option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="recipe Details"></textarea>
          </div>
          <div>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full mt-6 "
            />
          </div>

          <button className="btn mt-6">
            Add Items <FaUtensils className="ml-4"></FaUtensils>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
