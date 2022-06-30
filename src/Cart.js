import React from "react" ;
import CartItem from "./CartItem";

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products:[
                {price:9999,
                    title: 'Macbook' ,
                    qty:10,
                    img:' ',
                    id:1
                },
                {price:100,
                    title: 'phone' ,
                    qty:1,
                    img:' ',
                    id:2
                },
                {price:97,
                    title: 'watch' ,
                    qty:1,
                    img:' ',
                    id:3
                },

            ]
        }
    }

    render(){
        const{products}=this.state ;
        return(
        <div className="cart">
           {products.map((product)=>{
            return <CartItem product={product} key={product.id} />
           })}
        </div>
    )};
}

export default Cart ;