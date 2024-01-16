import React, { Component } from 'react'
import uniqid from 'uniqid';
class Contact extends Component {

    state = {
        id : "",
        ad : "",
        email : "",
        öneri: ""
      }
    
    
      changeInput = (e) =>{
        this.setState({
          [e.target.name]: e.target.value,
          
        });
      }
      
    addUser = (e) =>{
      e.preventDefault();
      const {id,ad,email,öneri}=this.state;
      const newUser ={
        id : uniqid(),
        ad : ad,
       email : email,
       öneri : öneri
      }
      console.log(newUser);
    }

  render() {
    const {ad,email,öneri}=this.state;
    return (
        <div className="col-md-8 mb-4">
        <button className ="btn btn-dark btn-block mb-2"></button>
        <div className="card">
        <div className="card-header">
          <h4>Geri Bildirim Formu</h4>
           <div className="card-body">
             <form className="rightSide" onSubmit ={this.addUser}>
              <div className="form-group">
               <label htmlFor="ad">ad</label>
               <input 
               type="text"
               name= "ad"
               id="ad"
               placeholder ="Adınızı giriniz"
               className ="form-control"
               value ={ad}
               onChange={this.changeInput}
               />

              </div>

              <div className="form-group">
               <label htmlFor="email">e-mail</label>
               <input 
               type="text"
               name= "email"
               id="email"
               placeholder ="e-mail giriniz"
               className ="form-control"
               value ={email}
               onChange={this.changeInput}
               />

              </div>

              <div className="form-group">
               <label htmlFor="öneri">Öneri,Tavsiye,Şikayet</label>
               <input 
               type="text"
               name= "öneri"
               id="öneri"
               placeholder ="öneri giriniz"
               className ="form-control"
               value ={öneri}
               onChange={this.changeInput}
               />

              </div>
              <button className ="btn btn-danger btn-block " type="submit">kullanıcı ekle</button>
             </form>
            </div>
       </div>
       </div>
      </div>
    )
  }
}
export default Contact;