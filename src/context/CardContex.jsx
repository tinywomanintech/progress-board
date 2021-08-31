import React, { createContext } from 'react';

const dataList = [
  {
    id: 0,
    title: 'Todo',
    cards: [
      {
        timeId: 0,
        listNumber: 0,
        taskText: 'default task card 1',
      },
      {
        timeId: 1,
        listNumber: 0,
        taskText: 'default task card 2',
      },
    ],
  },
  {
    id: 1,
    title: 'On Progress',
    cards: [
      {
        timeId: 2,
        listNumber: 1,
        taskText: 'default task card 3',
      },
      {
        timeId: 3,
        listNumber: 1,
        taskText: 'default task card 4',
      },
    ],
  },
  {
    id: 2,
    title: 'Done',
    cards: [
      {
        timeId: 4,
        listNumber: 2,
        taskText: 'default task card 5',
      },
      {
        timeId: 5,
        listNumber: 2,
        taskText: 'default task card 6',
      },
    ],
  },
];

export const CardContext = React.createContext(dataList);
