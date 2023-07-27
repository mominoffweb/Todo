import { RiBallPenFill } from "react-icons/ri";
import { RiSpam3Fill } from "react-icons/ri";
import { useState } from "react";

function Head() {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todo")));

  const [title, setTitle] = useState(" ");
  const [isEdit, setIsEdit] = useState(false);

  const [editId, setEditId] = useState(0);

  function submit(e) {
    e.preventDefault();
    if (title) {
      if (isEdit) {
        setTodo(
          todo.map((p) => {
            if (p.id == editId) {
              return (p.title = title), p.id;
            } else {
              return p;
            }
          })
        );
        setTodo(todo);
        setIsEdit(false);
        setIsEdit(0);
      } else {
        if (!todo) {
          setTodo([]);
          let contex = [];
          contex.push({
            id: Date.now(),
            title: title,
          });
          setTodo(contex);
        } else {
          let contex = todo;
          contex.push({
            id: Date.now(),
            title: title,
          });
        }
      }
      localStorage.setItem("todo", JSON.stringify(todo));
      setTitle("  ");
    }
  }

  function edit(title, id) {
    setIsEdit(true);
    setTitle(title);
    setEditId(id);
  }

  function detel(id) {
    console.log(id);
    let filter = [];
    todo.map((p) => {
      if (p.id !== id) {
        console.log(p);
        filter.push(p);
      }
    });

    setTodo(filter);
    localStorage.setItem("todo", JSON.stringify(todo));
  }

  return (
    <div>
      <form className="grid grid-cols-[1fr_auto] gap-5" onSubmit={submit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" rounded-lg outline-slate-800 bg-slate-700  p-6 "
        />
        <button className=" p-5 font-bold bg-slate-700 rounded-md ">
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
      <div className={`${todo && "bg-slate-700"} p-3 mt-5    rounded-lg`}>
        {todo?.map((todoo) => (
          <p
            key={todoo.id}
            className=" mb-3 hover:shadow-xl  bg-slate-600 transition  text-2xl flex justify-between items-center text-white rounded-lg "
          >
            {" "}
            <span>{todoo.title}</span>{" "}
            <span className=" flex gap-4">
              <RiBallPenFill
                className=" cursor-pointer"
                onClick={() => edit(todoo.title, todoo.id)}
              />{" "}
              <RiSpam3Fill
                className=" cursor-pointer"
                onClick={() => detel(todoo.id)}
              />{" "}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Head;
