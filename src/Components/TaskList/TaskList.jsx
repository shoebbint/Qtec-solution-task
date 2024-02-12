import { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div>
      <div className=" sm:py-8  sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        {tasks.map((task, index) => (
          <div key={index} className="flex flex-wrap -m-2">
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
                    <button className="btn btn-primary">Listen</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
