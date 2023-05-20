const passport = require('passport');
//session: false = middleware should NOT use session based authentication
const auth = passport.authenticate('jwt', {session: false}); 

module.exports = auth;