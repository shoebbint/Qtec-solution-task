
import Operations from "../Operations/Operations";
import useTasksHook from "../Hooks/useTasksHook";
import Status from "../Operations/Status/Status";

const TaskList = ({ selectedPriority }) => {
  const { tasks, setTasks } = useTasksHook();
  console.log(selectedPriority)

  return (
    <div>
      <div className=" sm:py-8 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <div className=" p-2">
          <div
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
          </div>
        </div>
        {tasks.map((task, index) => (
          <div key={index} className=" p-2">
            <div className="flex flex-wrap  w-full card lg:card-side bg-base-100 shadow-xl ">
              <tr className="card-body flex  flex-col lg:flex-row justify-between  item-center">
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{task.name}</div>
                    </div>
                  </div>
                </td>
                <td className="badge badge-secondary badge-outline p-5">
                  {task.priority}
                  <br />
                </td>
                <td><Status index={index} task={task}></Status></td>
                <td><Operations index={index} task={task}></Operations></td>

              </tr>

              {/* <div className="card-actions lg:justify-end justify-center">
                    {" "}
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
