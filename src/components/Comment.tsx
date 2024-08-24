import { Avatar } from "src/components/Avatar";
import { IAuthor } from "src/types/IAuthor";

export const Comment = (props: { author: IAuthor, text: string }): React.ReactElement =>
{
    return <div className="comment">
        <Avatar {...props.author} />
    </div>;
};