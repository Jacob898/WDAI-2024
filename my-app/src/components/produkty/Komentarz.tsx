import {useState} from "react";

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

const Komentarz = ({id, body, postId, likes, user} : KomentarzProps) => {
    const [likeCount, setLikeCount]= useState(likes);

    return (
        <div
            style={{
                backgroundColor: "lightblue",
                border: "1px solid black",
                margin: "10px",
                borderRadius: "10px",
            }}
        >
            <p>
                <strong>PostID: </strong> {postId}
            </p>

            <p>
                <strong>Author: </strong>   {user.fullName} -  {user.username}
            </p>

            <p>{body}</p>

            <div>
                <button style={{margin: "3px"}} onClick={() => setLikeCount(likeCount + 1)}>👍</button>
                <button style={{margin: "3px"}} onClick={() => setLikeCount(likeCount - 1)}>👎</button>
                <span>Polubienia: {likeCount}</span>
            </div>

        </div>
    )
}

export default Komentarz;