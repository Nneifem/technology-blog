const User = require('./User');
const Project = require('./Project');

Project.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Project };
