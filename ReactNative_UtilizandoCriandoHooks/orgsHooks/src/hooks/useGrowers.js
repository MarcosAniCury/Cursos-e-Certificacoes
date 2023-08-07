import { useEffect, useState } from "react";
import { loadingGrowers } from "../services/loadingData";

export default function useGrowers() {
    const [title, setTitle] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        const data = loadingGrowers();
        setTitle(data.title)
        setList(data.list)
    }, [])

    return [title, list]
}