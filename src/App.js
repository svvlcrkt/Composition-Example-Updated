import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  const expenses = [
    { 
      id:"e1", 
      title: "Car Insurance1", 
      amount: 294.67, 
      date: new Date(2021, 2 ,28) 
    },
    { 
      id:"e2", 
      title: "Car Insurance2", 
      amount: 24.67, 
      date: new Date(2021, 5 ,4) 
    },
    { 
      id:"e2", 
      title: "Car Insurance3", 
      amount: 2943.67, 
      date: new Date(2021, 3 ,1) 
    },
  ];

  return React.createElement('div', {},React.createElement('h2',{}, "Let's get started!"),
  React.createElement(Expenses,{ items:expenses }, ) );
  //createElements take 3 arguments:
  //first argument is created element,
  //second argument is object configuration (attributes)
  //third argument is content between opening and closing tags 
  //third argument is not one argument, it is list of arguments

  // return (
  //    <div>
  //      <h2>Let's get started!</h2>
  //      <Expenses items={expenses}/>
  //    </div>
  // );
}

export default App;
