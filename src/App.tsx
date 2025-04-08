import RightSidebar from "./components/Custom/RightSidebar";
import LeftSidebar from "./components/Custom/LeftSidebar";
import Header from "./components/Custom/Header";
function App() {
  return (
    <div className="  flex justify-between">
      <LeftSidebar />
      <div className="w-full">
        <Header />
        <h1>Main</h1>
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
