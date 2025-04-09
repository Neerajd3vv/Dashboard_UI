import RightSidebar from "./components/Custom/RightSidebar";
import LeftSidebar from "./components/Custom/LeftSidebar";
import Header from "./components/Custom/Header";
import MainContent from "./components/Custom/MainContent";
function App() {
  return (
    <div className="  flex justify-between">
      <LeftSidebar />
      <div className="w-full">
        <Header />
        <MainContent />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
