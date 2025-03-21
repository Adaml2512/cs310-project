import React from "react";
import { useLocation } from "react-router";
import CourseCatalog from "../components/courseCatalog";

const ClassPage: React.FC = () => {
  const location = useLocation();
  const school = location.state?.school || "no school selected";

  return (
    <div className="flex h-screen w-full max-w-screen-xl mx-auto">
      {/* Main Content */}
      <div className="w-1/3 p-6">
        <h2 className="text-2xl font-bold mb-4">{school} Requirements Page</h2>
        <p className="mb-4">Add classes that you have taken below</p>
      </div>

      {/* CourseCatalog (Wider) */}
      <div className="w-2/3">
        <CourseCatalog />
      </div>
    </div>
  );
};

export default ClassPage;
