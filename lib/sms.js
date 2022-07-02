import twilio from 'twilio';
const accountSid = 'AC99dfeef1bb4bdef6d738cc313b22d362'
const authToken = 'b248e39ad118129e7269a1e75db9950f'
const client = twilio(accountSid, authToken)

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+18454426195',
     to: '+16475012335'
   })
  .then(message => console.log(message.sid));

export default client;