import classes from './App.module.css';
import CardContainer from '../CardContainer/CardContainer';
import FakeData from '../../data/data.json';
import FilterContainer from '../Filterscontainer/FilterContainer';
import { useEffect, useState, useCallback } from 'react';
import { GamesDataInterface, Cat } from '../../interface/gamesData';

const ALL_CATEGORIES_ID = '1';

const getCategories = (data: GamesDataInterface[]): Cat[] => {
    const categoriesSet = new Set<string>();
    const categoriesList: { id: string, title: string, type: string }[] = [];
    const caseAll = { id: ALL_CATEGORIES_ID, title: "All", type: "category" };

    data.forEach((item) => {
        item.cats.forEach((e) => {
            if (!categoriesSet.has(e.title)) {
                categoriesSet.add(e.title);
                categoriesList.push(e);
            }
        });
    });

    categoriesList.unshift(caseAll);
    return categoriesList;
};

function App() {
    const [gamesData] = useState<GamesDataInterface[]>(FakeData);
    const [gamesDataFiltered, setGamesDataFiltered] = useState<GamesDataInterface[]>(gamesData);
    const [categories, setCategories] = useState<Cat[]>([]);

    useEffect(() => {
        setCategories(getCategories(gamesData));
    }, [gamesData]);

    const filterResultByCategory = useCallback((categoryId: string | undefined) => {
        if (categoryId !== undefined) {

            if (categoryId === ALL_CATEGORIES_ID) {
                setGamesDataFiltered(gamesData);
            } else {
                const filteredInfo = gamesData.filter((item) => item.categories.includes(categoryId));
                setGamesDataFiltered(filteredInfo);
            }
        }
    }, [gamesData]);

    const searchGamesByName = useCallback((name: string) => {
        if (name === '') {
            setGamesDataFiltered(gamesData);
        } else {
            const searchedByName = gamesData.filter((item) =>
                item.name.toLowerCase().includes(name.toLowerCase())
            );
            setGamesDataFiltered(searchedByName);
        }
    }, [gamesData]);

    return (
        <div className={classes.mainSplash}>
            <FilterContainer
                filterByNameFunction={searchGamesByName}
                filterFunction={filterResultByCategory}
                categories={categories}
            />
            <CardContainer elements={gamesDataFiltered} />
        </div>
    );
}

export default App;