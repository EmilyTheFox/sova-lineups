import React from 'react';

function VideoPlayer(props: {
    url: string,
    className?: string,
    muted?: boolean,
    loop?: boolean,
    playing?: boolean,
    playsInline?: boolean,
    controls?: boolean,
    style?: React.CSSProperties
}) {

    return (
        <div className={props.className} style={props.style}>
            <video src={props.url} style={{ width: "100%", height: "100%" }} preload="auto" muted={props.muted} loop={props.loop} autoPlay={props.playing} playsInline={props.playsInline} webkit-playsinline={props.playsInline} x5-playsinline={props.playsInline} controls={props.controls} ></video>
        </div>
    );
}

export default VideoPlayer;