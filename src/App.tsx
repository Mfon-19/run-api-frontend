import { useEffect, useState } from "react";
import { RunCard } from "./components/RunCard";
import React from "react";

function App() {
  const [runArr, setRunArr] = useState([]);

  const handleDelete = () => {
    // delete from database
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/runs")
      .then((response) => response.json())
      .then((data) => {
        const runs = data.map((run) => ({
          title: run.title,
          startedOn: run.startedOn,
          completedOn: run.completedOn,
          miles: run.miles,
          location: run.location,
        }));
        setRunArr(runs);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {runArr && runArr.map(({ title, startedOn, completedOn, miles, location}) => (
          <RunCard
            title={title}
            startedOn={startedOn}
            completedOn={completedOn}
            location={location}
            miles={miles}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
