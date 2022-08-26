## Inspiration
We all love music. We all love concerts. However, we don't love the frenzy everyone gets in when their favourite concert ticket drops, rushing to buy a ticket before it sells out and they have to buy them from an overpriced reseller. Enter Concerto!

## What it does
Concerto provides a simple platform for fans to buy and artists to sell concert tickets in a quick and simple fashion. Concerto aims to destress the high stress concert buying experience ticket minimize reselling through a standard auctioning system. The highest bids are reserved the best spots and vice versa. This way, we can minimize the rush of concert ticket hoarding and reselling as the auction take time to end and tickets will be bought at their true value. This way the profit will not go to the resellers, but instead the people who deserve it, the artists.

## How we built it
The UI was designed through Figma. The front end was built with React and TailwindCSS, while the pages were routed using Next.js's built-in router. Our authentication system was built with firebase auth while the back-end data was stored in firestore and accessed through firebase hooks.

## Challenges we ran into
We ran into a multitude of syntax errors and the CSS not working the way we wanted it to. We also ran into issues with our liveshare shutting down. Furthermore, this was also the first time we implemented Twilio inside of a project. Specific problems we ran into include • Getting User ID from Firestore • Implementing a bidding system through an array of references in a collection Finally, it was a challenge planning, researching, and implementing a complete project from scratch in under 48 hours.

## Accomplishments that we're proud of
We are proud that in under 48 hours we were able to build a fully functional website that allowed users to buy concert tickets in a simple and stressless fashion, as well as allow artists to quickly sell their concert tickets. Furthermore, this was our first time implementing Twilio, we are proud that we were able to understand and use Twilio in such a short time frame!

## What we learned
For some of us, this was our first time implementing many features of next.js and firestore. We became more familiar with using the meta framework Next.js as well as using firestore to store and retrieve data. We also learned to use the Twilio API to send sms messages.

## What's next for Concerto
Concerto wants to use Twilio to further simplify the user experience by implementing a bot that the user can chat with to ask frequently ask questions or ask to contact a worker. Furthermore, we need to implement a legitimate payment service for users to provide users to pay with real money. Finally, we want to enhance the user experience by allowing sellers to add genre tags to the concerts and allowing users filter by genres so they can be recommended music that best suits their taste.
