import './App.css';
import React ,{useState,useEffect} from 'react';
import { getCategories} from './Fetcher';
import Layout from './components/Layout';
import ProductDetail from './components/ProductDetail';
import Checkouts from './components/Checkouts';
import Basket from './components/Basket';
import Home from './components/Home';
import ConfirmOrders from "./components/ConfirmOrders"
import SearchResult from './components/SearchResult';
import { 
  BrowserRouter,
  Routes, 
  Route 
 } from "react-router-dom";
import Category from './components/Category';


function App() {
  const [categories, setCategories] = useState({errorMessage:"", data: []});

  useEffect(()=>{
    const fetchData = async () => {
      const response = await getCategories();
    setCategories(response)
    }
    
    fetchData();
  },[])



 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout  categories={categories}/>} >
      <Route index element={<Home/>} />
      <Route path='basket' element={<Basket/>} />
      <Route path='checkouts' element={<Checkouts/>} />
      <Route path='search'  element= {<SearchResult/>} />
      <Route path='categories/:categoryId' element={<Category/>} />
      <Route path='products/:productId' element={<ProductDetail/>} />
      <Route path='confirmorders' element={<ConfirmOrders/>} />

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  
  );
}

export default App;
