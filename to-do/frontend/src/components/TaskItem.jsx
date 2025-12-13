function TaskItem({ task, onDelete, onEdit }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.imageUrl && <img src={task.imageUrl} alt={task.title} />}
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
