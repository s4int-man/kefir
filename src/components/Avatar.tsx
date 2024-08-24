import { IAuthor } from "src/types/IAuthor";

export const Avatar = (props: IAuthor): React.ReactElement =>
{
    return <div className="avatar">
        <img src={props.avatar} alt={props.name} className="avatar_img" />
    </div>;
};