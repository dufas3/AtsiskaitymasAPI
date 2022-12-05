import {useState, useEffect} from "react";
import {Row} from "react-bootstrap"
import Quote from "../Quote/Quote";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Qoutes=()=> {

    const [quote,setQuote] = useState([]);
    //const url = https://strangerthings-quotes.vercel.app/api/quotes/50
    useEffect(()=>{
        fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
            .then(response=>response.json())
            .then(data=>setQuote(data))
    }, [])
    return(
        <Carousel showArrows={true}>

                {quote.map(quotes=><Quote quote={quotes.quote} author={quotes.author}/>)
                }

        </Carousel>
    )
}
 export default Qoutes

