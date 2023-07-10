module.exports = {
  apps: [
    {
      name: "PRODUCT",
      script: "index.js",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "4G",
      env: {
        NODE_ENV: "production",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
    {
      name: "DEV",
      script: "indexDEV.js",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "4G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "development",
      },
    },
  ],
};

// DO NOT EDIT THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING