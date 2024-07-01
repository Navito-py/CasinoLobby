import './App.css'
import CardContainer from '../CardContainer/CardContainer';
import FakeData from '../../data/data.json'
import Wallet from '../Wallet/Wallet';
import FilterContainer from '../Filterscontainer/FilterContainer';
import { useEffect, useState } from 'react';
import { GamesDataInterface, Cat } from '../../interface/gamesData';

const ALL_CATEGORIES_ID = "-1";

function App() {

    const [gamesData] = useState<GamesDataInterface[]>(FakeData)

    const [gamesDataFiltered, setGamesDataFiltered] = useState<GamesDataInterface[]>(gamesData)

    const [categories, setCategories] = useState<Cat[]>([])


    useEffect(() => {
        setCategories(getCategories(gamesData));
    }, [gamesData]);

    const getCategories = (data: GamesDataInterface[]): Cat[] => {
        const categoriesSet = new Set<string>();
        const categoriesList: { id: string, title: string, type: string }[] = [];
        const caseAll = { id: '-1', title: "All", type: "category" };

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

    const filterResultByCategory = (categoryId: string) => {
        setGamesDataFiltered(gamesData)
        if (categoryId !== '-1') {
            const filteredInfo = gamesData.filter((item) => {
                return item.categories.includes(categoryId);
            });
            setGamesDataFiltered(filteredInfo)
        }
    }

    const searchGamesByName = (name: string) => {
        setGamesDataFiltered(gamesDataFiltered)
        if (name !== '') {
            const searchedByName = gamesDataFiltered.filter((item) => {
                return item.name.toLowerCase().includes(name.toLowerCase())
            })
            setGamesDataFiltered(searchedByName)
        }
    }

    return (
        <div className="mainSplash">
            <FilterContainer filterByNameFunction={searchGamesByName} filterFunction={filterResultByCategory} categories={categories}></FilterContainer>
            <CardContainer elements={gamesDataFiltered} />
        </div>
    );
}

export default App;