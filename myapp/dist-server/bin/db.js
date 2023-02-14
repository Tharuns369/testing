"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
require('dotenv').config();
console.log(process.env.MONGO_URL);
_mongoose.default.connect(process.env.MONGO_URL);
_mongoose.default.connection.on("err", () => {
  console.log("Error at db connection");
});
_mongoose.default.connection.once("open", () => {
  console.log("Mongodb connected");
});
_mongoose.default.Promise = Promise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uZmlnIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJtb25nb29zZSIsImNvbm5lY3QiLCJjb25uZWN0aW9uIiwib24iLCJvbmNlIiwiUHJvbWlzZSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9iaW4vZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcblxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5NT05HT19VUkwpXHJcbm1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKVxyXG4gIFxyXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKFwiZXJyXCIsKCk9Pntjb25zb2xlLmxvZyhcIkVycm9yIGF0IGRiIGNvbm5lY3Rpb25cIil9KVxyXG5tb25nb29zZS5jb25uZWN0aW9uLm9uY2UoXCJvcGVuXCIsKCk9Pntjb25zb2xlLmxvZyhcIk1vbmdvZGIgY29ubmVjdGVkXCIpfSlcclxuXHJcblxyXG5tb25nb29zZS5Qcm9taXNlID0gUHJvbWlzZSJdLCJtYXBwaW5ncyI6Ijs7QUFHQTtBQUErQjtBQUYvQkEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDQyxNQUFNLEVBQUU7QUFJMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO0FBQ2xDQyxpQkFBUSxDQUFDQyxPQUFPLENBQUNKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLENBQUM7QUFFdkNDLGlCQUFRLENBQUNFLFVBQVUsQ0FBQ0MsRUFBRSxDQUFDLEtBQUssRUFBQyxNQUFJO0VBQUNSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBQ3pFSSxpQkFBUSxDQUFDRSxVQUFVLENBQUNFLElBQUksQ0FBQyxNQUFNLEVBQUMsTUFBSTtFQUFDVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUd2RUksaUJBQVEsQ0FBQ0ssT0FBTyxHQUFHQSxPQUFPIn0=