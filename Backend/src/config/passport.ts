import passport from "passport";
import passportJwt from "passport-jwt";
import config from "./config";
import User from "../models/user";

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.JWT_SECRET,
    },
    function (JwtPayload, done) {
      return User.findOne({
        where: { id: JwtPayload.id },
      })
        .then((User: any) => {
          return done(null, User);
        })
        .catch((err: any) => {
          return done(err);
        });
    }
  )
);
