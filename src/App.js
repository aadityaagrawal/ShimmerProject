import "./App.css";
import Article from "./Components/article";
import User from "./Components/user";

function App() {
  

  return (
    <div className="App">
      <header>
        <h1>Skeleton Application</h1>
      </header>

      <div className="body-element">
        <Article />
        <User />
      </div>
    </div>
  );
}

export default App;
