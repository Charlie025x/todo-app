import Icon from "./assets/images/icon-sun.svg";
function App() {
  return (
    <>
      <div className="min-h-lvh bg-slate-800 bg-bg-desktop-light bg-contain bg-no-repeat pt-1">
        <div className="mx-auto mt-10 w-[min(100%-2rem,45rem)] bg-slate-500 bg-opacity-50 text-slate-400">
          <div className="flex items-center justify-between text-white">
            <h1 className="text-4xl font-bold tracking-[1rem]">TODO</h1>
            <span className="">
              <Icon />
            </span>
          </div>
          <div className="input-div mb-10 grid grid-cols-[auto_1fr] items-center border-black bg-red-400 py-4">
            <div className="mx-4 h-6 w-6 rounded-full border-2 bg-black"></div>
            <input type="text" placeholder="Create a new todo..." />
          </div>
          <div className="todos grid grid-cols-[auto_1fr] items-center border-black bg-pink-400 py-4">
            <div className="mx-4 h-6 w-6 rounded-full border-2 bg-black"></div>
            <input type="text" placeholder="Create a new todo..." />
          </div>
          <div className="footer flex justify-between px-6 py-4">
            <div className="count">0 items left</div>
            <div className="filters">All Active Completed</div>
            <div className="clear">Clear Completed</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
