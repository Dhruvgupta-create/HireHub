import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, password, role } = req.body;
  if (!name || !email || !phone || !password || !role) {
    return next(new ErrorHandler("Please fill full form!"));
  }
  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email already registered!"));
  }
  const user = await User.create({
    name,
    email,
    phone,
    password,
    role,
  });   //new resource  is registered so 201
   sendToken(user,201,res,"user registered");
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, role } = req.body; 
  if (!email || !password || !role) {      //missing crendentials
    return next(new ErrorHandler("Please provide email ,password and role.",400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {  //for invalid credentials
    return next(new ErrorHandler("Invalid Email Or Password.", 401));
  }
  const isPasswordMatched =  await user.comparePassword(password);
  if (!isPasswordMatched) {   //for invalid credentials
    return next(new ErrorHandler("Invalid Email Or Password.", 401));
  }
  if (user.role !== role) {    //for role mismastched
    return next( 
      new ErrorHandler(`User with provided email and ${role} not found!`, 401)
    );
  }        //200 okk response 
  sendToken(user, 200, res, "User Logged In!");
});

export const logout=catchAsyncErrors(async(req,res,next) => {
   res.status(201)
       .cookie("token","",{
        httponly:true,
        expires:new Date(Date.now()),
        secure:true,
        sameSite:"None",
       })
       .json({
        success:true,
        message:"user has successfully logged out!!"
       })
})

export const getUser = catchAsyncErrors((req, res, next) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
});