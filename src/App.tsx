import { useState } from "react";
import Icon from "./assets/images/icon-sun.svg";
function App() {
  const [item, setItem] = useState([
    { text: "Item 1", completed: false },
    { text: "Item 2", completed: false },
    { text: "Item 3", completed: false },
  ]);
  return (
    <>
      <div className="min-h-lvh bg-slate-800 bg-bg-desktop-light bg-contain bg-no-repeat pt-1">
        <div className="mx-auto mt-10 w-[min(100%-2rem,45rem)] bg-slate-200 bg-opacity-50 text-slate-400">
          <div className="flex items-center justify-between text-white">
            <h1 className="text-4xl font-bold tracking-[1rem]">TODO</h1>
            <span className="">
              <Icon />
            </span>
          </div>
          <div className="input-div mb-10 grid grid-cols-[auto_1fr] items-center rounded-md border-black bg-red-400 py-4">
            <div className="mx-4 h-6 w-6 rounded-full border-2 bg-black"></div>
            <input type="text" placeholder="Create a new todo..." />
          </div>

          <div className="list-wrapper overflow-hidden rounded-t-md text-white">
            <div className="todos grid grid-cols-[auto_1fr] items-center border-b border-black bg-pink-400 py-4">
              <div className="mx-4 h-6 w-6 rounded-full border-2 bg-black"></div>
              <p>todo list item</p>
            </div>

            <div className="todos grid grid-cols-[auto_1fr] items-center border-b border-black bg-pink-400 py-4">
              <div className="mx-4 h-6 w-6 rounded-full border-2 bg-black"></div>
              <p>todo list item</p>
            </div>
          </div>
          <div className="footer flex justify-between rounded-b-md bg-slate-600 px-6 py-4">
            <div className="count">0 items left</div>
            <div className="clear">Clear Completed</div>
          </div>
          <div className="filters mt-5 flex items-center justify-center gap-4 rounded-md bg-slate-600 py-2">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
