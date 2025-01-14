import React, { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RunEntryForm } from "@/components/RunEntryForm"
import RunGrid from "./components/RunGrid"

function App() {
  const handleDeleteRun = () => {

  }

  const handleAddRun = () => {

  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Run Tracker</h1>
      <Tabs defaultValue="all-runs" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all-runs">All Runs</TabsTrigger>
          <TabsTrigger value="add-run">Add New Run</TabsTrigger>
        </TabsList>
        <TabsContent value="all-runs">
          <RunGrid onDeleteRun={handleDeleteRun} />
        </TabsContent>
        <TabsContent value="add-run">
          <RunEntryForm onSubmit={handleAddRun} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
