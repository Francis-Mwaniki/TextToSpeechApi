const say = require('say');

function generateSpeech(text, voice, speed, outputFile) {
    return new Promise((resolve, reject) => {
        say.speak(text, voice, speed, (err) => {
            if (err) {
                reject(err);
            } else {
                if (outputFile) {
                    // Export spoken audio to a WAV file if outputFile is provided
                    say.export(text, voice, speed, outputFile, (exportErr) => {
                        if (exportErr) {
                            reject(exportErr);
                        } else {
                            resolve('Text has been saved to ' + outputFile);
                        }
                    });
                } else {
                    resolve('Speech generated successfully!');
                }
            }
        });
    });
}

module.exports = generateSpeech;
