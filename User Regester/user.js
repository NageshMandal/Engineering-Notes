// Open a database or create a new one if it doesn't exist
let db;
const request = window.indexedDB.open("UserData", 1);

request.onerror = function(event) {
  console.error("Error opening database", event);
};

request.onsuccess = function(event) {
  console.log("Success opening database");
  db = event.target.result;
};

request.onupgradeneeded = function(event) {
  console.log("Upgrading database");
  db = event.target.result;
  const objectStore = db.createObjectStore("users", {keyPath: "id", autoIncrement: true});
  objectStore.createIndex("username", "username", {unique: true});
  objectStore.createIndex("email", "email", {unique: true});
  objectStore.createIndex("password", "password", {unique: false});
};

// Listen for form submissions
document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = hashPassword(document.getElementById("password").value);
  
  const transaction = db.transaction(["users"], "readwrite");
  const objectStore = transaction.objectStore("users");
  const request = objectStore.add({username: username, email: email, password: password});
  
  request.onsuccess = function(event) {
    console.log("User data has been added to the database.");
  };
});

// Listen for form submissions
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("emailverify").value;
    const password = hashPassword(document.getElementById("passwordverify").value);
    
    const transaction = db.transaction(["users"], "readonly");
    const objectStore = transaction.objectStore("users");
    const index = objectStore.index("email");
    const request = index.get(email);
    
    request.onsuccess = function(event) {
      const user = event.target.result;
      if (!user) {
        console.error("Email address not found.");
        return;
      }
      if (user.password === password) {
        console.log("Login successful.");
        // Add code to log the user in here
      } else {
        console.error("Password is incorrect.");
      }
    };
  });

function hashPassword(password) {
  // Add code to hash the password here
}
