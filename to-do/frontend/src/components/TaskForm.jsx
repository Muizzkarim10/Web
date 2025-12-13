import { useState } from "react";

function TaskForm({ API, reload }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const addTask = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    await fetch(API, {
      method: "POST",
      body: formData,
    });

    setTitle("");
    setDescription("");
    setImage(null);
    reload();
  };

  return (
    <form id="taskForm" onSubmit={addTask}>
      <input
        type="text"
        placeholder="Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />

      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;