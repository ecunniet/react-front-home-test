import { useContext } from "react";
import { ActiveFilterContext } from "../App";

const ActiveFilter = () => {
    const { activeFilters, removeFilter } = useContext(ActiveFilterContext)
    //    const activeFilters = ['chocolate', 'sugar', 'summer', 'dessert', 'chocolate dessert', 'eggs free', 'autumn', 'vegan']

    return (
        <>
            {activeFilters.map((filter) => (
                <button key={filter} onClick={() => removeFilter(filter)}>{filter}</button>
            ))}
        </>
    )
};

export default ActiveFilter;