import  { useState, useEffect } from 'react';

const useTasksHook = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    return { tasks, setTasks }; 
};

export default useTasksHook;
