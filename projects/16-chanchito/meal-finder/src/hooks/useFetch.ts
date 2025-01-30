import axios from 'axios'
import { useState } from 'react'

export default <T>() => {
  
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T>()

    
    const fetch = (url:string) => {
        const loadingDelay = 1600; // DELAY PARA OBSERVAR EL LOADING
        setLoading(true);
        axios
            .get(url)
            .then(({ data }) => { setData(data.meals[0]) })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, loadingDelay);
            })
    }

    return {loading, data, fetch}
};
    