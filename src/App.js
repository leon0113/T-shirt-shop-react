import { Route, Routes } from 'react-router-dom';
import './App.css';
import Anty from './components/Anty/Anty';
import Child from './components/Child/Child';
import Child1 from './components/Child1/Child';
import Child2 from './components/Child2/Child2';
import Father from './components/Father/Father';
import Grandpa from './components/Grandpa/Grandpa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
        {/* <Route path='/father' element={<Father></Father>}></Route>
        <Route path='/anty' element={<Anty></Anty>}></Route>
        <Route path='/child' element={<Child></Child>}></Route>
        <Route path='/child1' element={<Child1></Child1>}></Route>
        <Route path='/child2' element={<Child2></Child2>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
