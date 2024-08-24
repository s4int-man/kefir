import React from "react";
import { Avatar } from "src/components/Avatar";
import { IAuthor } from "src/types/IAuthor";
import likeFill from "../../assets/like-fill.svg";
import likeHollow from "../../assets/like-hollow.svg";

export const TopBlock = (props: { author: IAuthor, date: string, likesCount: number }): React.ReactElement =>
{
    const [ hasSelfLike, setHasSelfLike ] = React.useState(false);
    const [ likesCount, setLikesCount ] = React.useState(props.likesCount);

    const toggleSelfLike = React.useCallback((): void =>
    {
        setHasSelfLike(hasLike =>
        {
            setLikesCount(!hasLike ? props.likesCount + 1 : props.likesCount);
            return !hasLike;
        });
    }, [ props.likesCount ]);

    return <div className="top-block">
        <div className="top-left-block">
            <Avatar {...props.author} />
            <div className="name-and-date">
                <div className="name">{props.author.name}</div>
                <div className="date">{new Date(props.date).toLocaleString()}</div>
            </div>
        </div>
        <div className="top-right-block">
            <img src={hasSelfLike ? likeFill : likeHollow} alt="" onClick={toggleSelfLike} />
            {likesCount}
        </div>
    </div>;
};