import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { endLoading, startLoading } from "../redux/furniture/furniture.actions";
import { isLoading } from "../redux/furniture/furniture.selector";

function useFetch<T>(
  promise: Promise<any>,
  callback?: (error: Boolean, data?: any) => void
) {
  const [error, setError] = useState(false);
  const loading = useSelector(isLoading);
  // const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await promise;
        dispatch(startLoading());
        setData(await resp);
        dispatch(endLoading());
        if (callback) callback(error, resp);
      } catch (error) {
        setError(true);
        dispatch(endLoading());
        if (callback) callback(error, data);
      }
    };
    loadData();

    return () => {}; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return { loading, error, data };
}

export default useFetch;
