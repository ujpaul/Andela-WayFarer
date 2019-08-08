import user_file from '../models/user_file';
import loginValidation from '../helpers/signin'

 import jwt from 'jsonwebtoken';
  const signin = (req, res) => {  
    
    const { error } = loginValidation.validation(req.body);

  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }
  const checkUser = user_file.find(user => user.email === req.body.email);

  if (!checkUser) {
    return res.status(404).json({
      status: 404,
      error: 'Email or password does not exist',

    });
  }

  const checkPassword = user_file.find(user => user.password.trim() === req.body.password);

  if (!checkPassword) {
    return res.status(404).json({
      status: 404,
      error: 'Email or password does not exist',
    });
  }
  
  const loginPayload = {
    first_name: checkUser.first_name,
    last_name: checkUser.last_name,
    email: checkUser.email,
    
  };

   
  const token = jwt.sign(loginPayload, 'jwtPrivateKey', { expiresIn: '1d' });

  res.status(200).json({
    status: 200,
    data: {
      token,
      first_name: checkUser.first_name,
      last_name: checkUser.last_name,
      email: checkUser.email,
    },
  });
};




export default signin;
