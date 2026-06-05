import { ICountListContent } from '../types/count-list-types';
export declare const isTabbed: (content: ICountListContent | ICountListContent[]) => content is ICountListContent[];
export declare const isDropdown: (toggleType?: "tabs" | "dropdown") => boolean;
export declare const validateLink: (url: string) => boolean;
export declare const validateLinks: (content: ICountListContent) => boolean;
export declare const shouldShowNoContentMessage: (content: ICountListContent) => boolean;
