"use server";
import { revalidatePath } from "next/cache";
import { connectDB } from "../../../libs/connect";
import Todo from "../../../Models/TodoModel";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function addTodo(formData) {
  try {
    console.log("addTodo", formData.get("description"));
    const description = formData.get("description");
    connectDB();
    const newTodo = await Todo.create({ description });
    // redirect("/");
    return NextResponse.redirect("/");
  } catch (error) {
    return { message: "Error while creating new Todo" };
  }
}

export async function updateTodo(formData) {
  try {
    const id = formData.get("id");
    console.log("update", formData);
    const description = formData.get("description");
    connectDB();
    let data = await Todo.findByIdAndUpdate({ _id: id }, { description }, { new: true });
    redirect("/");
  } catch (error) {
    return { message: "Error while updating Todo" };
  }
}

export async function deleteTodo(formData) {
  try {
    const id = formData.get("id");
    connectDB();
    let a = await Todo.findByIdAndDelete({ _id: id });
    revalidatePath("/");
  } catch (error) {
    return { message: "Error while delete Todo" };
  }
}
