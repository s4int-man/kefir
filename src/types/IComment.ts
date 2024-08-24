export interface IComment
{
    id: number;
    created: string;
    text: string;
    author: number;
    parent: IComment | null;
    likes: number;
}