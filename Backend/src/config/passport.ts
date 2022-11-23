import passport from "passport";
import passportJwt from "passport-jwt";
import config from "./config";
import userInterface from "../interface/userInterface";

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.JWT_SECRET,
    },
    function (JwtPayload, done) {
      return userInterface
        .findOne({
          where: { id: JwtPayload.id },
        })
        .then((userInterface: any) => {
          return done(null, userInterface);
        })
        .catch((err: any) => {
          return done(err);
        });
    }
  )
);
