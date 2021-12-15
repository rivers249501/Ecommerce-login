import React, {useState, useContext} from 'react'
import power from "../Assets/power.jpeg"
import { useNavigate } from 'react-router-dom'
import ProductsContext from '../Context/ProductsContext'

//Styles
import './Header.css'

const Header = () => {

    const {state} = useContext(ProductsContext)
    
    //States
    const [icon, setIcon] = useState(false)

    //imported hook
    const navigate = useNavigate()

    //functions of this component
    
    const handlerIcon = ()=>{
        setIcon(!icon)
    }

    return (
        <div className="contenedor-header">
            <div className="header-container">
                <button onClick={handlerIcon}><i className={!icon ? "fas fa-align-justify" : "fab fa-diaspora"}></i></button>
                <img src={power} alt="logo" />
                <div className="cart-icon" onClick={()=> navigate ("/cart")}>
                    
                    <i className="fas fa-cart-arrow-down"></i>
                    <h6>{state.cart.length > 0 ? state?.cart?.map( a => a.amount).reduce( (a,b)=> a+b) : 0}</h6> 
                    
                </div>
            </div>
            <ul className={!icon ? "ulHidden" : "ulVisible"}>
                <li onClick={()=> navigate ("/")}>Bienvenido</li> 
                <li onClick={()=> navigate ("/products")}>Productos</li>
                <li onClick={()=> navigate ("/aboutus")}>Acerca de Nosotros</li>
                <li onClick={()=> navigate ("/login")}>Ingresar</li>
                <li onClick={()=> navigate ("/reviews")}>Testimonios</li>
            </ul>
        </div>
    )
}

export default Header
