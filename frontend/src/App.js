import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList';
import axios from 'axios';


axios.defaults.baseURL = "http://172.16.26.236:8000/api/"

function App() {
  return (
    <div className="App">
            <UserList />
        </div>
  );
}

export default App;
