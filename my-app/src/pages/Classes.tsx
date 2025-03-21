import React, { useState } from "react";
import { useLocation } from "react-router";
import CourseCatalog from "../components/courseCatalog";

const ClassPage: React.FC = () => {
  const location = useLocation();
  const school = location.state?.school || "No school selected";

  // State to store selected classes
  const [selectedClasses, setSelectedClasses] = useState<
    { courseId: string; name: string; section: string }[]
  >([]);

  // Function to add a class, preventing duplicates
  const addClass = (newClass: { courseId: string; name: string; section: string }) => {
    setSelectedClasses((prevClasses) => {
      if (prevClasses.some((c) => c.courseId === newClass.courseId)) {
        return prevClasses; // Prevent duplicate addition
      }
      return [...prevClasses, newClass];
    });
  };

  return (
    <div className="flex w-screen w-full">
      <div className="w-1/3 p-6">
        <h2 className="text-2xl font-bold mb-4">{school} Requirements Page</h2>
        <p className="mb-4">Add classes that you have taken below</p>
        
        {/* Display selected classes */}
        <div className="space-y-2">
          {selectedClasses.length > 0 ? (
            selectedClasses.map((course) => (
              <div key={course.courseId} className="p-2 bg-gray-700 text-white rounded">
                {course.name} ({course.courseId})
              </div>
            ))
          ) : (
            <p className="text-gray-400">No classes added yet.</p>
          )}
        </div>
      </div>

      <div className="flex w-1/2">
        {/* Pass addClass function to CourseCatalog */}
        <CourseCatalog addClass={addClass} />
      </div>
    </div>
  );
};

export default ClassPage;
