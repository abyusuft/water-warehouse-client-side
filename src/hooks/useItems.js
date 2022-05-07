import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `https://infinite-chamber-05389.herokuapp.com/items`
        // const url = `http://localhost:5000/items`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [items])

    return [items, setItems];
}

export default useItems;