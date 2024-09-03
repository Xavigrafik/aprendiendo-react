import { useEffect, useState } from 'react';


export default function useHttpData<T>(url:string) {

    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(() => {

        const controller = new AbortController();
        const { signal } = controller;
        
        async function hook() {
            
            setLoading(true);
            try {
                const res = await fetch(url, { signal });
                const data: T[] = await res.json();
                setData(data);
                setError(undefined)
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        }

        hook();

        return () => controller.abort();

    }, []);

    const addData = (element: T) => {
        const initialData = [...data]
        setData([{ id: 0, ...element }, ...data])
        
        
     }
    
    return { data, loading, error, addData };
}
