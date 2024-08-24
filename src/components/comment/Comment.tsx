import "../../styles/Comment.css";
import avatar from "src/assets/avatars/obi-wan.jpeg";
import { TextBlock } from "src/components/comment/TextBlock";
import { TopBlock } from "src/components/comment/TopBlock";
import { IAuthor } from "src/types/IAuthor";
import { IComment } from "src/types/IComment";

const getAuthor = (id: number): IAuthor =>
{
    return {
        id,
        name: "Obi-Wan Kenobi",
        avatar,
    }
}

export const Comment = (props: IComment): React.ReactElement =>
{
    // TODO Заглушка
    const author = getAuthor(props.author);

    return <div className="comment">
        <TopBlock author={author} date={props.created} likesCount={props.likes} />
        <TextBlock text={props.text} />
    </div>;
};