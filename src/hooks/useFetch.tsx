import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function useFetch<T>(
  promise: Promise<any>,
  callback?: (error: Boolean, data?: any) => void
) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        const resp = await promise;
        setLoading(true);
        setData(await resp);
        setLoading(false);
        if (callback) callback(error, resp);
      } catch (error) {
        setError(true);
        setLoading(false);
        if (callback) callback(error, data);
      }
    };
    loadData();

    return () => {}; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return { loading, error, data };
}

export default useFetch;
