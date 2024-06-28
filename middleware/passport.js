import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";
import * as keys from "../config/keys.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwt,
//   issuer: "accounts.examplesoft.com",
//   audience: "yoursite.net",
};

export default (passport) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      const user = await User.findById(payload.userId)
        .select("email id")
        
       try {
         if (user) {
           done(null, user);
         } else {
           done(null, false);
         }
       } catch (error) {
        console.log(error)
       }
       
    })
  );
};
