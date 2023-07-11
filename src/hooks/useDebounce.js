import { useEffect,useState } from "react";


export default function useDebounce(value, delay = 300){
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(
        () => {
            const debounceHandler = setTimeout(() => {
                setDebounceValue(value);
            },delay);

            return () => {
                clearTimeout(debounceHandler);
            };
        },[value,delay]
    );

    return debounceValue;
}
