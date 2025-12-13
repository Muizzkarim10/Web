function TaskItem({ task, onDelete, onEdit, API, reload }) {
  const toggleStatus = async () => {
    await fetch(`${API}/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    });

    reload();
  };

  return (
    <div>
      <h3
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          opacity: task.completed ? 0.6 : 1,
        }}
      >
        {task.title}
      </h3>

      <p>{task.description}</p>

      <p>Status: {task.completed ? "✅ Completed" : "⏳ Pending"}</p>

      {task.imageUrl && <img src={task.imageUrl} alt={task.title} />}

      <button onClick={toggleStatus}>
        {task.completed ? "Mark Pending" : "Mark Complete"}
      </button>

      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
