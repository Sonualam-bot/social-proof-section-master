import "./App.css";
import Desc from "./components/Desc";
import Ratings from "./components/Ratings";
import SocialCards from "./components/SocialProof";

function App() {
  return (
    <>
      <div className=" mx-auto h-screen flex flex-col items-center sm:justify-center xs:justify-start  gap-10 sm:bg-[url('./images/bg-pattern-top-desktop.svg')]  xs:bg-[url('./images/bg-pattern-top-mobile.svg')] bg-no-repeat relative ">
        <div className=" sm:w-[1040px] xs:w-[375px] flex items-center sm:flex-row xs:flex-col justify-between gap-5 ">
          <Desc />
          <Ratings />
        </div>
        <div>
          <SocialCards />
        </div>
        <div className=" absolute bg-no-repeat right-0 h-screen w-[70%] -z-10 sm:bg-[url('./images/bg-pattern-bottom-desktop.svg')]  xs:bg-[url('./images/bg-pattern-bottom-mobile.svg')]"></div>
      </div>
    </>
  );
}

export default App;
