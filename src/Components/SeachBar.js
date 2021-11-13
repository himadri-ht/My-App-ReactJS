import React from 'react';

function SearchBar({placeholder, data}){
    const [filteredData, setFilteredData] = useState([]);
    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);    
        }
    };
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
                <div className="searchIcon"></div>
            </div>
            {filteredData.length != 0 && (
            <div className="dataResult">
                {
                    filteredData.map((value) => {
                        return (
                        <div>{value}</div>
                        );
                    })}
        </div>
            )}
)}

export default SearchBar