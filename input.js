const { stdout } = require("process");
const { up, down, left, right } = require("./constants");
const funMsg = "I am having fun!";

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};


const handleUserInput = (key) => {
  const stdout = process.stdout;

  if (key === '\u0003') {
    connection.write("See ya");
    process.exit();
  };

  if (key === 'w') {
    connection.write(up)
  };

  if (key === 'a') {
    connection.write(left);
  };

  if (key === 's') {
    connection.write(down);
  };

  if (key === 'd') {
    connection.write(right);
  };

  if (key === 'k') {
    connection.write("Say: " + funMsg);
  }
};

module.exports = {setupInput };