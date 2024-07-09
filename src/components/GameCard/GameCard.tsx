import classes from './GameCard.module.css';
import { memo } from 'react';
import NO_CONTENT_AVIABLE from '../../assets/NoContent.jpeg';
import { useState } from 'react';

interface CardInterface {
    img: string;
    id: string;
    name: string;
}

const GameCard = memo((props: CardInterface) => {
    const [isImageValid, setIsImageValid] = useState(true);

    const handleImageError = () => {
        setIsImageValid(false);
    }

    return (
        <div className={classes.card}>
            <div className={classes.firstContent}>
                <img
                    onError={handleImageError}
                    src={isImageValid ? props.img : NO_CONTENT_AVIABLE}
                    alt={props.name}
                    className={classes.cardBackground}
                />
            </div>
            <div className={classes.secondContent}>
                <span>{props.name}</span>
            </div>
        </div>
    );
});

export default GameCard;