const prisma = require("../config/db");

exports.saveComparison = async (
  req,
  res
) => {

  try {

    const {
      userId,
      college1Id,
      college2Id
    } = req.body;

    const saved =
      await prisma.savedComparison.create({

        data: {
          userId,
          college1Id,
          college2Id
        }

      });

    res.json(saved);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

exports.getSavedComparisons =
  async (req, res) => {

    try {

      const { userId } =
        req.params;

      const comparisons =
        await prisma.savedComparison.findMany({

          where: {
            userId
          }

        });

      const result =
        await Promise.all(

          comparisons.map(
            async (comparison) => {

              const college1 =
                await prisma.college.findUnique({
                  where: {
                    id: comparison.college1Id
                  }
                });

              const college2 =
                await prisma.college.findUnique({
                  where: {
                    id: comparison.college2Id
                  }
                });

              return {
                ...comparison,
                college1,
                college2
              };

            }
          )

        );

      res.json(result);

    } catch (error) {

      res.status(500).json({
        message: error.message
      });

    }

  };