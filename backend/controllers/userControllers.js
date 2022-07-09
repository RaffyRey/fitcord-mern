const User = require('../models/userModel');
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// user registration
const registerUserController = asyncHandler(async(req, res) => {
  const {lastname , firstname, email, password} = req.body

  // check if all fields are filled
  if(!lastname || !firstname || !email || !password) {
    res.status(400)
    throw new Error("Please fill in all fields")
  }

  // check if user email is already in use
  const userExist = await User.findOne({email})
  if(userExist) {
    res.status(400)
    throw new Error("User already exists")
  }

  // hash password using bcrypt
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create user
  const user = await User.create({
    lastname,
    firstname,
    email,
    password: hashedPassword
  })

  // user token
  if(user){
    res.status(200).json({
      _id: user.id,
      lastname: user.lastname,
      firstname: user.firstname,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error("Invalid user Data")
  }

  // res.json({message: "this is for user registration"})
})

// user login
const loginUserController = asyncHandler(async(req, res) => {
  const {email, password} = req.body

  // check for user email
  const user = await User.findOne({email})

  // checking email and password
  if(user && (await bcrypt.compare(password, user.password))){
    res.status(200)
    res.json({
      _id: user.id,
      lastname: user.lastname,
      firstname: user.firstname,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error("Invalid credentials")
  }
})

// user data
const userDataController = (req, res) => {
  res.json(req.user)
  // res.json({message: "this is the user data"})
}


// generate token
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

module.exports = {
  registerUserController,
  loginUserController,
  userDataController
}