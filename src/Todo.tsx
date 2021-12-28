import * as React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./modules/todo/actions";

const Todo: React.FunctionComponent = () => {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();
  const updateTodo = React.useCallback(
    (todo: string) => {
      dispatch(addTodo({ todo }));
    },
    [dispatch]
  );

  const handleTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleTodoFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTodo(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleTodoFormSubmit}>
        <input
          type="text"
          placeholder="todo input"
          value={value}
          onChange={handleTodoInputChange}
        />
        <button type="submit">등록</button>
      </form>
    </>
  );
};

export default Todo;
