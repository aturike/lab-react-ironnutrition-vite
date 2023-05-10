import { Input } from "antd";
import { useState } from "react";

function Form({ onSubmit }) {
  const [input, setinput] = useState({
    name: "",
    image: "",
    calories: "",
    servings: "",
  });

  const handleAddFood = (event) => {
    event.preventDefault();
    onSubmit(input);
    setinput({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  };

  const handleChange = (event) => {
    setinput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleAddFood}>
      <label>
        Name{" "}
        <Input name="name" value={input.name} onChange={handleChange}></Input>
      </label>
      <label>
        Image{" "}
        <Input name="image" value={input.image} onChange={handleChange}></Input>
      </label>
      <label>
        Calories{" "}
        <Input
          type="number"
          name="calories"
          value={input.calories}
          onChange={handleChange}
        ></Input>
      </label>
      <label>
        Servings{" "}
        <Input
          type="number"
          name="servings"
          value={input.servings}
          onChange={handleChange}
        ></Input>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
