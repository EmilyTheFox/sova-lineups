import * as React from 'react';

export declare type Marker = {
    top: Number;
    left: Number;
};
export declare type MarkerComponentProps = {
    top: Number;
    left: Number;
    itemNumber: Number;
    id: Number;
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