// Used when generating any kind of tokens
const twilioAccountSid = '';
const twilioApiKey = '';
const twilioApiSecret = '';
const Twilio = require('twilio');
// Used specifically for creating Chat tokens
const serviceSid = '';
const identity = ''; // specify identity

let AccessToken = Twilio.jwt.AccessToken;
// Create a "grant" which enables a client to use Chat as a given user,
// on a given device
const chatGrant = new AccessToken.ChatGrant({
  serviceSid: serviceSid,
});

// Create an access token which we will sign and return to the client,
// containing the grant we just created
const token = new AccessToken(
  twilioAccountSid,
  twilioApiKey,
  twilioApiSecret,
  {identity: identity}
);

token.addGrant(chatGrant);

// Serialize the token to a JWT string
//console.log(token.toJwt());


const { Client } = require('@twilio/conversations');
const cclient = new Client(token.toJwt());


const accountSid = '';
const authToken = '';
const client = require('twilio')(accountSid, authToken);
const co = client.conversations;

cclient.getSubscribedConversations().then((page)=> {

    page.items.forEach(c => 
        c.getMessages(100,c.lastMessage?.index, 'forward').then((msgPage) => 
            {
                console.log(msgPage.items.forEach(m => 
                    console.log(m.body)
                    ));
            }));
  
});

