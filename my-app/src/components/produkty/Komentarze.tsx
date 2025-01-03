import {useEffect, useState} from "react";
import Komentarz from "./Komentarz";

interface KomentarzProps {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: {
        id: number;
        username: string;
        fullName: string;
    }
}

const Komentarze = () => {
    const [komentarz, setKomentarz] = useState<KomentarzProps[]>([])

    useEffect(() => {
        fetch("https://dummyjson.com/comments")
        .then(res => res.json())
        .then(data => setKomentarz(data.comments))
            .then((Error) => console.error("Error fetching comments", Error))
    },[])

    return (
        <div>
            {komentarz.map(komentarz => (
                <Komentarz key={komentarz.id} {...komentarz} />
            ))
            }
        </div>
    )
}

export default Komentarze;