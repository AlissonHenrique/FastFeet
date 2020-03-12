import Sequelize, { Model } from 'sequelize';

class DelivereManagement extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        avatar_id: Sequelize.INTEGER,
        email: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.avatar_id}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

}
export default DelivereManagement;
