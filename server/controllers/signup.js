
import user_file from '../models/user_file';

import jwt from 'jsonwebtoken';
import userValidation from '../helpers/signup_validation';
import ENV from 'dotenv';

ENV.config();

const userSignup = (req, res)=> {


const { error } = userValidation.validation(req.body);

  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });

    return;
  }

  const email = user_file.find(user => user.email === req.body.email);

  if (email) {
    res.status(400).json({
      status: 400,
      error: ' Your email address has already been used.Please try another email ',
    });

    return;
  }


  const payload = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    is_admin:false,
  
  };
  const token = jwt.sign(payload, 'jwtPrivateKey', { expiresIn: '1d' });

  const newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password:req.body.password,
    is_admin:req.body.is_admin
  };

  user_file.push(newUser);

  return res.status(201).json({
    status: 201,
    data: {
      token,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      is_admin: req.body.is_admin,
    },
  });
};


export default userSignup;