class Logger {
  log(message) {
    console.log(`Logging: ${message}`);
  }
}

class Database {
  getUserData(userId) {
    // Simulating fetching user data from a database
    return { id: userId, name: "Jane Smith", email: "jane@example.com" };
  }
}

class UserService {
  constructor(logger, database) {
    this.logger = logger;
    this.database = database;
  }

  getUser(userId) {
    // Using the Database dependency to fetch user data
    const userData = this.database.getUserData(userId);

    // Logging user retrieval
    this.logger.log(`Retrieved user: ${JSON.stringify(userData)}`);

    return userData;
  }
}

// Create instances of Logger and Database
const loggerInstance = new Logger();
const databaseInstance = new Database();

// Inject both dependencies into the UserService
const userService = new UserService(loggerInstance, databaseInstance);

// Use the UserService to get a user
const user = userService.getUser(456);

// Output: Logging: Retrieved user: {"id":456,"name":"Jane Smith","email":"jane@example.com"}

/* 
The Database class simulates fetching user data from a database.
UserService now takes both logger and database as constructor parameters.
Instances of Logger and Database are created separately (loggerInstance and databaseInstance).
When creating an instance of UserService, both instances are passed in as dependencies.
This way, the UserService is decoupled from specific implementations of Logger and 
Database, making it flexible and allowing different implementations of these 
dependencies to be injected.
*/
