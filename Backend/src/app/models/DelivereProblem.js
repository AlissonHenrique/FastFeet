import Sequelize, { Model } from 'sequelize';

class DelivereProblem extends Model {
  static init(sequelize) {
    super.init(
      {
        delivery_id: Sequelize.INTEGER,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
export default DelivereProblem;
