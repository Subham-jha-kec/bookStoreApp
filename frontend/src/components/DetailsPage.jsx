import React from "react";
import { useParams } from "react-router-dom";

function DetailsPage() {
  const { name } = useParams();
  return (
    <div className="mt-20 text-center">
      <h1 className="text-3xl font-bold">Details for: {name}</h1>
      {/* Add actual details here */}
    </div>
  );
}

export default DetailsPage;
