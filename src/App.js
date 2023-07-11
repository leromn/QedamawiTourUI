import CardTemplate from "./cardtemplate";
import Gallery from "./gallery";
import Middle from "./middle";
import Services from "./services";
import "./styles.css";
import Top from "./top.jsx";
import Location from "./location.jsx";
export default function App() {
  return (
    <div className="App">
      <Top />
      <Middle />
      <Services />
      <Gallery />
      <Location />
    </div>
  );
}
