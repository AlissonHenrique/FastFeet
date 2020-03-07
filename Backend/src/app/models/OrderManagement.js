import Sequelize, { Model } from 'sequelize';

class OrderManagement extends Model {
  static init(sequelize) {
    super.init(
      {
        recipient_id: Sequelize.INTEGER,
        deliveryman_id: Sequelize.INTEGER,
        signature_id: Sequelize.STRING,
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.DelivereManagement, {
      foreignKey: 'deliveryman_id',
      as: 'entregador',
    });
    this.belongsTo(models.Recipient, {
      foreignKey: 'recipient_id',
      as: 'destinatario',
    });
  }
}
export default OrderManagement;
