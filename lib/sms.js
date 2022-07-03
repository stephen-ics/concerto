import twilio from 'twilio';
const accountSid = 'AC99dfeef1bb4bdef6d738cc313b22d362';
const authToken = '09575c6606d00563ce2f2172b09a52f4';
const client = twilio(accountSid, authToken);

export default client;
