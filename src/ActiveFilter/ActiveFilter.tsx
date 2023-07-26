import { useContext } from "react";
import { ActiveFilterContext } from "../App";

const ActiveFilter = () => {
    const { activeFilters, removeFilter } = useContext(ActiveFilterContext)

    return (
        <>
            {activeFilters.map((filter) => (
                <button key={filter.id} onClick={() => removeFilter(filter)}>{filter.name.fr}</button>
            ))}
        </>
    )
};

export default ActiveFilter;