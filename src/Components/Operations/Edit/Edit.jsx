import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaEdit } from "react-icons/fa";

const Edit = ({ index, task }) => {
  const [editedTask, setEditedTask] = useState(task);
  const [startDate, setStartDate] = useState(new Date());
  const modalId = `my_modal_${index}`;
//handling Inputdata change
  const handleNameChange = (e) => {
    setEditedTask({ ...editedTask, name: e.target.value });
  };

  const handleDetailChange = (e) => {
    setEditedTask({ ...editedTask, detail: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setEditedTask({ ...editedTask, priority: e.target.value });
  };
  //handling save and update
  const handleSave = (event) => {
    event.preventDefault();
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    existingTasks[index] = editedTask; 
    localStorage.setItem("tasks", JSON.stringify(existingTasks));
    document.getElementById(modalId).close();
    window.location.reload();
  };

  return (
    <div>
      <button
        key={index}
 
        onClick={() => {
          document.getElementById(modalId).showModal();
        }}
        className="btn btn-circle"
      >
        <FaEdit size={30}/>
      </button>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
          <form onSubmit={handleSave} action="" method="post">
            <div>
              <label className="label">
                <span className="text-base label-text">Task Name</span>
              </label>
              <input
                type="text"
                value={editedTask.name} 
                onChange={handleNameChange}
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
                value={editedTask.detail} 
                onChange={handleDetailChange}
                required
                className="textarea textarea-info w-full"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">
                  <span className="text-base label-text">Deadline</span>
                </label>
                
                <DatePicker
                  value={editedTask.startDate} 
                  className="input input-bordered input-info w-full"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Priority</span>
                </label>
                <select
                  value={editedTask.priority} 
                  onChange={handlePriorityChange}
                  required
                  className="select select-info w-full"
                >
                  <option value={"high"}>High</option>
                  <option value={"medium"}>Medium</option>
                  <option value={"low"}>Low</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <button type="submit" className="btn btn-success mx-auto mt-10">
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Edit;
