export const TextBlock = (props: { text: string }): React.ReactElement =>
{
    return <div className="text-block">
        {props.text}
    </div>;
}