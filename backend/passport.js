const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

const FacebookStrategy = require("passport-facebook").Strategy;

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
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
