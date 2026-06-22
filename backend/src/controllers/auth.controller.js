const prisma = require("../config/db");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    const existing =
      await prisma.user.findUnique({

        where: {
          email
        }

      });

    if (existing) {

      return res.status(400).json({

        message:
          "Email already exists"

      });

    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await prisma.user.create({

        data: {

          name,

          email,

          password:
            hashedPassword,

        },

      });

    res.status(201).json({

      id: user.id,

      name: user.name,

      email: user.email,

    });

  } catch (error) {

    res.status(500).json({

      message:
        error.message

    });

  }

};

exports.login = async (
  req,
  res
) => {

  try {

    const {
      email,
      password
    } = req.body;

    const user =
      await prisma.user.findUnique({

        where: {
          email
        }

      });

    if (!user) {

      return res.status(404).json({

        message:
          "User not found"

      });

    }

    const isMatch =
      await bcrypt.compare(

        password,

        user.password

      );

    if (!isMatch) {

      return res.status(400).json({

        message:
          "Invalid credentials"

      });

    }

    const token =
      jwt.sign(

        {
          id: user.id
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "7d"
        }

      );

    res.status(200).json({

      token,

      user: {

        id: user.id,

        name: user.name,

        email: user.email,

      },

    });

  } catch (error) {

    res.status(500).json({

      message:
        error.message

    });

  }

};