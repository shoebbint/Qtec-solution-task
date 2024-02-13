import Operations from "../Operations/Operations";
import useTasksHook from "../Hooks/useTasksHook";
import Status from "../Operations/Status/Status";
import { useState, useEffect } from "react";

const TaskList = ({ selectedPriority }) => {
  //setting colur dynamically
  function getPriorityClass(priority) {
    switch (priority) {
      case "high":
        return "badge-error";
      case "medium":
        return "badge-warning";
      case "low":
        return "badge-info";
      default:
        return "badge-secondary";
    }
  }

  const { tasks, setTasks } = useTasksHook();
  const [selectPriority, setSelectPriority] = useState("all");

  useEffect(() => {
    setSelectPriority(selectedPriority);
  }, [selectedPriority]);

  const filteredTasks = tasks.filter((task) => {
    if (selectPriority === "all" || selectPriority === "") return true;
    return task.priority === selectPriority;
  });

  return (
    <div>
      <div className="sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <div className="p-2">
          <table
            style={{ backgroundColor: "#C4C2E9" }}
            className="flex flex-wrap  w-full card lg:card-side shadow-2xl "
          >
            <thead className="card-body">
              <tr className="flex flex-col lg:flex-row justify-between text-bold text-xl">
                <th>Name</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Operation</th>
              </tr>
            </thead>
          </table>
        </div>
        {filteredTasks.length === 0 ? (
          <div className="text-center text-gray-500 mt-4 font-bold">
            <h1>No tasks added</h1>
          </div>
        ) : (
          filteredTasks.map((task, index) => (
            <div key={index} className="p-2">
              <table className="flex justify-between">
                <tbody className="flex flex-wrap w-full card lg:card-side bg-base-100 shadow-xl">
                  <tr className="card-body flex flex-col lg:flex-row justify-between items-center mx-auto">
                    <td className="flex items-center justify-center">
                      <div className="flex items-center gap-3">
                        <div className="font-bold">{task.name}</div>
                      </div>
                    </td>
                    <td
                      className={`badge font-bold flex items-center justify-center p-5 ${getPriorityClass(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                      <br />
                    </td>
                    <td className="flex items-center justify-center">
                      <Status index={index} task={task}></Status>
                    </td>
                    <td>
                      <Operations index={index} task={task}></Operations>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
