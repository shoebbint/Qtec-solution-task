
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaEdit } from "react-icons/fa";
const Edit = ({ index, task }) => {

  const [startDate, setStartDate] = useState(new Date());
  const modalId = `my_modal_${index}`;
  return (
    <div>
           
      <button

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
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              
            </form>
          </div>
          <form action="" method="post">
            <div>
              <label className="label">
                <span className="text-base label-text">Task Name</span>
              </label>
              <input
                type="text"
                value={task?.name}
       
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
              value={task?.detail}

                required
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
                value={task?.startDate}
              className="input input-bordered input-info  w-full "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Priority</span>
                </label>
                <select value={task?.priority}    required className="select select-info w-full">
                  <option value={"high"}>High</option>
                  <option value={"medium"}>Medium</option>
                  <option value={"low"}>Low</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <button className="btn btn-success mx-auto mt-10">
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
