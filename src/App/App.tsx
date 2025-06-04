import ScrollableContent from "./ScrollableContent";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div id="App" className="flex h-screen">
      <Sidebar />
      <ScrollableContent />
    </div>
  );
};

export default App;
