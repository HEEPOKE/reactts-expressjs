import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import config from "../config";
import User from "../../models/user";

const Google = GoogleStrategy.Strategy;

passport.use(
  new Google(
    {
      clientID: config.CLIENT_ID,
      callbackURL: config.CALLBACK_URL,
      passReqToCallback: true,
    },
    async (
      req: any,
      accessToken: any,
      refreshToken: any,
      profile: any,
      cb: any
    ) => {
      const defaultUser = {
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: `${profile.email[0].value}`,
        picture: `${profile.photos[0].value}`,
        googleId: profile.id,
      };

      const user = await User.findOrCreate({
        where: {
          googleId: profile.id,
          defaults: defaultUser,
        },
      }).catch((err: any) => {
        console.log(err);
        cb(err, null);
      });

      if (user && user[0]) {
        return cb(null, user && user[0]);
      }
    }
  )
);
