import React, { Component } from "react";
import Class from "./class";

interface CourseCatalogState {
  search: string;
  courses: { name: string; classId: string }[];
}

class CourseCatalog extends Component<{}, CourseCatalogState> {
  state: CourseCatalogState = {
    search: "",
    courses: [
      { name: "COMP_SCI 212", classId: "0" },
      { name: "COMP_SCI 213", classId: "1" },
      { name: "COMP_SCI 214", classId: "2" },
    ],
  };

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, courses } = this.state;
    const filteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="w-64 h-screen bg-gray-900 text-white p-4 border-r border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Course Catalog</h2>

        <input
          type="text"
          placeholder="Search for a class..."
          value={search}
          onChange={this.handleSearch}
          className="w-full p-2 mb-4 text-black rounded"
        />

        <div className="space-y-2 pt-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Class
                key={course.classId}
                name={course.name}
                classId={course.classId}
                onClick={() => alert(`Selected ${course.name}`)}
              />
            ))
          ) : (
            <p className="text-gray-400">No results found</p>
          )}
        </div>
      </div>
    );
  }
}

export default CourseCatalog;
