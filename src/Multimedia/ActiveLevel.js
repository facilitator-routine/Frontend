import React from "react";
import {Button, Container, Level} from "react-bulma-components";

const ActiveLevel = ({current_track, player, is_paused}) =>{
    return (
        <Container className="player-container">
            <Level>
                <Level.Item className="player-image">
                    <img src={current_track.album.images[0].url}  alt="" />
                </Level.Item>
                <Level.Item>
                    <div className="now-playing__name">{current_track.name}</div>
                </Level.Item>
                <Level.Item>
                    <div className="now-playing__artist">{current_track.artists[0].name}</div>
                </Level.Item>
                <Level.Item>
                    <Button className="btn-spotify" onClick={() => { player.previousTrack() }} >
                        &lt;&lt;
                    </Button>

                    <Button className="btn-spotify" onClick={() => { player.togglePlay() }} >
                        { is_paused ? "PLAY" : "PAUSE" }
                    </Button>

                    <Button className="btn-spotify" onClick={() => { player.nextTrack() }} >
                        &gt;&gt;
                    </Button>
                </Level.Item>
            </Level>
        </Container>
    )
}

export default ActiveLevel