import React from "react";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currVal, setCurrVal] = useState();

  const handlleAddClick = () => {
    setTodoList([...(todoList || []), currVal]);
    setCurrVal("");
    console.log(todoList);
  };

  const handleDeleteClick = (index) => {
    const filteredList = todoList.filter((_, i)=>i!==index);
    setTodoList(filteredList);
  }

  return (
    <>
      <h1 className="m-4 text-center text-4xl">Todo-List</h1>
      <div className="m-4 mt-10 flex justify-center">
        <input
          type="text"
          className="border-2 border-black rounded-sm mr-4 p-2 w-1/4 bg-blue-300"
          value={currVal}
          onChange={(e) => setCurrVal(e.target.value)}
        />
        <button
          className="border-2 border-transparent bg-blue-700 text-white rounded-md p-2"
          onClick={handlleAddClick}
        >
          Add Item
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h1>Items....</h1>
        {todoList.length === 0 ? (
          <h1>Add Some Items in List....</h1>
        ) : (
          todoList.map((item, index) => (
            <>
              <div className="border-transparent border-black p-3 m-4 w-1/4 flex justify-between bg-pink-400 rounded-xl">
                <p>{item}</p>
                <button className="bg-red-600 p-1 rounded-lg" onClick={()=>handleDeleteClick(index)}>
                  delete
                </button>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
}

export default App;
