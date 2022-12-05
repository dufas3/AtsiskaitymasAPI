import {Carousel, CarouselItem} from "react-bootstrap";
const Quote=(props)=>{
    return(
        <CarouselItem>
            <div>
                <p>Quote : {props.quote}</p>
                <p>Author : {props.author}</p>
            </div>
        </CarouselItem>

    )
}

export default Quote