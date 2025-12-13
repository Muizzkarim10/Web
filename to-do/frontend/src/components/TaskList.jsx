import TaskItem from "./TaskItem";

function TaskList({ tasks, API, reload, onEdit }) {
  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    reload();
  };

  return (
    <>
      <h2>Tasks</h2>
      <div id="taskContainer">
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={deleteTask}
            onEdit={onEdit}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
