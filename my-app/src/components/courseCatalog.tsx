import React, { Component } from "react";
import Class from "./class";
import allClasses from "../assets/courses";

const sections = [
  "Mathematics",
  "Basic Sciences",
  "Engineering Analysis",
  "DTC",
  "Theme",
  "Core Classes",
  "Theory",
  "Systems",
  "Artificial Intelligence",
  "Interfaces",
  "Software Development and Programming Languages",
  "Project Courses",
  "Advanced Electives",
  "Technical Electives",
];

const flattenCourses = () => {
  let courses: { name: string; courseId: string; section: string }[] = [];
  for (let section in allClasses) {
    const sectionCourses = allClasses[section as keyof typeof allClasses];
    sectionCourses.forEach((course: { courseId: string; name: string }) => {
      courses.push({
        name: course.name,
        courseId: course.courseId,
        section,
      });
    });
  }
  return courses;
};

interface CourseCatalogProps {
  addClass: (course: { courseId: string; name: string; section: string }) => void;
}

interface CourseCatalogState {
  search: string;
  selectedSection: string;
  courses: { name: string; courseId: string; section: string }[];
}

class CourseCatalog extends Component<CourseCatalogProps, CourseCatalogState> {
  state: CourseCatalogState = {
    search: "",
    selectedSection: "",
    courses: flattenCourses(),
  };

  search = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  sectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedSection: event.target.value });
  };

  render() {
    const { search, selectedSection, courses } = this.state;
    const { addClass } = this.props;

    const lowerSearch = search.toLowerCase();
    const selectedSectionFiltered = selectedSection.trim();

    const filteredCourses = courses.filter((course) => {
      const matchesSearch =
        course.courseId.toLowerCase().includes(lowerSearch) ||
        course.name.toLowerCase().includes(lowerSearch);
      const matchesSection = selectedSectionFiltered ? course.section === selectedSectionFiltered : true;
      return matchesSearch && matchesSection;
    });

    return (
      <div className="flex-1 h-screen text-white p-6 border-l border-gray-700">
        <h2 className="text-2xl font-semibold mb-2">Course Catalog</h2>
        <label className="mb-2">Add your classes from below: </label>

        <input
          type="text"
          placeholder="Search for a class..."
          value={search}
          onChange={this.search}
          className="w-full p-2 mb-4 bg-white text-black rounded"
        />

        <div className="mb-4">
          <label htmlFor="sectionFilter" className="mr-2">
            Filter by Section:
          </label>
          <select
            id="sectionFilter"
            value={selectedSection}
            onChange={this.sectionChange}
            className="p-2 bg-white text-black rounded"
          >
            <option value="">All Sections</option>
            {sections.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 min-h-[50px]">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <Class
                  key={`${course.courseId}-${course.section}`}
                  courseId={course.courseId}
                  name={course.name}
                  onClick={() => addClass(course)}
                />
              ))
            ) : (
              <div className="col-span-2 flex items-center justify-center text-gray-400">
                No results found
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCatalog;
