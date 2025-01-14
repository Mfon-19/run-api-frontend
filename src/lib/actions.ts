import { z } from "zod";

export const handleAddRun = async (data) => {
  try {
    const response = await fetch("http://localhost:8080/api/runs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) console.log(`An error occured`);
  } catch (error) {
    console.log(`An error occured: ${error}`);
  }
};

export const handleDeleteRun = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/runs/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error) {}
};
