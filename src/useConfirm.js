import ReactDOM from "react-dom";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (onCancel && typeof onCancel !== "function") return;
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWord = () => console.log("Deleting");
  const abort = () => console.log("Aborting");
  const confirmDelete = useConfirm("Are you sure", deleteWord, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
