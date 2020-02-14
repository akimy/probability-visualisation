import {HtmlInputString} from '../types';

export const castInputStringToNumber = (input: HtmlInputString): number => {
    const number = parseInt(input, 10);

    return number * 0.01;
}
