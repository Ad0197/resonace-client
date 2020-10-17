import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../redux/furniture/furniture.actions";
import { isLoading } from "../redux/furniture/furniture.selector";

function useFetch<T>(promise: Promise<any>) {
  const [error, setError] = useState(false);
  const loading = useSelector(isLoading);
  const [data, setData] = useState<T | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      dispatch(startLoading());
      try {
        setData(await promise);
        dispatch(endLoading());
      } catch (error) {
        setError(true);
      }
    };
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return { loading, error, data };
}

export default useFetch;
