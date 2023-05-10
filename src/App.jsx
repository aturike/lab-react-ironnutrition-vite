import foodsData from "./foods.json";
import "./App.css";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import { Row, Col, Button } from "antd";
import Form from "./components/Form";
import SearchBar from "./components/SearchBar";

function App() {
  const [foods, setfoods] = useState(foodsData);
  const [searchInput, setsearchInput] = useState("");
  const [isShowForm, setisShowForm] = useState(false);

  const handleSubmit = (inputFood) => {
    setfoods([...foods, inputFood]);
  };

  const handleDelete = (deletefoodname) => {
    setfoods(foods.filter((food) => food.name !== deletefoodname));
  };

  return (
    <div className="App">
      {isShowForm && <Form onSubmit={handleSubmit} />}
      <Button
        onClick={() => {
          setisShowForm(!isShowForm);
        }}
      >
        {isShowForm ? "Hide Form" : "Add new Food"}
      </Button>
      <SearchBar searchInput={searchInput} setsearchInput={setsearchInput} />
      <h2>Food list</h2>
      <Row>
        {foods
          .map((food) => (
            <Col key={food.name} name={food.name} span={8}>
              <FoodBox food={food} handleDelete={handleDelete} />
            </Col>
          ))
          .filter((food) =>
            food.props.name.toLowerCase().includes(searchInput.toLowerCase())
          )}
      </Row>
      {foods.length === 0 && <div>Oops no more data to show</div>}
    </div>
  );
}

export default App;
