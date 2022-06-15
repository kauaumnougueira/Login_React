import './App.css';
import Appbar from "./components/Appbar"
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <Appbar pageName="React test"/>
      <UserCard pageName = "Cadastro"/>
    </div>
  );
}

export default App;
