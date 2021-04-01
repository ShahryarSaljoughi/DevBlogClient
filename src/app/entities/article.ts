import { Tag } from './tag';

export class Article
{
    contentJson: string;
    contentHtml: string;
    contentText: string
    title: string;
    creationDateTimeOffset: string;
    id: string;
    description: string;
    tags: Tag[];
}