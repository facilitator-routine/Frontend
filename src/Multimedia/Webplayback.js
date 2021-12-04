import React, {useEffect, useState} from 'react';
import '../App.css';
import MoActiveLevel from "./NoActiveLevel";
import ActiveLevel from "./ActiveLevel";

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

function WebPlayback(props: { token: * }) {
        const [is_paused, setPaused] = useState(false);
        const [is_active, setActive] = useState(false);
        const [player, setPlayer] = useState(undefined);
        const [current_track, setTrack] = useState(track);

        useEffect(() => {

            const script = document.createElement("script");
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.async = true;

            document.body.appendChild(script);

            window.onSpotifyWebPlaybackSDKReady = () => {

                const player = new window.Spotify.Player({
                    name: 'Facilitator Routine',
                    getOAuthToken: cb => { cb(props.token); },
                    volume: 0.5
                });

                setPlayer(player);

                player.addListener('ready', ({ device_id }) => {
                    console.log('Ready with Device ID', device_id);
                });

                player.addListener('not_ready', ({ device_id }) => {
                    console.log('Device ID has gone offline', device_id);
                });

                player.addListener('player_state_changed', ( state => {

                    if (!state) {
                        return;
                    }
                    console.log('soy un state', state);
                    setTrack(state.track_window.current_track);
                    setPaused(state.paused);

                    player.getCurrentState().then( state => {
                        (!state)? setActive(false) : setActive(true)
                    });
                }));
                player.connect();
            };
        }, []);

        if (!is_active) {
            return (
                <MoActiveLevel/>
            )
        } else {
            return (
                   <ActiveLevel current_track={current_track} player={player} is_paused={is_paused}/>
            );
        }
}

export default WebPlayback