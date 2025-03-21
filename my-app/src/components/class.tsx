import { Component } from "react";

interface ClassButtonProps {
    courseId: string;
    name: string;
    onClick: () => void;
}

class Class extends Component<ClassButtonProps> {
  render() {
    const { name, courseId, onClick } = this.props;

    return (
        <button className="w-full text-xl bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition mb-4 max-h-20" onClick={onClick}>
            {courseId}
            <p className="text-xs">{name}</p>
        </button>
    );
  }
}

export default Class;
