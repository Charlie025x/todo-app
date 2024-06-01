import Icon from "./assets/images/icon-sun.svg";
function App() {
  return (
    <>
      <div className="min-h-lvh bg-slate-800 bg-bg-desktop-light bg-contain bg-no-repeat pt-1">
        <div className="mx-auto mt-10 w-[min(100%-2rem,45rem)] bg-slate-500">
          <div className="flex items-center justify-between text-white">
            <h1 className="text-4xl font-bold tracking-[1rem]">TODO</h1>
            <span>
              <Icon />
            </span>
          </div>
        </div>
        <div className="list"></div>
      </div>
    </>
  );
}

export default App;
