import "./App.css";
import { useState } from "react";
import { Comments } from "src/components/Comments";
import { Header } from "src/components/Header";

function App() {
    const [ commentsCount, setCommentsCount ] = useState<number>(267);
    const [ likesCount, setLikesCount ] = useState(8632);

    return (
        <div className="app">
            <Header commentsCount={commentsCount} likesCount={likesCount} />
            <hr />
            <Comments setCommentsCount={setCommentsCount} setLikesCount={setLikesCount} />
        </div>
    );
}

export default App;
