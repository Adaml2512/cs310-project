import { Component } from "react";

interface ClassButtonProps {
  name: string;
  classId: string;
  onClick: () => void;
}

class Class extends Component<ClassButtonProps> {
  render() {
    const { name, onClick } = this.props;

    return (
      <button
        className="w-full px-10 py-4 text-xl bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition mb-4"
        onClick={onClick}
      >
        {name}
      </button>
    );
  }
}

export default Class;
