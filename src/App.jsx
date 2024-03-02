import OverflowWrapperCard from "./components/OverflowWrapperCard";
import SignIn from "./components/SignIn";
import Username from "./components/Username";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#F9F6EE] ">
      <div>
        <OverflowWrapperCard>
          <Username />
          {/* <SignIn /> */}
        </OverflowWrapperCard>
      </div>
    </div>
  );
}

export default App;
