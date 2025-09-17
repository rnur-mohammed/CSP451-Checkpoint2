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
  // Simulated query to fetch all users
  getAllUsers: function () {
    console.log("📂 Fetching all users from database...");
    // Example mock result
    return [
      { id: 1, name: "Alice", role: "Admin" },
      { id: 2, name: "Bob", role: "User" },
      { id: 3, name: "Charlie", role: "User" }
    ];
  },

  // Simulated query to insert a new user
  addUser: function (username, role) {
    console.log(`➕ Adding user: ${username}, Role: ${role}`);
    return { success: true, user: { id: 4, name: username, role: role } };
  },

// Exporting module
module.exports = db;
