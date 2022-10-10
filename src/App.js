import "./App.scss";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <div className="sidebar">
          <NavBar />
        </div>
        <div className="main-content"></div>
      </div>
    </>
  );
}

export default App;
