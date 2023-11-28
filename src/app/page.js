import Image from "next/image";
import styles from "./page.module.css";
import DeleteIcon from "./Components/DeleteIcon";
import { connectDB } from "../../libs/connect";
import Link from "next/link";
import PlusIcon from "./Components/PlusIcon";
import Delete from "./Components/Delete";
import EditIcon from "./Components/EditIcon";
import Todo from "../../Models/TodoModel";

async function getTodos() {
  try {
    connectDB();
    const todos = await Todo.find({});
    if (!todos) {
      throw new Error("Please add your todo list");
    }
    return todos;
  } catch (error) {
    console.log("Failed to fetch todos");
  }
}

export default async function Home() {
  const data = await getTodos();
  // console.log(data);

  return (
    <main>
      <div className="wrapper">
        <div className="container">
          <h1>Todo App</h1>
          <span className="plusbtn">
            <Link href="/addTodo">
              <PlusIcon className="icon plus" />
            </Link>
          </span>
          <div className="todo-list">
            {data &&
              data.length > 0 &&
              data.map((todo) => (
                <div className="list" key={todo._id}>
                  <li>{todo.description}</li>
                  <div className="iconWrapper">
                    <Delete id={todo._id.toString()} />
                    <span>
                      <Link
                        href={{
                          pathname: `/update/${todo._id}`,
                          query: { description: todo.description },
                        }}
                      >
                        <EditIcon className="icon" />
                      </Link>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
