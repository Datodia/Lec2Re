import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import { cards } from "./data";

function App() {
  return (
    <div>
      {cards.map(el => (
        <Card
          imgSrc={el.src}
          key={el.id} 
          age={el.age}
          name={el.name}
          bg={el.bg}
          desc={el.desc}
        />
      ))}
    </div>
  );
}

export default App;
