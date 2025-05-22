import React, { useRef, useState } from "react";
import { convertSRTtoVTT } from "../utils/srtToVtt";

const VideoPlayer = () => {
    const videoRef = useRef(null);

    const [videoURL, setVideoURL] = useState("/sample.mp4");
    const [subtitles, setSubtitles] = useState([]);
    const [activeTrack, setActiveTrack] = useState(null);

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setVideoURL(url);
        }
    };

    const handleSubtitleUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            const content = reader.result;
            let vttBlob;

            if (file.name.endsWith(".srt")) {
                const vttText = convertSRTtoVTT(content);
                vttBlob = new Blob([vttText], { type: "text/vtt" });
            } else {
                vttBlob = new Blob([content], { type: "text/vtt" });
            }

            const url = URL.createObjectURL(vttBlob);
            const langCode = `lang${subtitles.length}`;

            setSubtitles((prev) => [
                ...prev,
                { url, label: file.name, lang: langCode }
            ]);
        };

        reader.readAsText(file);
    };

    const handleTrackChange = (lang) => {
        setActiveTrack(lang);
        const tracks = videoRef.current.textTracks;
        for (let i = 0; i < tracks.length; i++) {
            tracks[i].mode = tracks[i].language === lang ? "showing" : "disabled";
        }
    };

    return (
        <div className="player-container">
            <h2>BFF Ondertitel Uploader en Viewer</h2>

            <div className="input-group">
                <label>📹 Video uploaden (MP4):</label>
                <input type="file" accept="video/mp4" onChange={handleVideoUpload} />
            </div>

            <div className="input-group">
                <label>📝 Ondertitels uploaden (.srt of .vtt):</label>
                <input type="file" accept=".vtt,.srt" onChange={handleSubtitleUpload} />
            </div>

            {subtitles.length > 0 && (
                <div className="input-group">
                    <label>🌍 Kies ondertitelspoor:</label>
                    <select onChange={(e) => handleTrackChange(e.target.value)}>
                        <option value="">-- Geen --</option>
                        {subtitles.map((sub, idx) => (
                            <option key={idx} value={sub.lang}>
                                {sub.label}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <video ref={videoRef} controls width="720" className="video-box">
                <source src={videoURL} type="video/mp4" />
                {subtitles.map((sub, idx) => (
                    <track
                        key={idx}
                        src={sub.url}
                        kind="subtitles"
                        srcLang={sub.lang}
                        label={sub.label}
                        default={idx === 0}
                    />
                ))}
                Je browser ondersteunt deze video-tag niet.
            </video>
        </div>
    );
};

export default VideoPlayer;
