function Desc() {
  return (
    <div className=" sm:w-[400px] xs:w-[300px]  flex flex-col sm:items-start  xs:items-center justify-center font-Spartan gap-4 ">
      <div className="sm:w-[100%] xs:w-[80%] text-center ">
        <h1 className="sm:text-6xl xs:text-3xl font-bold text-[--primary-dark-magenta] sm:text-left ">
          10,000+ of our users love our products.
        </h1>
      </div>
      <div className="sm:w-[100%] xs:w-[80%] ">
        <p className="text-[--dark-gray-magenta] font-medium ">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
    </div>
  );
}

export default Desc;
