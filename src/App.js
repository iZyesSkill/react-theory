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
      <Car name={'Audi'} year={2019}/>
      <Car name={'Mazda'} year={2018}/>
      <Car name={'Opel'} year={2017}/>
    </div>
  );
}

export default App;
