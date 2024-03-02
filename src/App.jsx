import OverflowWrapperCard from "./components/OverflowWrapperCard";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#F9F6EE] ">
      <div>
        <OverflowWrapperCard>
          <SignIn />
        </OverflowWrapperCard>
      </div>
    </div>
  );
}

export default App;
