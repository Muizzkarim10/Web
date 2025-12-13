import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditPopup from "./components/EditPopup";

function App() {
  const API = "http://localhost:5000/api/tasks";

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null); // null = popup hidden

  const loadTasks = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const reload = () => loadTasks();

  const openEditPopup = (task) => setEditTask(task);
  const closeEditPopup = () => setEditTask(null);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm API={API} reload={reload} />
      <TaskList
        tasks={tasks}
        API={API}
        reload={reload}
        onEdit={openEditPopup}
      />
      {editTask && (
        <EditPopup
          API={API}
          task={editTask}
          reload={reload}
          close={closeEditPopup}
        />
      )}
    </div>
  );
}

export default App;
