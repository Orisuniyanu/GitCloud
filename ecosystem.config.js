module.exports = {
  apps: [{
    name: "my-node-app",
    script: "server.js",
    instances: 1,
    autorestart: true,
    watch: false
  }]
};

