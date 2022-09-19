import './App.css';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h4>Yay.....</h4>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(){
  return (
          <div className='person'>
            <h1>Sakib Al Hasan</h1>
          <p>Profession : Cricket</p>
          </div>
  );
        
}

function Friend(){
  return (
    <div className='container'>
      <h3>Name: Ajay Devgan</h3>
      <p>Job: Maramari</p>
    </div>
  );
}

export default App;
