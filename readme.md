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
var tts = require('TextToSpeechApi');

tts.generateSpeech('hello world', function(err, speech) {
  if (err) {
    console.log(err);
  } else {
    console.log(speech);
  }
}      
```

### Test Demo

```bash
node test.js
```




