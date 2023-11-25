import colton from "../images/image-colton.jpg";
import anne from "../images/image-anne.jpg";
import irene from "../images/image-irene.jpg";

function SocialCards() {
  return (
    <div className="sm:w-[1040px] xs:w-[375px] m-auto font-Spartan">
      <div className="w-full xs:flex flex-col  sm:grid items-center justify-center grid-rows-1 grid-flow-col gap-6 h:screen sm:grid-flow-col">
        {/* divs sectio */}
        <div className=" row-end-3 row-span-3 bg-[--primary-dark-magenta] xs:w-[300px] sm:w-[330px] min-h-[200px] items-start  xs:flex flex-col  justify-center rounded-lg p-6 gap-3 ">
          <div className="flex gap-5 items-center justify-center">
            <div className="w-[40px] h-[40px]">
              <img
                className="w-full h-full rounded-full"
                src={colton}
                alt="/svg"
              />
            </div>
            <div>
              <h3 className="text-[white] font-medium pb-0 ">Colton Smith</h3>
              <p className="text-[--primary-soft-pink]">Verified Buyer</p>
            </div>
          </div>
          <div>
            <p className="text-[--light-gray-magenta]">
              &quot;We neede the same printed design as the one we had ordered a
              week prior. Not only did they find the original order, but we also
              received it in time. Excellent!&quot;
            </p>
          </div>
        </div>

        <div className="row-start-2 row-end-3 row-span-3 bg-[--primary-dark-magenta] xs:w-[300px] sm:w-[330px] min-h-[200px] items-start  xs:flex flex-col  justify-center rounded-lg p-6 gap-3">
          <div className="flex gap-5 items-center justify-center">
            <div className="w-[40px] h-[40px]">
              <img
                className="w-full h-full rounded-full"
                src={irene}
                alt="/svg"
              />
            </div>
            <div>
              <h3 className="text-[white] font-medium pb-0 ">Irene Roberts</h3>
              <p className="text-[--primary-soft-pink] ">Verified Buyer</p>
            </div>
          </div>
          <div>
            <p className="text-[--light-gray-magenta]">
              &quot;Customer service is always excellent and very quick turn
              around. Completely delighted with the simplicity of the purchase
              and the speed of delivery.!&quot;
            </p>
          </div>
        </div>

        <div className="row-start-5 row-end-2 row-span-3 bg-[--primary-dark-magenta] xs:w-[300px] sm:w-[330px] min-h-[200px] items-start  xs:flex flex-col  justify-center rounded-lg p-6  gap-3 ">
          <div className="flex gap-5 items-center justify-center">
            <div className="w-[40px] h-[40px]">
              <img
                className="w-full h-full rounded-full"
                src={anne}
                alt="/svg"
              />
            </div>
            <div>
              <h3 className="text-[white] font-medium pb-0 ">Anne Wallace</h3>
              <p className="text-[--primary-soft-pink] ">Verified Buyer</p>
            </div>
          </div>
          <div>
            <p className="text-[--light-gray-magenta]">
              &quot;Put an order with this company and can only praise them for
              the very high standard. Will definitely use them again and
              recommend them to everyone!&quot;
            </p>
          </div>
        </div>
        {/* section ends */}
      </div>
    </div>
  );
}

export default SocialCards;
