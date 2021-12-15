import React from 'react'

//Images
import portada1 from "../../Assets/portada1.png"
import portada2 from "../../Assets/portada2.png"
import portada3 from "../../Assets/portada2.png"

// Styles
import "./Carrousell.styles.css"

const Carrousell = () => {


    return (


        <div className="slider-home-container">

            <div className="slides-home">
                <div className="slide">
                    <img  src={portada1} alt="" />
                </div>
                <div className="slide">
                    <img src={portada2} alt="" />
                </div>
                <div className="slide">
                    <img src={portada3} alt="" />
                </div>
            </div>

        </div>

    )
}

export default Carrousell