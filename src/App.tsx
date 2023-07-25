import "./styles.css";
import Recipes from "./Recipes/Recipes";
import { tagList } from "./Tags/TagData";
import ActiveFilter from "./ActiveFilter/ActiveFilter";
import { createContext, useState } from "react";
import { Tags } from "./Tags/Tags";

export const ActiveFilterContext =
  createContext<{ activeFilters: string[], addFilter: (filterToAdd: string) => void, removeFilter: (filterToRemove: string) => void }>({
    activeFilters: [],
    addFilter: () => { },
    removeFilter: () => { },
  })

export default function App() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const addFilter = (filterToAdd: string) => {
    setActiveFilters((previousActiveFilters) => [...previousActiveFilters, filterToAdd])
  }

  const removeFilter = (filterToRemove: string) => {
    setActiveFilters((previousActiveFilters) =>
      previousActiveFilters.filter((element) => element !== filterToRemove)
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
