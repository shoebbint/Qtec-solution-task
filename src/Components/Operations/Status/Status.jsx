import { useState } from "react";

const Status = ({ index, task }) => {
  const [isChecked, setIsChecked] = useState(task.status === 1); 
  const handleCheckboxChange = () => {
    const updatedStatus = isChecked ? 0 : 1; 
    setIsChecked(!isChecked); 
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks[index] = {
      ...task,
      status: updatedStatus
    };
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        className="toggle toggle-warning"
        checked={isChecked} 
        onChange={handleCheckboxChange} 
      />
    </div>
  );
};

export default Status;
