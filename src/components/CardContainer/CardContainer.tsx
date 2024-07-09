import classes from './CardContainer.module.css'
import GameCard from '../GameCard/GameCard';
import { GamesDataInterface } from '../../interface/gamesData';

interface CardContainerInterface {
    elements: GamesDataInterface[]
}


const CardContainer = (cardsData: CardContainerInterface) => {

    return (
        <div className={classes.cardsContainer}>
            {cardsData.elements.map((item) => { return (<GameCard name={item.name} id={item.id} key={item.id} img={item.icon_2} />) })}
        </div>
    );
}

export default CardContainer;