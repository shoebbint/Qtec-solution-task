import { useRef, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const AddTask = () => {
  //use ref hooks for getting values
  const taskNameRef = useRef("");
  const taskDetailRef = useRef("");
  const taskPriorityRef = useRef("");
  const [startDate, setStartDate] = useState(new Date());

  //create new task
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = taskNameRef.current.value;
    const detail = taskDetailRef.current.value;
    const priority = taskPriorityRef.current.value;
    const status = 0;
    const data = { name, detail, startDate, priority, status };
    console.log(data);

    // set data to local storage
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTask = [...existingTasks, data];
    localStorage.setItem("tasks", JSON.stringify(newTask));

    taskNameRef.current.value = " ";
    taskDetailRef.current.value = " ";
    taskPriorityRef.current.value = " ";
    setStartDate("");
    //    localStorage.setItem('data',data);
    window.location.reload();
  };

  return (
    <div className="p-3">
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
      <form onSubmit={handleSubmit} action="" method="post">
        <div>
          <label className="label">
            <span className="text-base label-text">Task Name</span>
          </label>
          <input
            ref={taskNameRef}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full "
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Task Details</span>
          </label>
          <textarea
            required
            ref={taskDetailRef}
            className="textarea textarea-info w-full"
            placeholder="Bio"
          ></textarea>
        </div>

        <div className=" grid grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Deadline</span>
            </label>
            <DatePicker
              className="input input-bordered input-info  w-full "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Priority</span>
            </label>
            <select
              required
              ref={taskPriorityRef}
              className="select select-info w-full"
            >
              <option value={"high"}>High</option>
              <option value={"medium"}>Medium</option>
              <option value={"low"}>Low</option>
            </select>
          </div>
        </div>
        <div className="flex">
          <button className="btn btn-success mx-auto mt-10">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
