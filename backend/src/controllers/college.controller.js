const prisma =
  require("../config/db");

exports.getColleges = async (req, res) => {

  try {

    const {
      search = "",
      page = 1,
      limit = 10,
      location,
      minRating,
      maxFees,
    } = req.query;

    const skip =
      (Number(page) - 1) *
      Number(limit);

    const where = {

      name: {
        contains: search,
        mode: "insensitive",
      },

      ...(location && {
        location: {
          equals: location,
          mode: "insensitive",
        },
      }),

      ...(minRating && {
        rating: {
          gte: Number(minRating),
        },
      }),

      ...(maxFees && {
        fees: {
          lte: Number(maxFees),
        },
      }),

    };

    const colleges =
      await prisma.college.findMany({

        where,

        skip,

        take: Number(limit),

      });

    const total =
      await prisma.college.count({
        where,
      });

    res.json({

      data: colleges,

      page: Number(page),

      totalPages:
        Math.ceil(
          total / Number(limit)
        ),

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

exports.getCollegeById = async (req, res) => {
  try {
    const { id } = req.params;

    const college = await prisma.college.findUnique({
      where: {
        id,
      },
    });

    if (!college) {
      return res.status(404).json({
        message: "College not found",
      });
    }

    res.status(200).json(college);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



exports.compareColleges = async (
  req,
  res
) => {

  try {

    const ids =
      req.query.ids.split(",");

    const colleges =
      await prisma.college.findMany({

        where: {
          id: {
            in: ids,
          },
        },

      });

    res.json(colleges);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};