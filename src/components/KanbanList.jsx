import React, { useContext } from 'react';
import TaskCard from './TaskCard';
import EditTitle from './EditTitle';
import UpdateTask from './UpdateTask';
import RemoveTask from './RemoveTask';
import AddTask from './AddTask';

export default function KanbanList(props) {
  const { cards, onDragStart, id, onUpdateTask, onRemove, onAdd, onUpdateTitle, onDragOver, title, onDrop } = props;
  return (
    <div>
      <h2 className={`title-list title-${id}`}>
        {title} {`(${cards.length})`}
        <EditTitle forNum={id} onUpdateTitle={onUpdateTitle} />
      </h2>
      <ul className="list" onDragOver={onDragOver} onDrop={onDrop}>
        {cards.map((card, i) => {
          return (
            <li key={i}>
              <TaskCard {...card} onDragStart={onDragStart} />

              <UpdateTask formNum={id} onUpdateTask={onUpdateTask} index={i} />

              <RemoveTask onRemove={onRemove} />
            </li>
          );
        })}

        <li className="list-wrapper">
          <AddTask forNum={id} onAdd={onAdd} />
        </li>
      </ul>
    </div>
  );
}
