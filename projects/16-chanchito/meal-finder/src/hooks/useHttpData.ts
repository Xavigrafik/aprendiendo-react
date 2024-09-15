import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useHttpData<T>(url: string) {
    
    const [data, setData] = useState<T[]>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        let aborted = false
        if (!url) {
            return
        }

        const controller = new AbortController()
        const { signal } = controller
        setLoading(true)

        axios
            .get<{ meals: T[] }>(url, { signal })
            .then(({ data }) => {
                if (!aborted) {
                    if (data?.meals) {
                        setData(data.meals);
                    } else {
                        console.warn("Meals data is undefined");
                    }
                }
            })

            .catch((error) => {
                if (!aborted) {
                    console.error("Error fetching data:", error);
                }
            })
            .finally(() => {
                if (!aborted) {
                    setLoading(false)
                }
            })
            
        return () => {
            aborted = true
            controller.abort()
        }
        
    }, [url]);
    
    return { data, loading , setData, setLoading};
}
