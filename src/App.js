import './App.css';
import Mid, {Header} from './Header'


function App() {
  let name = "Parth"
  
  return (
    <div className="App">
    <Header/>
   <h1>{name}</h1>
   <Mid/>
    </div>
  );
}   

export default App;
