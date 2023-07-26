import { useContext } from "react";
import { ActiveFilterContext } from "../App";
import './ActiveFilter.css'

const ActiveFilter = () => {
    const { activeFilters, removeFilter } = useContext(ActiveFilterContext)

    return (
        <>
            {activeFilters.map((filter) => (
                <button className="filter-button" key={filter.id} onClick={() => removeFilter(filter)}>
                    <span className="cross">x&nbsp;</span>{filter.name.fr}</button>
            ))}
        </>
    )
};

export default ActiveFilter;