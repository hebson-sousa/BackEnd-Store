const jwt = require("jsonwebtoken");

const dados = {
  email: "marcio@gt.com.br",
  password: "12345678",
  exp: Date.now() / 1000 + 60 * 60,
};

const key = "12345678";

const auth = jwt.sign(dados, key);

console.log("auth", auth);
