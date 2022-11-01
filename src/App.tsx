import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './model';


// let name:string = "John";
// let age:number = 30;
// let isMarried:boolean = true;
// let someValue: unknown //any

// //defining a type, in this case an Object
// type Person = {
//   name: string;
//   age: number;
//   isMarried: boolean;
// }

// const person: Person = {
//   name: "John",
//   age: 30,
//   isMarried: true
// }

// let people: Person[] = [
//   person,
//   {
//     name: "Jane",
//     age: 25,
//     isMarried: false
//   }
// ]


// let printName: (name: string) => void;
// printName = (name: string) => {
//   console.log(name);
// }
// //or
// function printName2(name: string): void {
//   console.log(name);
// }

// //when you have no idea what the type is going to return of if even going to return anything
// // let printName: (name: string) => never;



// //we can use interfaces to define a type
// interface PersonInterface {
//   name: string;
//   age: number;
//   isMarried: boolean;
// }

// const person2: PersonInterface = {
//   name: "John",
//   age: 30,
//   isMarried: true
// }

// //includes properties of person in employee and adds more
// interface employee extends PersonInterface {
//   jobTitle: string;
// }

// //or

// // type employee = PersonInterface & {
// //   jobTitle: string;
// // }

// //or

// // interface employee extends Person {
// //   jobTitle: string;
// // }




//function of type React Function Component
const App: React.FC = () => {
  const [todo, setTodo] = useState<string | number>("") //string or number
  const [todos, setTodos] = useState<Todo[]>([]) //array of todos

  console.log(todo);

  return (
    <div className="App">
     <span className="heading">Task Manager</span>
    <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
