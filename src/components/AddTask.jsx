import React from 'react';

export default function AddTask() {
  return (
    <form>
      <input className="input-task" type="text" aria-label="update-task" />
      <div>
        <button className="update-button">Add Task</button>
        <button className="update-button">Cancel</button>
      </div>
    </form>
  );
}
