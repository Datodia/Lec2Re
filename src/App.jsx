import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import { cards } from "./data";

function App() {
  return (
    <div>
      <img src="/assets/dog1.webp" width={100} alt="" />
      <img src="/assets/dog2.webp" width={100} alt="" />
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
