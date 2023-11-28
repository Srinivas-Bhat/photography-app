// import { addTodo } from "../serverActions/actions";

import Todo from "../../../Models/TodoModel";
import { redirect } from "next/navigation";
import { connectDB } from "../../../libs/connect";

const page = () => {
  const addTodo = async (formData) => {
    "use server";
    try {
      // console.log("addTodo", formData.get("description"), formData);
      const description = formData.get("description");
      console.log("add todo", description);
      connectDB();
      const newTodo = await Todo.create({ description });
      console.log("add todo", newTodo);
      redirect("/")
    } catch (error) {
      return { message: "Error while creating new Todo" };
    }
  };

  return (
    <div className="addTodo">
      <form action={addTodo}>
        <input
          type="text"
          name="description"
          className="form-input"
          placeholder="Enter a new Todo"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default page;
