import React, { createContext, useReducer } from 'react'
import paqueteria from '../Imgs/paqueteria.png'
import logistica from '../Imgs/logistica.png'
import ventas from '../Imgs/ventas.png'

import { ReviewData } from './ReviewsData/ReviewsData'
const ProductsContext = createContext()

const reducer = ( state, action )=>{

    switch ( action.type ) {
        case "ADD_TO_CART":

            let isProduct = state.cart.find( x => x.idCard === action.payload.idCard)

            return isProduct ? { 
                ...state,
                cart: state.cart.map( x => x.idCard === action.payload.idCard ? {...x, amount: x.amount + 1} : x ) ,            
                priceTotal: state.priceTotal + action.payload.price,
               
            } : {
                ...state,
                cart:[ ...state.cart, {...action.payload, amount: 1}],
                priceTotal: state.priceTotal + action.payload.price,
            }

         case "REMOVE_ONE":

            let isDelete = state.cart.find( x => x.idCard === action.payload.idCard & x.amount > 1)

             return isDelete ? {
                ...state,
                cart: state.cart.map( x => x.idCard === action.payload.idCard ? {...x, amount: x.amount - 1} : x ),
                priceTotal: state.priceTotal - action.payload.price,

            } : {

               ...state
               
            }
        
        case "REMOVE_FROM_CART":
            return{

                ...state,
                cart: state.cart.filter( x => x.idCard !== action.payload.idCard),
                priceTotal: state.priceTotal - action.payload.price * action.payload.amount

            }
        
        case "ADD_REVIEW":
            
            return{
                ...state,
                cart: [...state.cart],
                newComment: [...state.newComment, action.payload]
            }
            
        case "LOG_IN_GMAIL":
            
            return{
                ...state,
                loggedUser: action.payload
            } 

        case "LOG_IN_EMAIL":
        
            return{
                ...state,
                loggedUser: action.payload
            } 

        case "REGISTER":
    
            return{
                ...state,
                loggedUser: action.payload
            } 
        case "LOG_OUT":
    
            return{
                ...state,
                loggedUser: action.payload
            } 

        default:
            return state
    }

}

const ProductsContextProvider = ({children}) => {

    const inicialState = {
        products: [
            {   
                id: 1,
                name: 'Power Street',
                subname: 'A',
                descp: "agilidad seguridad y confianza",
                price: 1500,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            },

            {   
                id: 2,
                name: 'Power Street',
                subname: 'C',
                descp: "agilidad seguridad y confianza",
                price: 1500,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            },

            {   
                id: 3,
                name: 'Power Street',
                subname: 'C',
                descp: "agilidad seguridad y confianza",
                price: 1300,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            },

            {   
                id: 4,
                name: 'Power Street',
                subname: 'P',
                descp: "agilidad seguridad y confianza",
                price: 1400,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            },

            {   
                id: 5,
                name: 'Power Street',
                descp: "agilidad seguridad y confianza.",
                price: 1800,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            },

            {   
                id: 6,
                name: 'Power Street',
                subname: 'P',
                descp: "agilidad seguridad y confianza",
                price: 7000,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            },

            {   
                id: 7,
                name: 'Power Street',
                subname: 'R',
                descp: "agilidad seguridad y confianza",
                price: 5000,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            },

            {   
                id: 8,
                name: 'Power Street',
                subname: 'D',
                descp: "agilidad seguridad y confianza",
                price: 1500,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            },

            {   
                id: 9,
                name: 'Power Street',
                subname: 'p',
                descp: "agilidad seguridad y confianza",
                price: 1500,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            },

            {   
                id: 10,
                name: 'Power Street',
                descp: "agilidad seguridad y confianza",
                price: 1500,
                img:{
                    img1: paqueteria,
                    img2: logistica,
                    img3: ventas
                }
            }

        ],
        cart: [],
        priceTotal: 0,
        ReviewData,
        newComment:[],
        loggedUser: null
    }

    const [state, dispatch] = useReducer( reducer, inicialState )


    const data = {
        state, dispatch
    }

    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContextProvider }
export default ProductsContext
