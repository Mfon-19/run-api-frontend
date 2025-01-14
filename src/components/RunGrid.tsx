import React, { useEffect, useState } from 'react'
import { RunCard } from './RunCard';

const RunGrid = ({ onDeleteRun }: { onDeleteRun: () => void}) => {
  const [runArr, setRunArr] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8080/api/runs")
      .then((response) => response.json())
      .then((data) => {
        const runs = data.map((run) => ({
          title: run.title,
          startedOn: new Date(run.startedOn).toLocaleString('en-US', { 
            month: 'short',
            day: 'numeric', 
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }),
          completedOn: new Date(run.completedOn).toLocaleString('en-US', {
            month: 'short', 
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true
          }),
          miles: run.miles,
          location: run.location,
        }));
        setRunArr(runs);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {runArr && runArr.map(({ title, startedOn, completedOn, miles, location}) => (
          <RunCard
            title={title}
            startedOn={startedOn}
            completedOn={completedOn}
            location={location}
            miles={miles}
            onDelete={onDeleteRun}
          />
        ))}
      </div>
    </div>
  );
}

export default RunGrid