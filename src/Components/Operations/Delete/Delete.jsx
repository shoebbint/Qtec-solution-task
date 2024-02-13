import { MdDelete } from "react-icons/md";
import useTasksHook from "../../Hooks/useTasksHook";

const Delete = ({ index }) => {
    const { tasks, setTasks } = useTasksHook();

    const handleDelete = () => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        window.location.reload();
    };

    return (
        <div>
            <button
                onClick={handleDelete}
                className="btn btn-circle"
            >
                <MdDelete size={30} />
            </button>
        </div>
    );
};

export default Delete;
