import * as React from 'react';
import { Lineup } from '../../interfaces/Lineup';

export declare type Marker = {
    top: Number;
    left: Number;
    lineup: Lineup;
};
export declare type MarkerComponentProps = {
    top: Number;
    left: Number;
    itemNumber: Number;
    lineup: Lineup;
};
declare type Props = {
    src: string;
    markers: Array<Marker>;
    onAddMarker?: (marker: Marker) => void;
    markerComponent?: React.FC<MarkerComponentProps>;
    bufferLeft?: number;
    bufferTop?: number;
    alt?: string;
    extraClass?: string;
};
declare const ImageMarker: React.FC<Props>;
export default ImageMarker;