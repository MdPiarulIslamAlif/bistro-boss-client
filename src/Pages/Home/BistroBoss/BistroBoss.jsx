import chef from '../../../assets/home/chef-service.jpg' 

const BistroBoss = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${chef})`,
     //    backgroundColor:"black",
        backgroundBlendMode:"multiply"
      }}
      className=" bg-black/70 p-24">
      <div className=" ">
        <div className=" w-10/12 mx-auto">
          <div className=" text-center bg-slate-50 py-24">
            <h2 className="text-4xl font-semibold my-5">Bistro Boss</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
