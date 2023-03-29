const User = require("../models/User");

const Auth = {
  private: async (req, res, next) => {
    let success = false;

    if (req.headers.authorization) {
      let hash = req.headers.authorization.substring(6);
      let decoded = Buffer.from(hash, "base64").toString();
      let data = decoded.split(":");

      if (data.length == 2) {
        let hasUser = await User.findOne({
          where: {
            email: data[0],
            password: data[1],
          },
        });

        if (hasUser) {
          success = true;
        }
      }
    }

    if (success) {
      next();
    } else {
      res.status(401).json({
        message: "Unauthorized",
      });
    }
  },
};

module.exports = Auth;
