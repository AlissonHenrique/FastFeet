import Sequelize from 'sequelize';
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';
import databaseConfig from '../config/database';
import DelivereManagement from '../app/models/DelivereManagement';
import OrderManagement from '../app/models/OrderManagement';
import DelivereProblem from '../app/models/DelivereProblem';
import File from '../app/models/File';
const models = [
  User,
  Recipient,
  DelivereManagement,
  OrderManagement,
  DelivereProblem,
  File,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
