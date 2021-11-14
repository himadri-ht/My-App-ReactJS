import React from 'react';
//import {useState } from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
// import data from './FetchData';
//import {useEffect} from "react";
import data from './Data.json';

function SearchBar() {
  //const [data, setData] = useState([]);

  // useEffect(() => {
  //   data();
  //   }, []);

  // useEffect(() => {
  //   fetch("https://damp-garden-93707.herokuapp.com/getlistofagents"})
  //       .then((response) => {response.json()})
  //         .then((data) => {
  //             setData(data.data.listofagents);
  //         })
  // }, [])
    return (
      <Stack spacing={3} sx={{ width: 500 }}>
          <Autocomplete
        multiple
        id="tags-outlined"
        options={data}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
      </Stack>
  );
}

export default SearchBar;