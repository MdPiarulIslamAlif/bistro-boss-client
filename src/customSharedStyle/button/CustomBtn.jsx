
const CustomBtn = ({ customBtn }) => {
  return (
    <div className="w-[14%] mx-auto mt-4">
      <button className=" btn btn-outline text-black mt-6 border-0 border-b-4">
        {customBtn}
      </button>
    </div>
  );
};

export default CustomBtn;