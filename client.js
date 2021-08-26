const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:  IP, 
    port: PORT 
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write('Name: EVA');
    // setInterval(() => {
    //    conn.write('Move: up');
    // }, 500);
    console.log('Successfully connected to game server');
  });


  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = {
  connect
};