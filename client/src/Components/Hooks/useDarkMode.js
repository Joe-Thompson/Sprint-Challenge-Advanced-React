import { useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("");
    useEffect(() => {
        const body = window.document.body;
        if (darkMode) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};