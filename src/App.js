import logo from './logo.svg';
import './App.css';
import Car from './components/Car';

function App() {
const divStyle = {
  textAlign: 'center'
}

  return (
    <div className="App" style={divStyle}>
      <h1 style={{fontSize: '20px'}}>Hello world</h1>
      <Car name={'Audi'} year={2019}>
        <p>Model: <strong style={{color: 'red'}}>A6</strong></p>
      </Car>
      <Car name={'Mazda'} year={2018}/>
      <Car name={'Opel'} year={2017}/>
    </div>
  );
}

export default App;
