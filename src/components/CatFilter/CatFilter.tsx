import './CatFilter.css'
import { Cat } from '../../interface/gamesData';
import OptionCatFilter from './CategoryOption/CategoryOption';

interface CatFilterProps {
    elements: Cat[],
    filterFunction: Function,
}

function CatFilter(props: CatFilterProps) {



    function handleCategoryChange(event: React.FormEvent<HTMLSelectElement>) {

        let id = props.elements.find((e) => { return e.title == event.currentTarget.value })

        props.filterFunction(id?.id)

    }

    return (
        <select className='selectCategory' onChange={e => handleCategoryChange(e)}>
            {props.elements?.map((item) => { return (<OptionCatFilter key={item.id} name={item.title}></OptionCatFilter>) })}
        </select>
    );
}

export default CatFilter;