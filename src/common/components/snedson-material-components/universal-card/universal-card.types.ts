import { IDataTagProps } from '../data-tag/data-tag.types';
import { IButtonProps } from '../custom-button/custom-button.types';

export interface IUniversalCardProps {
    title?: string;
    icon?: string;
    content?: string;
    isOnAir?: boolean;
    contentEmoji?: unknown[];
    dataTags?: IDataTagProps[];
    buttons?: IButtonProps[];
    type: 'elevated' | 'elevated-secondary' | 'outlined' | 'filled';
}
