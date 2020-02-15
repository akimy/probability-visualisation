// @ts-nocheck
import {range, mean} from 'ramda';
import {HtmlInputString} from '../types';

const castStringToNumber = (val: string): number => parseInt(val, 10);

/**
 * '70' => 70% => 0.7 probability
 */
const castInputStringToProbabilityNumber = (val: HtmlInputString): number => {
    return castStringToNumber(val) * 0.01;
}

const computeCoordinates = (probabilityRaw: string, iterationsRaw: string) => {
    let [probability, iterations] = [castInputStringToProbabilityNumber(probabilityRaw), castStringToNumber(iterationsRaw)];

    if (probability > 1) {
        probability = 1;
    }

    const totalActions: number[] = [];

    return range(1, iterations).reduce((acc, currentIteration, index): number[] => {
        const isCurrentIterationSuccess: boolean = Math.random() <= probability;
        const currentSuccessRate: 0 | 100 = isCurrentIterationSuccess ? 100 : 0;

        totalActions.push(currentSuccessRate);

        /**
         * mean(3, 7, 8) === 6 
         */
        acc.push(mean(totalActions));

        return acc;
    }, []);
}

export default computeCoordinates;
