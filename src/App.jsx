import { useContext } from 'react';
import './App.css';
import Intro from './component/intro/intro';
import About from './component/about/about';
import ProductList from './component/productList/productList';
import Contact from './component/contact/contact'
import Modes from './component/modes/modes';

const App = () => {
  return (
    <div>
      <div className="App">
       
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>

        </div>
   
    </div>

    
  );
}

export default App;
