Use case for getSubscribedConversations. Twilio conversations. 

getSubscribedConversations ->  http://media.twiliocdn.com/sdk/js/conversations/releases/2.1.0/docs/classes/Client.html#getSubscribedConversations 
Which  Returns Promise<Paginator<Conversation>>
 
Doing a get message to each conversation for lastmessage -> http://media.twiliocdn.com/sdk/js/conversations/releases/2.1.0/docs/classes/Conversation.html#getMessages
 
Returns another Promise<Paginator<Message>>