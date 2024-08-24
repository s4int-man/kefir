import "../styles/Header.css";
import likeHollow from "../assets/like-hollow.svg";

export const Header = (props: { commentsCount: number, likesCount: number }): React.ReactElement =>
{
    return <div className="header">
        <div className="comments">{props.commentsCount} комментариев</div>
        <div className="likes">
            <img src={likeHollow} alt="" />
            {props.likesCount}
        </div>
    </div>;
}