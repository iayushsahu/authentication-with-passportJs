// const passport = require("passport");
const User = require("../models/user");

module.exports.profile = function (req, res) {
  if (req.cookies.user_id) {
    User.findById(req.cookies.user_id, function (err, user) {
      if (err) {
        console.log(`facing some error in showing profile`);
        return res.redirect("back");
      }

      if (user) {
        return res.render("user_profile", {
          title: "user profile",
          user: user,
        });
      } else {
        return res.redirect("/users/sign-in");
      }
    });
  } else {
    return res.redirect("/users/sign-in");
  }
};

module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "user | sign in",
  });
};

module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "user | sign up",
  });
};

module.exports.signOut = function (req, res) {
  res.clearCookie("user_id");
  return res.redirect("/users/sign-in");
};

module.exports.create = function (req, res) {
  //todo using passportJs
};

module.exports.createSession = function (req, res) {
  // todo using passportJs
};
