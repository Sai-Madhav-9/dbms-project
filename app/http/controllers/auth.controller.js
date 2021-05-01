const {
  signup,
  requestPasswordReset,
  resetPassword,
} = require("../../../resources/js/auth.service");

const signUpController = async (req, res, next) => {
  const signupService = await signup(req.body);
  return res.json(signupService);
};

const resetPasswordRequestController = async (req, res, next) => {
  const requestPasswordResetService = await requestPasswordReset(
    req.body.email
  );
  // res.json(requestPasswordResetService);
  return res.redirect("/")
};

const resetPasswordController = async (req, res, next) => {
  const resetPasswordService = await resetPassword(
    req.body.userId,
    req.body.token,
    req.body.password
  );

  if(resetPasswordService){
    return res.redirect('/login')
  }
  return res.json("Somthing went wrong pls try again");
};

module.exports = {
  signUpController,
  resetPasswordRequestController,
  resetPasswordController,
};
