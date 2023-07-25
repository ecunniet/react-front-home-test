const ActiveFilter = () => {
    const activeFilters = ['chocolate', 'sugar', 'summer', 'dessert', 'chocolate dessert', 'eggs free', 'autumn', 'vegan']

    const dissmissFilter = (filter: string) => {
        console.log('dismissing' + filter)
    }
    return (
        <>
            {activeFilters.map((filter) => (
                <button key={filter} onClick={() => dissmissFilter(filter)}>{filter}</button>
            ))}
        </>
    )
};

export default ActiveFilter;