import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="cards">
      <Card
        imgURL="https://images.pexels.com/photos/3532550/pexels-photo-3532550.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        heading="Tibet"
        btnText="Visit Tibet"
        linkURL="https://en.wikipedia.org/wiki/Tibet"
      />
      <Card
        imgURL="https://images.pexels.com/photos/2522676/pexels-photo-2522676.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        heading="England"
        btnText="Visit England"
        linkURL="https://en.wikipedia.org/wiki/England"
      />
      <Card
        imgURL="https://images.pexels.com/photos/2519832/pexels-photo-2519832.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        heading="Brazil"
        btnText="Visit Brazil"
        linkURL="https://en.wikipedia.org/wiki/Brazil"
      />
    </div>
  );
}

export default App;
