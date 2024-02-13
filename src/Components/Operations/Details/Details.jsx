import { CgPlayListSearch } from "react-icons/cg";
const Details = ({ index, task }) => {
  const modalIds = `modal_${index}`;
  return (
    <div className="mx-2 flex items-center justify-center">
      <button
        className="btn btn-circle"
        key={index}
        onClick={() => {
          document.getElementById(modalIds).showModal();
        }}
      >
        <CgPlayListSearch size={30} />
      </button>
      <dialog id={modalIds} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box " >
          <h1 className="text-center  text-2xl font-bold my-5 underline decoration-double">
            Task Details
          </h1>
          <div className="text-start">
            <h3 className="font-bold text-lg">Task Name : {task.name}</h3>
            <p className="py-4 text-wrap overflow-hidden">Description : <span>{task.detail}</span></p>
            <h3 className="font-bold py-4">Priority : {task.priority}</h3>
            <h3 className="font-bold py-4">
              Status : {task.status ? "Completed" : "Not Completed"}
            </h3>
            <p className="font-bold py-4">Deadline : {task.startDate}</p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
