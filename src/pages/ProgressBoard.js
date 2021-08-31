import React, { useState, useEffect, useContext } from 'react';
import '../pages/ProgressBoard.scss';
import { CardContext } from '../context/CardContex';
import KanbanList from '../components/KanbanList';

export default function ProgressBoard() {
  const dataList = useContext(CardContext);

  const [lists, setLists] = useState(dataList);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));

    //if there's a localStorage to be had grab it otherwise set state
    if (localStorage.getItem('list')) {
      const rawLS = localStorage.getItem('lists');
      const parsedLS = JSON.parse(rawLS);
      setLists(parsedLS);
    }
  }, []);

  const rawLS = localStorage.getItem('lists');
  const parsedLS = JSON.parse(rawLS);
  console.log('parsed', parsedLS);

  //add some new task cards
  const addTaskCard = (taskText, listNumber) => {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf(),
    };

    parsedLS[listNumber].cards.push(newTask);

    //sync state and localStorage
    setLists(parsedLS);
    localStorage.setItem('list', JSON.stringify(parsedLS));
  };

  // update task cards
  const updateTaskCard = (taskText, listNumber, i) => {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    const newTask = {
      taskText,
      listNumber,
      timeId: new Date().valueOf(),
    };
    console.log('update task', parsedLS[listNumber].cards[i].taskText);

    parsedLS[listNumber].card[i].taskText = newTask.taskText;

    //sync state and localStorage
    setLists(parsedLS);
    localStorage.setItem('list', JSON.stringify(parsedLS));
  };

  const removeTaskCard = (e, index) => {
    // get the drop task card from localStorage
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    const cardsArray = parsedLS[index].cards;
    // console.log("car arr", cardsArray);
    const indexOfCard = cardsArray.findIndex((card) => card.timeId == index);

    parsedLS[index].cards.splice(indexOfCard, 1);
    // console.log(parsedLS[index])

    // sync the state and localStorage
    setLists(parsedLS);
    localStorage.setItem('lists', JSON.stringify(parsedLS));
  };

  // get id of item being dragged and list where it's coming from
  const onDragStart = (e, fromList) => {
    // console.log('what a drag');
    const dragInfo = {
      taskId: e.currentTarget.id,
      fromList: fromList,
    };

    localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, listNum) => {
    // get the drop task card from localStorage
    const droppedTask = localStorage.getItem('dragInfo');
    const parsedDragInfo = JSON.parse(droppedTask);
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    // get task cards array, get rid of moved card, and put a new card
    // in the list where it was dropped
    const cardsArray = parsedLS[parsedDragInfo.fromList].cards;
    const taskCard = cardsArray.find((card) => card.timeId == parsedDragInfo.taskId);
    const indexOfCard = cardsArray.findIndex((card) => card.timeId == parsedDragInfo.taskId);

    parsedLS[parsedDragInfo.fromList].cards.splice(indexOfCard, 1);
    parsedLS[listNum].cards.push({
      ...taskCard,
      listNumber: parseInt(listNum),
    });

    // sync the state and localStorage
    setLists(parsedLS);
    localStorage.setItem('lists', JSON.stringify(parsedLS));
  };

  // update title
  const updateTitleCard = (titleText, listNumber, i) => {
    const rawLS = localStorage.getItem('lists');
    const parsedLS = JSON.parse(rawLS);

    const newTask = {
      titleText,
      listNumber,
      timeId: new Date().valueOf(),
    };

    // parsedLS[listNumber].cards.push(newTask);
    // console.log("update title", parsedLS[listNumber].title);

    parsedLS[listNumber].title = newTask.titleText;

    // sync state and localStorage
    setLists(parsedLS);
    localStorage.setItem('lists', JSON.stringify(parsedLS));
  };

  return (
    <div className="kanban-board">
      <div style={{ display: 'flex', justifyContent: 'center', color: '#1A9DD8', height: '100%' }}>
        <h1>Progress Board</h1>
      </div>
      <div className="list-section">
        <ul className="lists">
          {lists?.map((list, i) => {
            return (
              <li key={i} className="list-wrapper">
                <KanbanList
                  {...list}
                  onAdd={(taskText, listNumber) => addTaskCard(taskText, listNumber)}
                  onUpdateTask={(taskText, listNumber, i) => updateTaskCard(taskText, listNumber, i)}
                  onUpdateTitle={(taskText, listNumber, i) => updateTitleCard(taskText, listNumber, i)}
                  onRemove={(e) => removeTaskCard(e, i)}
                  onDragStart={(e) => onDragStart(e, `${list.id}`)}
                  onDragOver={(e) => onDragOver(e, `${list.id}`)}
                  onDrop={(e) => onDrop(e, `${list.id}`)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
