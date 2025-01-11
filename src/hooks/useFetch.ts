import { useState, useEffect, useCallback } from "react";

type UseFetchState<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
};

function useFetch<T>(fetchFunction: () => Promise<T>) {
    const [state, setState] = useState<UseFetchState<T>>({
        data: null,
        loading: false,
        error: null,
    });

    const [trigger, setTrigger] = useState(0);

    const fetchData = useCallback(async () => {
        setState({ data: null, loading: true, error: null });
        try {
            const data = await fetchFunction();
            setState({ data, loading: false, error: null });
        } catch (error) {
            setState({ data: null, loading: false, error: error as Error });
        }
    }, [fetchFunction]);

    useEffect(() => {
        fetchData();
    }, [fetchData, trigger]);

    const refetch = useCallback(() => {
        setTrigger(prev => prev + 1);
    }, []);

    return { ...state, refetch };
}

export default useFetch;
