
import { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import ReactDatePicker from "react-datepicker";

const Edit = ({ index, task }) => {
    const [formData, setFormData] = useState({
        taskName: task.name || '',
        taskDetails: task.details || '',
        deadline: task.deadline || new Date(),
        priority: task.priority || 'high'
      });
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //   };
  return (
    <div>
      <button
        onClick={(index,task) => document.getElementById("my_modal_5").showModal()}
        className="btn btn-info"
      >
        X
      </button>
      <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                    <form  action="" method="post">
        <div>
          <label className="label">
            <span className="text-base label-text">Task Name</span>
          </label>
          <input
            type="text"
            value={formData.taskName}
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
            value={formData.taskDetails}
            className="textarea textarea-info w-full"
            placeholder="Bio"
          ></textarea>
        </div>

        <div className=" grid grid-cols-2 gap-4">
          <div>
            <label className="label">
              <span className="text-base label-text">Deadline</span>
            </label>
            <ReactDatePicker
              className="input input-bordered input-info  w-full "
              selected={formData.deadline}

            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Priority</span>
            </label>
            <select
              required
              value={formData.priority}
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
                  </dialog>
    </div>
  );
};
Edit.propTypes = {
    index: PropTypes.number.isRequired,
    task: PropTypes.any.isRequired, // Add PropTypes validation for task
  };

export default Edit;
