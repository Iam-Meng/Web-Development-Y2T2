import Card from "./components/Card.jsx";
import { ITEMS } from "./data.js";
import "./index.css";

function App() {
  return (
    <>
      <header>
        <h1>My Items</h1>
      </header>
      <div className="cards-view">
        <div className="cards-grid">
          {ITEMS.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
