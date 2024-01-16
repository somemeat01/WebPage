import React from 'react'
import {Link} from "react-router-dom";
import arkaplan from "../foto/arkaplan.jpg";
function Home() {
  return (
    <div className="home" style={{backgroundImage : `url(${arkaplan})`,backgroundSize:'cover'}} > 
      <div className="headerContainer">
       <h1>Lahmaç</h1>
       <p style={{color:"red"}}>GÜNÜN İNDİRİMLİ ÜRÜNÜ <i class="fa-solid fa-tag"></i> </p>
       <p>satır kıyım et <br/> özel karışım baharat</p>
       <Link to="/Menü"> <button>sipariş ver</button> </Link>
      </div>
    </div>
  );
}
export default Home;