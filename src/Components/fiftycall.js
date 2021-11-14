import React from "react";
import { useState, useEffect } from "react";
import AddLabel from "./addLabel";
import CallerTable from "./callerTable";

function Fiftycall() {
  const [filter, setFilter] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);

  useEffect(() => {
    fetch("https://damp-garden-93707.herokuapp.com/getlistoflabels", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        user_id: "24b456",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data.unique_label_list);
        setFilter(data.data.unique_label_list);
      });
  }, []);

  return (
    <div>
      <AddLabel filter={filter} setSelectedFilter={setSelectedFilter} />
      <br />
      <CallerTable />
    </div>
  );
}

export default Fiftycall;
