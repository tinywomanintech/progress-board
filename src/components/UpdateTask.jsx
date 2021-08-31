import React from 'react';

export default function UpdateTask() {
  return (
    <form>
      <input className="input-task" type="text" aria-label="update-task" />
      <div>
        <button className="update-button">Update</button>
        <button className="update-button">Close</button>
      </div>
    </form>
  );
}
