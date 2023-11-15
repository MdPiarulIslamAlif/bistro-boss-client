import Swal from "sweetalert2";
import userAuth from "../../Hook/userAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSequre from "../../Hook/useAxiosSequre";
import useCarts from "../../Hook/useCarts";

const FoodCard = ({ item }) => {
  const { name, recipe, image, category, price, _id } = item;
  const { user } = userAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSequre();
  const [,refetch] = useCarts();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added your carts`,
            showConfirmButton: false,
            timer: 2000,
          });
          //refetch cart to update to carts
          refetch();
        }
      });
      //toDo:send cart
    } else {
      Swal.fire({
        title: "Your not logged In",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logged In!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={handleAddToCart}
              className="btn btn-outline bg-slate-100 text-[#D99904] hover:text-[#D99904] mt-6 border-0 border-b-4">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
