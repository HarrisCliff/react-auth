const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require('./Models/UserModel');


FACEBOOK_APP_ID = "600855098073196";
FACEBOOK_APP_SECRET = "80244498d0334cf4172e833558f0afc1";

const GOOGLE_CLIENT_ID =
  "350404503472-jj2gdnpv1lnjt7011mfj1r7dsqre0ocm.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      // new User ({
      //   username: profile.displayName,
      //   email:profile.emails,
      //   googleID: profile.id
      // }).save().then((newUser) => {
      //   console.log('New user created:' + newUser)
      // })
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
