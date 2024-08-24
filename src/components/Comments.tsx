import React from "react";
import { UploadMore } from "src/components/UploadMore";
import { IComment } from "src/types/IComment";
import { Comment } from "./comment/Comment";

export const Comments = (props: { setCommentsCount: (count: number) => void, setLikesCount: (count: number) => void }): React.ReactElement =>
{
    const [ comments, setComments ] = React.useState<IComment[]>([
        {
            id: 100,
            created: "2021-07-04T14:44:01.038111+00:00",
            text: "Hello there!",
            author: 1,
            parent: null,
            likes: 50,
        }
    ]);

    React.useEffect((): void =>
    {
        props.setCommentsCount(1);
    }, [ props ]);

    return <div className="comments">
        {
            comments.map((comment: IComment): React.ReactElement => <Comment key={comment.id} {...comment} />)
        }
        <UploadMore />
    </div>;
};