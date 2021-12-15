import React from 'react'
import "./AboutUs.styles.css"
import { Link } from 'react-router-dom'
import mapcommerce from '../../Assets/mapcommerce.png'

const AboutUs = () => {
    return (
        <div className="contenedor-about">
         <div className="container-general">

              <div className="container-info">
                <h2>Sobre nosotros</h2>
                <p>Power Street.<br/> 
                PowerStreet es una empresa tecnológica Latinoamericana fundada en Uruguay en el año de 1988 especializada en desarrollar soluciones para la distribución de productos y gestión de ventas.<br/> <br/> 
                    VISIÓN:Ser una empresa líder con reconocimiento mundial en sistemas de información y consultoría para la cadena de suministros entendiendo como el único medio, la satisfacción total de nuestros clientes no importa dónde estos se encuentren.</p>
              </div>
            
              <div className="container-map">
                <h3 className="text-center py-2 my-2">Nuestra ubicacion</h3>
                <div className="contenedor-map">
                  <a href="https://www.google.com/maps/place/PowerStreet/@19.409714,-99.134525,15z/data=!4m5!3m4!1s0x0:0xe83f5400c1094cbb!8m2!3d19.4097021!4d-99.134441" target="_blanck" rel="noreferrer"><img src={mapcommerce} alt="" /></a>
                </div>
              </div>
         </div>

          <div className="icon-dev">
              <Link to="/"><i className="fas fa-code "></i></Link>
          </div>
           
        </div>
    )
}

export default AboutUs
