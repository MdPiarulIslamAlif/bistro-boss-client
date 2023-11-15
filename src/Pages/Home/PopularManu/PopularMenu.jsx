import SectionTitles from "../../../Components/SectionTitle/SectionTitles";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import CustomBtn from "../../../customSharedStyle/button/CustomBtn";
import useMenu from "../../../Hook/useMenu";


const PopularMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === "popular")
  //  const [menu, setMenu] = useState([])
    //  useEffect(()=>{
    //       fetch("menu.json")
    //       .then(res=>res.json())
    //       .then(data=>{
    //            const popularItems = data.filter(
    //              (item) => item.category === "popular"
    //            );
    //            setMenu(popularItems);
    //       })
    //  },[])


     return (
       <section className="mb-12">
         <SectionTitles
           heading={"from Our Menu"}
           subHeading={"Popular Items"}></SectionTitles>
         <div className="grid md:grid-close-2 lg:grid-cols-2 gap-10 ">
           {popular?.map((item) => (
             <MenuItem key={item.i_d} item={item}></MenuItem>
           ))}
         </div>
         <CustomBtn customBtn={"VIEW FULL MENU"}></CustomBtn>
       </section>
     );
};

export default PopularMenu;