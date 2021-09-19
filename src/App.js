import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExtranalUser></ExtranalUser>



    </div>
  );
}







function ExtranalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(user => setUsers(user))
  }, [])
  return (
    <div>
      <h1>External user</h1>
      {
        users.map(user => <User name={user.name

        } email={user.email} > </User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className="product">
      <h2> name: {props.name}</h2>
      <p> Email: {props.email}</p>

    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);




  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Increase</button>
    </div>

  )
}



function Product(props) {
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <h2>price: {props.price}</h2>
    </div>
  )
}

export default App;
{/* <Product name="mobile" price="15000"></Product>
      <Product name="laptap" price="10000"></Product>
      <Product name="watch" price="159000"></Product>
      <Product name="cemrea" price="15000"></Product> */}
      // const products = [
      //   { name: 'mobile', price: '15000' },
      //   { name: 'compuet', price: '2500' },
      //   { name: 'camera', price: '4000' },
      //   { name: 'sperker', price: '20000' },
      //   { name: 'watch', price: '10000' },

      // ]
      // {
      //   products.map(product => <Product name={product.name} price={product.price}></Product>)
      // }