import React from "react";
import Cart from "./Cart" ;
import NavBar from "./NavBar";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products:[
            {price:92000,
                title: 'Macbook Air M1' ,
                qty:1,
                img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
                id:1
            },
            {price:33000,
                title: 'Samsung Galaxy S21' ,
                qty:1,
                img:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbXN1bmclMjBnYWxheHklMjBzMjF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
                id:2
            },
            {price:20000,
                title: 'Tommy Hilfiger Watch' ,
                qty:1,
                img:'https://images.unsplash.com/photo-1598640877587-bd8f35df4021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dG9tbXklMjBoaWxmaWdlciUyMHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' ,
                id:3
            },

        ]
    }
}

handleIncreaseQuantity =(product)=>{
    console.log("increse the qty of this",product );
    const{products}=this.state ;
    const index = products.indexOf(product) ;
    products[index].qty +=1 ;
    this.setState({
        products 
    })
}

handleDecreaseQuantity =(product)=>{
    console.log("decrease qty of this",product);
    const{products}=this.state ;
    const index = products.indexOf(product);
    if(products[index].qty===0){
        return ;
    }
    products[index].qty -=1;
    this.setState(
        products
    )
}

handleDeleteProduct=(id)=>{
    const{products}= this.state ;
    const items = products.filter((item)=>item.id !==id);
    this.setState({
        products:items
    })
}

getCartCount = () =>{
  const{products}= this.state ;
  let count =0 ;
  products.forEach((product)=>{
    count += product.qty ;
  })
  return count ;
}

getCartTotal =()=>{
  const{products} = this.state ;
  let cartTotal = 0 ;
  products.map((product)=>{
    cartTotal = cartTotal + product.qty*product.price ;
  })
  return cartTotal ;
}

  render(){
    const{products}=this.state ;
    return (
      <div className="App">
        <NavBar
          count = {this.getCartCount()}
        />
        <Cart
          products = {products} 
          onIncreaseQuantity={
            this.handleIncreaseQuantity}
          onDecreaseQuantity={
            this.handleDecreaseQuantity}
          onDeleteProduct={
            this.handleDeleteProduct}
        />
        <div style={{padding:10 ,fontSize:25}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
 