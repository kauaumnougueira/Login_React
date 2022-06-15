import './App.css';
import Appbar from "./components/Appbar"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <Appbar pageName="React test"/>
      <Card pageName = "Login"/>
    </div>
  );
}

export default App;
