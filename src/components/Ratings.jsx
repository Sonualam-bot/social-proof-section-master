import star from "../images/icon-star.svg";

function Ratings() {
  const numberOfStars = 5;
  const starsArray = Array.from(
    { length: numberOfStars },
    (_, index) => index + 1
  );

  const stars = starsArray.map((_, index) => (
    <div key={index} role="img" aria-label="Star">
      <img src={star} alt="/" />
    </div>
  ));

  return (
    <div className="sm:w-[500px] xs:w-[375px] ">
      <div className=" w-full sm:grid grid-cols-3 gap-4 xs:flex items-center justify-center flex-col ">
        <div className=" xs:w-[300px] sm:w-[365px] col-end-3 col-span-3 bg-[--light-gray-magenta] flex   xs:flex-col sm:flex-row items-center justify-start xs:gap-2 sm:gap-4 py-3 px-7 rounded-lg ">
          <div className="flex flex-row gap-1 ">{stars}</div>
          <div>
            <h3 className="text-[--primary-dark-magenta] font-bold ">
              Rated 5 Stars in Reviews
            </h3>
          </div>
        </div>
        <div className=" xs:w-[300px] sm:w-[390px] col-start-1 col-end-4 col-span-3  bg-[--light-gray-magenta] flex xs:flex-col sm:flex-row items-center justify-start xs:gap-2 sm:gap-4 sm:ml-7 py-3 px-7 rounded-lg  ">
          <div className="flex flex-row gap-1 ">{stars}</div>
          <div>
            <h3 className="text-[--primary-dark-magenta] font-bold ">
              Rated 5 Stars in Report Guru
            </h3>
          </div>
        </div>
        <div className=" xs:w-[300px] sm:w-[400px] col-span-4 sm:ml-20 col-end-5  bg-[--light-gray-magenta] flex xs:flex-col sm:flex-row items-center justify-start xs:gap-2 sm:gap-4 py-3 px-7 rounded-lg ">
          <div className="flex flex-row gap-1 ">{stars}</div>
          <div>
            <h3 className="text-[--primary-dark-magenta] font-bold ">
              Rated 5 Stars in BestTech
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
