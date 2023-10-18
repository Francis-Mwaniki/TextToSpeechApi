# TextToSpeechApi

TextToSpeechApi is a Node.js package that provides a simple API for converting text to speech using the `festival` text-to-speech synthesis tool.

## Installation

Before you can use this package, you need to ensure that the `festival` text-to-speech synthesis tool is installed on your system. Follow the instructions below based on your operating system:

### Linux (Debian-based systems, including Ubuntu):

```bash
sudo apt-get update
sudo apt-get install festival
```

### Mac OS X:

```bash
brew install festival
```

### Windows:
```bash
 git clone git://github.com/Francis-Mwaniki/TextToSpeechApi.git
```

## Usage

```javascript
const TextToSpeech = require('text-to-speech-converter')

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
```
### How it  works

The `generateSpeech` function takes in two parameters:

- `text`: The text to be converted to speech.
- `outputFilePath`: The path to the output file where the speech will be saved.

The function returns a promise that resolves to the path of the output file.


### Test Demo

```bash
node test.js
```




