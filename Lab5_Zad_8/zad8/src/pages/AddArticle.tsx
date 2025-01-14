import {useState} from "react";
import {useNavigate} from "react-router-dom";

interface article {
    id: number;
    title: string;
    content: string;
}

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleAddArticle = () => {
        const articlesList : article[] = JSON.parse(
            localStorage.getItem("articlesList") || "[]"
        )

        const newArticle : article = {
            id : articlesList.length ? articlesList[articlesList.length-1].id + 1 : 1,
            title,
            content,
        }

        localStorage.setItem("articlesList", JSON.stringify([...articlesList, newArticle]));
        navigate("/blog");
    }

    return (
        <div className="outer-div">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleAddArticle() }}>
                <div>
                    <label>Tytuł:</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
                </div>
                <div>
                    <label>Treść arytkułu:</label>
                    <textarea onChange={(e) => setContent(e.target.value)} value={content} required />
                </div>

                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
}

export default AddArticle;