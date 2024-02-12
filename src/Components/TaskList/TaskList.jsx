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
                <div className="card-body flex ">
                  <tr className="flex flex-col lg:flex-row justify-between">
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="/tailwind-css-component-profile-2@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Zemlak, Daniel and Leannon
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span>
                    </td>
                    <td>Purple</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>

                  {/* <div className="card-actions lg:justify-end justify-center">
                    {" "}
                    <button className="btn btn-primary">Listen</button>
                  </div> */}
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
