const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const mongoose = require("mongoose");

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
});
const Admin = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  coockieName: process.env.ADMIN_COOCKIE_NAME,
  coockiePassword: process.env.ADMIN_COOCKIE_PASS,
  authenticate: async (email, password) => {
    if (email === Admin.email && password === Admin.password) {
      return Admin;
    }
    return null;
  },
});

module.exports = router;
