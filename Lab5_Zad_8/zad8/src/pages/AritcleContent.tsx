import {Link, useParams} from "react-router-dom";

interface article {
    id: number;
    title: string;
    content: string;
}

const ArticleContent = () => {
    const {id} = useParams<{id: string}>();

    const articlesList: article[] = JSON.parse(localStorage.getItem("articlesList") || "[]");

    const article= articlesList.find((article) => article.id === parseInt(id || "0",10));

    if(!article) {
        return <h1>Artykuł nie został odnaleziony</h1>
    }

    return (
        <div className="outer-div">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <button>
                <Link to="/blog">Powrót do bloga</Link>
            </button>

        </div>
    )

}

export default ArticleContent;