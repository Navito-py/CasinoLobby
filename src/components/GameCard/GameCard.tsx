import './GameCard.css'
import { CardInterface } from '../../interface/cardContainerInterface';
import NO_CONTENT_AVIABLE from '../../assets//NoContent.jpeg'
import { useState } from 'react';



const GameCard = (props: CardInterface) => {

    const [isValid, setIsValid] = useState(true)

    return (
        <>
            <div className="card">
                <div className="first-content">
                    <img onError={() => setIsValid(!isValid)} src={isValid ? props.img : NO_CONTENT_AVIABLE} alt={props.name} className="cardBackground" />
                </div>
                <div className="second-content">
                    <span>{props.name}</span>
                </div>
            </div>
        </>
    );
}

export default GameCard;