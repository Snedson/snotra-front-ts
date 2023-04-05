import { IDataTagProps } from '../data-tag/data-tag.types';
import { IButtonProps } from '../custom-button/custom-button.types';

export interface IUniversalCardProps {
    title?: string;
    icon?: unknown;
    content?: string;
    contentEmoji?: unknown[];
    dataTags: IDataTagProps[];
    buttons: IButtonProps[];
}
