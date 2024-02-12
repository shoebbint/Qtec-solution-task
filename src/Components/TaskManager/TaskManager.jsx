import AddTask from "../AddTask-form/AddTask";
import "./TaskManager.css";
const TaskManager = () => {
  return (
    <div>
      <div>
        <div className="bg">
          <div className="  h-96 py-20 pb-36 flex justify-center items-center ">
            <div className="text-sm breadcrumbs text-center ">
              <h1 className="text-5xl my-5">Task-Manager</h1>
              <ul>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Documents
                  </a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-2 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Add Document
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="-mt-52  ">
          <section className="text-gray-600 body-font bg-transparent ">
            <div className="container px-5 py-24 mx-auto flex flex-col ">
              <div className="lg:w-4/6 mx-auto ">
                <div
                  data-aos="fade-down"
                  className="rounded-lg h-64 overflow-hidden shadow-lg"
                >
                  <img
                    alt="content"
                    className="object-contain object-center  w-full mx-auto"
                    src={
                      "https://img.freepik.com/free-vector/flat-hand-drawn-time-management-concept_23-2148860802.jpg?size=626&ext=jpg&ga=GA1.2.938604286.1679821186&semt=ais"
                    }
                  />
                </div>
                <div className="flex justify-items-center  pt-5">
  
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-success mx-auto"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Add Task
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
<AddTask></AddTask>
                    </div>
                  </dialog>
                </div>
                <div className="">
                  <div className=" sm:py-8  sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2  w-full">
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                          <figure>
                            {/* <img className="w-36" src={image} alt="Album" /> */}
                          </figure>
                          <div className="card-body flex ">
                            <div className="flex flex-col lg:flex-row justify-between  ">
                              <div>
                                <h2 className="card-title mb-4 ">
                                  Microservices with <br /> Node JS and React
                                </h2>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Author</h2>
                                <p className="text-start">Soyeb bin taher</p>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Price</h2>
                                <p className="text-start">$58</p>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Validity</h2>
                                <p className="text-start">Lifetime</p>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Progress</h2>
                                <progress
                                  className="items-start progress progress-error w-40"
                                  value="70"
                                  max="100"
                                ></progress>
                              </div>
                            </div>
                            <div className="card-actions lg:justify-end justify-center">
                              {" "}
                              <button className="btn btn-primary">
                                Listen
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2  w-full">
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                          <figure>
                            {/* <img className="w-36" src={image} alt="Album" /> */}
                          </figure>
                          <div className="card-body flex ">
                            <div className="flex flex-col lg:flex-row justify-between  ">
                              <div>
                                <h2 className="card-title mb-4">
                                  Microservices with <br /> Node JS and React
                                </h2>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Author</h2>
                                <p className="text-start">Soyeb bin taher</p>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Price</h2>
                                <p className="text-start">$58</p>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Validity</h2>
                                <p className="text-start">Lifetime</p>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Progress</h2>
                                <progress
                                  className="items-start progress progress-error w-40"
                                  value="70"
                                  max="100"
                                ></progress>
                              </div>
                            </div>
                            <div className="card-actions lg:justify-end justify-center">
                              <button className="btn btn-primary">
                                Listen
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2  w-full">
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                          <figure>
                            {/* <img className="w-36" src={image} alt="Album" /> */}
                          </figure>
                          <div className="card-body flex ">
                            <div className="flex flex-col lg:flex-row justify-between  ">
                              <div>
                                <h2 className="card-title mb-4">
                                  Microservices with <br /> Node JS and React
                                </h2>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Author</h2>
                                <p className="text-start">Soyeb bin taher</p>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Price</h2>
                                <p className="text-start">$58</p>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Validity</h2>
                                <p className="text-start">Lifetime</p>
                              </div>
                              <div>
                                <h2 className="card-title mb-4">Progress</h2>
                                <progress
                                  className="items-start progress progress-error w-40"
                                  value="70"
                                  max="100"
                                ></progress>
                              </div>
                            </div>
                            <div className="card-actions lg:justify-end justify-center">
                              <button className="btn btn-primary">
                                Listen
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
