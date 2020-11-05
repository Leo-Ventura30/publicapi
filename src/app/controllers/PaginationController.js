const { Schedule } = require("../models");
class PaginationController {
  async renderPage(req, res) {
    const totalOfSchedules = await Schedule.findAll({
      where: {
        user_id: id,
      },
    });
    console.log(totalOfSchedules.length);
    const limitOfPage = 4;
    var actualPageNumber = 1;
    var totalOfPage = 0;
  }
}

module.exports = PaginationController();
