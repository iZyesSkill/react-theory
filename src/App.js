import logo from './logo.svg';
import './App.css';
import Car from './components/Car';

function App() {
const divStyle = {
  textAlign: 'center'
}

  return (
    <div className="App" style={divStyle}>
      <h1 style={{color: 'red', fontSize: '20px'}}>Hello world</h1>
      <Car/>
    </div>
  );
}

export default App;
