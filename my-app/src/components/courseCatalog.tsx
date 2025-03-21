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
      { name: "COMP_SCI 215", classId: "3" },
      { name: "COMP_SCI 216", classId: "4" },
      { name: "COMP_SCI 217", classId: "5" },
      { name: "COMP_SCI 218", classId: "6" },
      { name: "COMP_SCI 219", classId: "7" },
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
      <div className="flex-1 h-screen text-white p-6 border-l border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Course Catalog</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for a class..."
          value={search}
          onChange={this.handleSearch}
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
        />

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 min-h-[300px]">
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
