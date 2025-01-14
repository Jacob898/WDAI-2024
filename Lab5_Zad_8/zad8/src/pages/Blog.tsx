import {Link} from "react-router-dom";

interface article {
    id: number;
    title: string;
    content: string;
}


const Blog = () => {

    const articlesList : article[] = JSON.parse(
        localStorage.getItem("articlesList") || "[]"
    )


    return (
        <div className="outer-div">
            <h1>Lista artykułów</h1>
            <ul>
                {articlesList.map((article) => (
                    <li key={article.id}>
                        <Link to={`/article/${article.id}`}>
                            {article.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <button>
                <Link to={"/dodaj"}>Dodaj artykuł</Link>
            </button>

        </div>
    )
}

export default Blog;