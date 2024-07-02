import './CategoryOption.css'

interface OptionsInterface {
    name: string
}

const CategoryOption = (optionProps: OptionsInterface) => {
    return (
        <option className='optionSelectCategory'>{optionProps.name}</option>
    )
}

export default CategoryOption;