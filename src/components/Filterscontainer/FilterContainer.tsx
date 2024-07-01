import './FilterContainer.css'
import CatFilter from '../CatFilter/CatFilter';
import SearchBar from '../searchBar/SearchBar';
import Wallet from '../Wallet/Wallet';
import { Cat } from '../../interface/gamesData';

interface PropsFilterContainer {
    categories: Cat[],
    filterFunction: Function,
    filterByNameFunction: Function,
}

function FilterContainer(props: PropsFilterContainer) {
    return (
        <div className="filtercontainer">
            <SearchBar searchFunction={props.filterByNameFunction}></SearchBar>
            <CatFilter filterFunction={props.filterFunction} elements={props.categories}></CatFilter>
            <Wallet></Wallet>
        </div>
    );
}

export default FilterContainer;