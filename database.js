// Database Connection Module
// This simulates connecting to a database for our project

const db = {
  connect: function () {
    console.log("🔌 Connecting to database...");
    // Simulated connection string
    const connectionString = "mongodb://localhost:27017/csp451";
    console.log("Using connection string:", connectionString);
    return true;
  },

  disconnect: function () {
    console.log("❌ Disconnecting from database...");
    return true;
  }
};

// Exporting module
module.exports = db;
