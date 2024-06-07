import "./App.css";
import Card from "./Card";
function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card name="samir" btntext="click" />
      <Card name="amir" btntext="click" />
      <Card name="anisha" />
    </>
  );
}

export default App;
