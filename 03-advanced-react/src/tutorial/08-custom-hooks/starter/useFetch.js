import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url)
                const data = await resp.json()
                if(resp.ok){
                    setData(data)
                    setIsLoading(false)
                }
            }catch(error){
                setIsError(error)
                setIsLoading(false)
            }
            
        }
        fetchData()
    }, [])


    return {isLoading, isError, data}
}

export default useFetch;