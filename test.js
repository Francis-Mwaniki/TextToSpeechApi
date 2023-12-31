const generateSpeech = require('./index'); // Adjust the path accordingly

async function testSpeechGeneration() {
    try {
        const outputFilePath = 'output';
        const text = 'Hello francis, this is a test';
        const result = await generateSpeech(text, outputFilePath);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

testSpeechGeneration();
