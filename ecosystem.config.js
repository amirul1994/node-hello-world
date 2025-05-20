module.exports = {
  apps: [
    {
      name: 'node-app', // Name of the app
      script: 'server.js', // Path to your Node.js server file
      cwd: '/home/amirul/node-hello-world', // Absolute path to your Node.js app
      env: {
        NODE_ENV: 'production',
        PORT: 5000, // Set the port for the Node.js app
      },
    },
  ],
};