/**
 * 1. install stripe and stripe react
 * 2. create card element 
 * 3. create stripe account and get publishable key
 * 4. use publishable key and use stripe to get card information and error
 * 5. create payment intent post on the server. and return client secret. make sure you used the payment method types:['card']
 * 6. from client side get the client secret and save it. 
 * 7. use confirm card payment and pass use information, card and client secret.
 * 8. display transaction id.
 * /