import classes from './CategoryOption.module.css'

interface OptionsInterface {
    name: string
}

const CategoryOption = (optionProps: OptionsInterface) => {
    return (
        <option className={classes.optionSelectCategory}>{optionProps.name}</option>
    )
}

export default CategoryOption;