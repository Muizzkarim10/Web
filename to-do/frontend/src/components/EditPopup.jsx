import { useState } from "react";

function EditPopup({ task, API, reload, close }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [image, setImage] = useState(null);

  const saveEdit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    try {
      const res = await fetch(`${API}/${task._id}`, {
        method: "PUT",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        alert("Update failed: " + err.error);
        return;
      }

      reload();
      close();
    } catch (err) {
      alert("Error updating task: " + err.message);
    }
  };

  return (
    <div id="editPopup" style={{ display: "block" }}>
      <h3>Edit Task</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={saveEdit}>Save Changes</button>
      <button onClick={close}>Cancel</button>
    </div>
  );
}

export default EditPopup;
