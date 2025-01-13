import { useEffect, useState } from "react";
import RunCard from "./RunCard";

function App() {
  const [runArr, setRunArr] = useState([]);

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
    <div>
      {runArr.map((runObj, index) => (
        <RunCard key={index} {...runObj} />
      ))}
    </div>
  );
}

export default App;
