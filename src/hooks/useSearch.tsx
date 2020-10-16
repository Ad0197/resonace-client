import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoading } from "../redux/furniture/furniture.selector";

function useSearch(actions: Function) {
  const [typing, setTyping] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>("");
  const [fnTrigger, setFnTrigger] = useState<NodeJS.Timeout>();
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);

  const isTyping = () => setTyping(true);
  const isNotTyping = () => setTyping(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isTyping();
    if (fnTrigger) clearTimeout(fnTrigger);
    event.preventDefault();
    const text = event.target.value;
    setFnTrigger(
      setTimeout(() => {
        dispatch(actions(text));
        isNotTyping();
      }, 500)
    );
    setValue(text);
  };
  return { typing, value, handleChange, loading };
}

export default useSearch;
