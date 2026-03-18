module.exports = {
  apps: [
    {
      name: "personal-portfolio",
      script: "npm",
      args: "start",
      cwd: "/root/my-portfolio",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    }
  ]
};
