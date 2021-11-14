import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CallData from "./DataCallDuration.json";
import { useState, useEffect } from "react";

function CallDuration({
  selectedAgents,
  selAgents,
  setSelAgents,
  setEntermin,
  setEntermax,
  entermin,
  entermax,
}) {
  // const [entermin, setEntermin] = useState("0");
  // const [entermax, setEntermax] = useState("0");

  // useEffect(() => {
  //   console.log(selAgents);

  //   fetch("https://damp-garden-93707.herokuapp.com/getfilteredcalls", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       info: {
  //         filter_agent_list: selAgents,
  //         filter_time_range: [parseFloat(entermin), parseFloat(entermax)],
  //       },
  //     }),
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });

  function updateMin(e) {
    setEntermin(e.target.value);
    console.log(e.target.value);
  }
  function updateMax(e) {
    setEntermax(e.target.value);
    console.log(e.target.value);
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        input
        type="number"
        min={CallData.minimum}
        max={CallData.maximum}
        value={entermin}
        onChange={updateMin}
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        input
        type="number"
        min={CallData.minimum}
        max={CallData.maximum}
        value={entermax}
        onChange={updateMax}
      />
    </Box>
  );
}

export default CallDuration;
