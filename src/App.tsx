import "./styles.css";
import Recipes from "./Recipes/Recipes";
import { tagList } from "./Tags/TagData";
import ActiveFilter from "./ActiveFilter/ActiveFilter";
import { createContext, useState } from "react";
import Tags from "./Tags/Tags";
import { TagType } from "./Tags/TagType";

type ActiveFilterContextType = {
  activeFilters: TagType[],
  addFilter: (filterToAdd: TagType) => void,
  removeFilter: (filterToRemove: TagType) => void
}

export const ActiveFilterContext =
  createContext<ActiveFilterContextType>({
    activeFilters: [],
    addFilter: () => { },
    removeFilter: () => { },
  })

const App = () => {
  const [activeFilters, setActiveFilters] = useState<TagType[]>([])

  const addFilter = (filterToAdd: TagType) => {
    setActiveFilters((previousActiveFilters) => [...previousActiveFilters, filterToAdd])
  }

  const removeFilter = (filterToRemove: TagType) => {
    setActiveFilters((previousActiveFilters) =>
      previousActiveFilters.filter((element) => element.id !== filterToRemove.id)
    )
  }

  return (
    <ActiveFilterContext.Provider value={{ activeFilters, addFilter, removeFilter }}>
      <div className="App">
        Liste des recettes
        <Tags tags={tagList} />
        <ActiveFilter />
        <Recipes />
      </div>
    </ActiveFilterContext.Provider>
  );
}

export default App;