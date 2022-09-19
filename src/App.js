import './App.css';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="Mousumi"></Person>
      <Person name="BappaRaz" nayika="Cheka"></Person>
      <Person name="Kuber" nayika="Kopila" ></Person>

      <h4>Yay.....</h4>

      <Friend name="Rakib" phone="01717232"></Friend>
      <Friend name="Sakib"  phone="01999202"></Friend>
    </div>
  );
}

function Person(props){
  //console.log(props);
  return (
          <div className='person'>
            <h1>{props.name}</h1>
          <p>Nayika : {props.nayika}</p>
          </div>
  );
        
}

function Friend(props){
  //console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.name}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
