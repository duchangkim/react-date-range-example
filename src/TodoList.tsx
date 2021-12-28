import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./modules";
import { deleteTodo } from "./modules/todo/actions";

const TodoList: React.FunctionComponent = () => {
  const todoList = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();
  const removeTodo = React.useCallback(
    () => dispatch(deleteTodo()),
    [dispatch]
  );

  if (todoList.length === 0) return <h2>등록된 todo가 없다</h2>;

  return (
    <>
      <span onClick={removeTodo}>[X]</span>
      {todoList.map((todo, index) => (
        <li key={index}>
          <p>{todo}</p>
        </li>
      ))}
    </>
  );
};

export default TodoList;
