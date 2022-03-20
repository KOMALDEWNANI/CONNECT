## Frameworks and Libraries Used: 

1. React.js         (https://reactjs.org/)
2. Node.js          (https://nodejs.org/en/)
3. Express.js      (https://expressjs.com/)
4. Bootstrap4      (https://getbootstrap.com/ )
5. React-router-dom (https://v5.reactrouter.com/web/guides/quick-start)
6. Twilio Node helper library

## API used to implement OTP sending functionality:
    Twilio API (https://www.twilio.com/docs)


## React Components:

 Navbar - Navigation component comprising of 2 tabs namely, Contact and Sent, displaying a list of contacts and sent messages respectively.

 Contacts - Component made of several ContactsItem components.

 ContactsItem - A card component with props:- name and phone number of a contact. On Clicking the component, the ContactState (global state using Context API) is changed to the passed name and phone number props as well as endpoint ‘/info’ is hit to display information of the contact. useContext() hook is used to avoid prop drilling.

 Info - (‘/info endpoint) A card component displaying the image, name, and phone number of the selected contact. The selected contact is identified using ContactContext.  The card also has the button ‘Send Message’, on clicking it a random 6 digit OTP is generated and the ContactState ‘otp’ is changed to the generated number and the ‘/message’ endpoint is hit.

Message - (‘/message endpoint) A card displaying a message having OTP and a button ‘Send OTP’ to send the OTP to the phone number of the contact. On clicking the button sendOTP() function is called. This function updates the SentState and calls the API by making a POST  request to our server ‘https://mycontactsproject.herokuapp.com/api/messages’ by passing the message and the phone number of the contact as headers. Error handling from the server has been taken care of.

Sent - A table component having 3 columns namely, name, time, and otp. The rows in the table are populated by looping through the SentState.



## Contexts Created:
   
ContactContext - A context to the ContactState comprising of name, phone, and otp.
SentContext - A context to the SentState comprising of name, time, and otpSent.

Routing is used to implement the single-page application framework. The routes are as follows:

‘/’ - Displays a list of contacts by rendering the Contact component along with Navbar. Navbar is fixed and the contents of the body change by switching between various components.

‘/info’ - Renders Info component to show info of the selected contact.

‘/sent’ - Renders Sent component to show a table of Sent messages in decreasing order of time.

‘/message’ - Renders Message Component to display OTP.

## Server structure:

When a POST request is made to ‘https://mycontactsproject.herokuapp.com/api/messages’, Twilio API is called up to create the messages and error handling has been taken care of.
The server is deployed on Heroku.


## GOOD PRACTICES: 
1. Used environment variables to secure the credentials.
2. Implemented single-page application framework.
3. Used comments for internal documentation.
4. Written clean code and used Prettier Document Formatter.
5. Maintained a good project structure.
6. Deployed frontend over Netlify and server on Heroku.
7. Built a responsive website.
8. Error handling at all the suspicious parts of the code has been taken care of.


## Other References used:
1. For getting the fake contacts:- https://github.com/wellingtoncosta/fake-contacts-json
2. YouTube

