import React from "react" ;

class CartItem extends React.Component {
    
    render () {
        console.log("this.props",this.props)
        const{price,title,qty} = this.props.product ; //obect destructuring
        const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props ;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{fontSize:25}}>Qty:{qty}</div>
                    <div className="cart-item-actions"></div>
                    {/* {buttons} */}
                    <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                    onClick={()=>onIncreaseQuantity(product)}/>

                    <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
                    onClick={()=>onDecreaseQuantity(product)}/>

                    <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/484/premium/484662.png?token=exp=1656413852~hmac=a18167a17aea07cb9c31b4366267ac3e"
                    onClick={()=>onDeleteProduct(product.id)}/>
                </div>
            </div> 

        );
    }
}

const styles = {
    image:{
        height: 110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem ;