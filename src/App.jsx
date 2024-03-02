import CreateDocument from "./components/CreateDocument";
import Dashboard from "./components/Dashboard";
import InsideDocument from "./components/InsideDocument";
import InsideProfile from "./components/InsideProfile";
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
        {/* <InsideDocument /> */}
        {/* <InsideProfile /> */}
        <CreateDocument />
      </div>
    </div>
  );
}

export default App;
