import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'mobile', price: '15000' },
    { name: 'compuet', price: '2500' },
    { name: 'camera', price: '4000' },
    { name: 'sperker', price: '20000' },
    { name: 'watch', price: '10000' },

  ]
  return (
    <div className="App">

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

    </div>
  );
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
