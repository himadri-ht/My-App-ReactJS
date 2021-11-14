import React from "react";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
// import data from "./FetchData";
import { useEffect } from "react";
// import data from "./Data.json";
// import { TextField as MuiTextField } from "@material-ui/core";

// import { TextField } from "formik-mui";

function SearchBar({ selectedAgents, selAgents, setSelAgents }) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   data();
  //   }, []);

  // useEffect(() => {
  //   fetch("https://damp-garden-93707.herokuapp.com/getlistofagents")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data.data.listofagents);
  //       setData(data.data.listofagents);
  //     });
  // }, []);
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={selectedAgents}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        filterSelectedOptions
        onChange={(event, value) => setSelAgents(value)}
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
