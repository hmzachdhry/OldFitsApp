const { Users, Profiles } = require('../models');

// Creates user

const createUser = async (req, res, next) => {
  const { username, password, email, location, phone_number } = req.body;

  try {
    const newUser = await Users.create({
      username,
      password,
      email,
      location,
      phone_number,
    });

    // Creates profile for the user

    await Profiles.create({ user_id: newUser.id });
    res.status(200).json(newUser);
    return next();
  } catch (err) {
    return next({
      log: `The following error occurred in the createUser controller: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred while trying to create a new user',
      },
    });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await Users.findAll({ include: Profiles });
    res.status(200).json(allUsers);
    // res.locals.userList = allUsers;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured in the getallUsers controller: ${err}`,
      status: 400,
      message: {
        err: 'An error occured while trying to grab the list of users',
      },
    });
  }
};

const getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await Users.findByPk(userId, { include: Profiles });
    if (!user) {
      return next({
        status: 404,
        message: { err: 'User not found' },
      });
    }
    res.status(200).json(user);
    return next();
  } catch (err) {
    return next({
      log: `The following error occurred in the getUserById controller: ${err}`,
      status: 400,
      message: {
        err: 'An error occurred while trying to retrieve the user',
      },
    });
  }
};

module.exports = { createUser, getAllUsers, getUserById };
