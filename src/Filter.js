import './Filter.css';
import remove from './images/icon-remove.svg';
function Filter({filters, removeTab, clearFilters}){

     const filterStyle = {
         visibility: filters.length > 0 ? "initial" : "hidden"
     }
    return (
        <div className="Filter" style={filterStyle}>
            <div className="inner-filter">
            {filters.map(f => (
                <>
                <div className="filterTab" id={f}> 
                <p>{f}</p>
                <img src={remove} onClick={removeTab} />
                </div>
                </>
            ))}
            </div>
            <span onClick={clearFilters} className="clear">Clear</span>
        </div>
    )
}

export default Filter;