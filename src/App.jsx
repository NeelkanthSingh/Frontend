import Dashboard from "./components/Dashboard";
import InsideDocument from "./components/InsideDocument";
import OverflowWrapperCard from "./components/OverflowWrapperCard";
import SignIn from "./components/SignIn";
import Username from "./components/Username";

function App() {
  return (
    // flex justify-center items-center
    <div className="h-screen w-screen bg-[#F9F6EE] ">
      <div>
        {/* <OverflowWrapperCard> */}
        {/* <Username /> */}
        {/* <SignIn /> */}
        {/* </OverflowWrapperCard> */}

        {/* <Dashboard /> */}
        <InsideDocument />
      </div>
    </div>
  );
}

export default App;
