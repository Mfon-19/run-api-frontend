import React, { useEffect, useState } from 'react'
import { RunCard } from './RunCard';
import { handleDeleteRun } from '@/lib/actions';

const RunGrid = ({ onDeleteRun }: { onDeleteRun: (id) => void}) => {
  const [runArr, setRunArr] = useState([]);

  const handleDelete = async (id) => {
    try {
      await onDeleteRun(id);
      setRunArr(prevRuns => prevRuns.filter(run => run.id !== id));
    } catch (error) {
      console.error(`Failed to delete run: ${error}`);
    }
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/runs")
      .then((response) => response.json())
      .then((data) => {
        const runs = data.map((run) => ({
          id: run.id,
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
        {runArr && runArr.map(({ id, title, startedOn, completedOn, miles, location }) => (
          <RunCard
            key={id}
            title={title}
            startedOn={startedOn}
            completedOn={completedOn}
            location={location}
            miles={miles}
            onDelete={() => handleDelete(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default RunGrid