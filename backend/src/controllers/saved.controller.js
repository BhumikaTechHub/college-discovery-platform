const prisma =
  require("../config/db");

exports.saveCollege =
  async (req, res) => {

    const {
      userId,
      collegeId,
    } = req.body;

    const saved =
      await prisma.savedCollege.create({

        data: {
          userId,
          collegeId,
        },

      });

    res.json(saved);
  };

exports.getSavedColleges =
  async (req, res) => {

    const { userId } =
      req.params;

    const saved =
      await prisma.savedCollege.findMany({

        where: {
          userId,
        },

        include: {
          college: true,
        },

      });

    res.json(saved);
  };