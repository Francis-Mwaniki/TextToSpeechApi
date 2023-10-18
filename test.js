const generateSpeech = require('./index'); // Adjust the path accordingly

// Example usage of the generateSpeech function
async function TextToSpeechApi() {
    try {
        // Test 1: Generate speech without saving to a file
        console.log('Test 1: Generating speech without saving to a file...');
        await generateSpeech('Hello, this is a test without saving to a file.');
        console.log('Test 1 completed successfully.');

        // Test 2: Generate speech and save it to a file
        console.log('Test 2: Generating speech and saving it to a file...');
        await generateSpeech('Hello, this is a test with saving to a file.');
        console.log('Test 2 completed successfully.');
    } catch (error) {
        console.error('Error:', error);
    }
}

// export default TextToSpeechApi;
TextToSpeechApi();


