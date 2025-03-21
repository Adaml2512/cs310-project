import React, { useState } from "react";
import { useLocation } from "react-router";
import CourseCatalog from "../components/courseCatalog";

const ClassPage: React.FC = () => {
    const location = useLocation();
    const school = location.state?.school || "No school selected";

    // state to store selected classes
    const [selectedClasses, setSelectedClasses] = useState<
        { courseId: string; name: string; section: string }[]
    >([]);

    // function to add a class, preventing duplicates
    const addClass = (newClass: { courseId: string; name: string; section: string }) => {
        setSelectedClasses((prevClasses) => {
            if (prevClasses.some((c) => c.courseId === newClass.courseId)) {
            return prevClasses; // Prevent duplicate addition
            }
            console.log(selectedClasses);
            return [...prevClasses, newClass];
        });
    };

    const handleSubmit = async () => {
        if (selectedClasses.length === 0) {
          alert("No classes selected!");
          return;
        }
      
        const courses = selectedClasses.map((course) => ({
          course_id: course.courseId,
          course_name: course.name,
          requirement: course.section, // Assuming section represents the requirement
        }));

        console.log(courses);
      
        // try {
        //     const response = await fetch("YOUR_API_URL_HERE", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ data: courses }),
        //     });
      
        // if (!response.ok) {
        //     throw new Error("Failed to submit classes");
        // }
        // alert("Classes submitted!");

        // } catch (error) {
        //     console.error("Error submitting classes:", error);
        //     alert("Error submitting classes. Please try again.");
        // }
      };
      
  return (
    <div className="flex w-screen w-full">
      <div className="w-1/3 p-6">
        <h2 className="text-2xl font-bold mb-4">{school} Requirements Page</h2>
        <p className="mb-4">Add classes that you have taken below</p>
        
        <div className="space-y-2">
          {selectedClasses.length > 0 ? (
            selectedClasses.map((course) => (
              <div key={course.courseId} className="p-2 bg-indigo-500 text-white rounded">
                {course.courseId}
              </div>
            ))
          ) : (
            <p className="text-gray-400">No classes added yet.</p>
          )}
            <button className="pt-6" onClick={handleSubmit}>
                Submit
            </button>
        </div>  
      </div>

      <div className="flex w-1/2">
        <CourseCatalog addClass={addClass} />
      </div>
    </div>
  );
};

export default ClassPage;
