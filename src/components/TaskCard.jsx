import React from 'react';

export default function TaskCard(props) {
  return (
    <div className="add-task-card" draggable="true" id={[props.timeId]} onDragStart={props.onDragStart}>
      {props.taskText}
    </div>
  );
}
