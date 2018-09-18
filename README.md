# Hack the North - Orion Data

Orion Data is a video consumption platform with a twist, users have the option to turn on their webcam allowing our AI to differentiate their emotions and provide accurate video recommendations based on if the video was enjoyed.

This platform also allows content creators to better understand the people who viewed their video and gives them hard data on which parts of their videos they need to improve to become better at their craft. 

This is a short video demo of the capabilities of the Orion Data platform created by Alex Gordienko and Sid Gupta. 

[![Video](https://i.ytimg.com/vi/9DR7a-3mZPk/hqdefault.jpg)](https://youtu.be/9DR7a-3mZPk)

## Getting Started
This project was written entirely in React with no backend. Getting this up and running on your machine is easy but you will need a few API keys to access all of the functionality. 

### Prerequisites
* [Microsoft Face API](https://docs.microsoft.com/en-us/azure/cognitive-services/face/quickstarts/javascript) - Used for emotion recognition on faces. Make sure to use the link above, MS home website advertises an emotion API but that appears to be old code, Emotion is part of the Face API. Once you have an API key, please plug it into line 105 of EmotionalAnalytics.js
* [YouTube Data API](https://developers.google.com/youtube/v3/) - YouTube's Data API was used to get videos and comments to make our app work similarly to YouTube for accessing videos. Once you get an API Key plug it into Line 60 in ConsumerView.js and Line 72 in CreatorView.
* [Clarif.ai](https://clarifai.com/models/demographics-image-recognition-model-c0c0ac362b03416da06ab3fa36fb58e3) - Used to generate demographics based on user's detected face. Plug API Key into Line 80 of EmotionalAnalytics.js
* [Firebase](https://firebase.google.com/) - Used the real-time database to store images taken from the webcam and used to generate emotion and demographic reports. Insert your API Key on Line 4 of Firebase.js.

### Installing
Once you get all the APIs set up launching the project is simple. Simply navgate to the project directory and install dependencies.

```
cd where/the/repo/is
npm install
npm start
```
This will start React and can be accessed on **localhost:3000**

### Built With

* [ReactJS](https://reactjs.org/) - The web framework used to make this an SPA
* [React Motion](https://github.com/chenglou/react-motion) - Package used to make sweet animations
* [Material-UI](https://material-ui.com/) - Material UI framework for react
* [Microsoft Face API](https://docs.microsoft.com/en-us/azure/cognitive-services/face/quickstarts/javascript) - Used for emotion recognition on faces. 
* [YouTube Data API](https://developers.google.com/youtube/v3/) - YouTube's Data API was used to get videos and comments to make our app work similarly to YouTube for accessing videos. 
* [Clarif.ai](https://clarifai.com/models/demographics-image-recognition-model-c0c0ac362b03416da06ab3fa36fb58e3) - Used to generate demographics based on user's detected face
* [Firebase](https://firebase.google.com/) - Used the real-time database to store images taken from the webcam and used to generate emotion and demographic reports

### Authors

* **Alex Gordienko** - *Initial work* - [Alex's Website](http://alexgordienko.com/), [Alex's GitHub](https://github.com/AlexGordienko)
* **Sid Gupta** - *Initial work* - [Sid's Website](http://sidgupta.tech/), [Sid's GitHub](https://github.com/gupta-sid)

### License

This project is licensed under the MIT License

