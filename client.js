const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', 
    port: 50542  
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    conn.write('Name: EVA');
    console.log('Successfully connected to game server');
  });

  // conn.on("connect", () => {
  //   console.log('Name: SNK');
  // });

  return conn;
};

// console.log("Connecting ...");
// connect();

module.exports = {
  connect
};