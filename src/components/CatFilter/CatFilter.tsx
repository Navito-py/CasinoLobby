import './CatFilter.css'
import { Cat } from '../../interface/gamesData';

interface CatFilterProps {
    elements: Cat[],
    filterFunction: Function,
}

function CatFilter(props: CatFilterProps) {



    function onChangeSelect(event: React.FormEvent<HTMLSelectElement>) {

        let id = props.elements.find((e) => { return e.title == event.currentTarget.value })

        props.filterFunction(id?.id)

    }

    return (
        <select className='selectCategory' onChange={e => onChangeSelect(e)}>
            {props.elements?.map((item) => { return (<OptionCatFilter key={item.id} name={item.title}></OptionCatFilter>) })}
        </select>
    );
}

interface OptionsInterface {
    name: string
}


const OptionCatFilter = (optionProps: OptionsInterface) => {
    return (
        <option className='optionSelectCategory'>{optionProps.name}</option>
    )
}

export default CatFilter;