export function convertSRTtoVTT(srtText) {
    return "WEBVTT\n\n" + srtText
        .replace(/\r+/g, '')
        .replace(/^\s+|\s+$/g, '')
        .replace(/(\d+)\n(\d{2}:\d{2}:\d{2}),(\d{3}) --> (\d{2}:\d{2}:\d{2}),(\d{3})/g,
            '$2.$3 --> $4.$5');
}
