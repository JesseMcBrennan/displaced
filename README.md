# Represent

### By <a href="https://github.com/JesseMcBrennan">Jesse McFadden</a>

### The Project

Represent is a visual interface to the ProPublica API. The interface allows a user to interact with the API to search for the congressional representative for the respective user's zip code. It uses the DistrictZip NPM package to pull congressional districts by zip code.

Represent was built using React, Redux, and Router. The testing suite was built using Jest and Enzyme.

## User Interaction 

A user selects the chamber they wish to access by the top drop down. Once either the house or senate is selected, the user selects their respective state, followed by the zip code. Once all three selections are made, the user can use the submit button to fetch the data. 

The following page contains basic information about the representative such as their name, phone number, party, and address. If NYT Data is present, the top stories related to the representative appear on the right hand side. If the user would like to reach out to the representative personally, they can do so using the "Submit a message" button. This button pulls up an input form allowing the user to add their name, message, and signature. Upon substance of the input form, the user has the ability to print or email the PDF.

### UI

<img src="https://github.com/JesseMcBrennan/represented/blob/master/screencast-localhost-3000-2018.09.18-18-51-36.gif">

### Up-and-running

In order to get this application you must npm install and npm run. 
