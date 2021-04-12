import './App.css';
import Job from './Job';
import data from './data';
import Header from './Header';
import Filter from './Filter';
import React, {useState} from "react";
function App() {

  const [filters, setFilters] = useState([])

  const addFilter = (e) => {
    // add filter to filter array 
    if(!filters.includes(e.target.textContent)){
    setFilters(prevState => [...prevState, e.target.textContent])
    }
  }

  const removeTab = (e) => {
    // remove Tabs for filterTabs array
    const updatedTabs = filters.filter(f => (
      f !== e.target.parentElement.id
    ))

    setFilters(updatedTabs)
  }

  const clearFilters = () => {
    // clear all filters 
    setFilters([])
  }

  return (
    <div className="App">
      <Header />
        <Filter filters={filters} removeTab={removeTab} clearFilters={clearFilters} />
        {data.map(d => {

        let jobTags = [d.role, d.level, ...d.languages, ...d.tools];

        let filterJobs = (jobTags, filters) => 
        filters.every((value) => jobTags.includes(value));
        

        return (
          filters.length === 0 ?
          <Job profileImg={d.logo} companyName={d.company} position={d.position} newPost={d.new} featured={d.featured} 
          postedAt={d.postedAt} contract={d.contract} location={d.location} role={d.role}
           level={d.level} languages={d.languages} tools={d.tools} addFilter={addFilter} />
      
          : 
      
          filterJobs(jobTags, filters) && 
            <Job profileImg={d.logo} companyName={d.company} position={d.position} newPost={d.new} featured={d.featured} 
            postedAt={d.postedAt} contract={d.contract} location={d.location} role={d.role}
             level={d.level} languages={d.languages} tools={d.tools} addFilter={addFilter} />
      
        )
    })}
    </div>
  );
}

export default App;
