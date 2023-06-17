import React  from "react";
import { Outlet , Link, useNavigate} from "react-router-dom";
import {FaHome , FaShoppingCart } from 'react-icons/fa';
import Search from "./Search"



const Layout = ({categories})=>{
  const navigate = useNavigate();
    
  const renderCategories = () =>{
    return(
      categories.data.map(c=>
      <li key={c.id}><Link to={`/categories/${c.id}`} ><span>{c.title}</span></Link></li>
    ));
  }
 
    return ( 
        <>
        <header>
          <div className="home-icon">
            <FaHome size={40} onClick={()=>navigate("/")}/>
          </div>
          <Search />
          <div className="store-title">
            <h1>KAMRAN'S STORE</h1>
          </div>
          <div className="cart-icon-in-layout">
            <FaShoppingCart size={40} onClick={()=>navigate("/basket")}/>
          </div>
        </header>
        <section className='sec'>
         <nav>
           {categories.errorMessage && <div>Error : {categories.errorMessage}</div>}
           <ul>{categories.data && renderCategories()}</ul>
         </nav>
         <main>

           <Outlet />
   
         </main>
        </section>
        
        <footer><h3>this is footer</h3>  <Link to={"/"}> <span> Home </span></Link>| <Link to={"/basket"}> <span> Basket </span></Link> </footer>
        
       </>
     )
}

export default Layout;