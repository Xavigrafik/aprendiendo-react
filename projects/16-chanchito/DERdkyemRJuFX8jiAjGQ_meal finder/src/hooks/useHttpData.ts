import axios from "axios";
import { useEffect, useState } from "react";

export default <T>(url?: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let aborted = false;
    if (!url) {
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    axios
      .get<T>(url, { signal })
      .then(({ data }) => {
        if (!aborted) {
          setData(data);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        if (!aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
      aborted = true;
    };
  }, [url]);

  const search = (url: string) => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, search };
};
