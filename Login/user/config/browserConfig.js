const browserConfig = {
    name: "EhhStart",
    env: "Browser",
    Port: "4000",
    host: window.location.origin,
    Entity: {
      Ehh: "/user/entity/Ehh/index.js",
      Github: "/user/entity/Github/index.js",
      Gitlab: "/user/entity/Gitlab/index.js",
      Godaddy: "/user/entity/Godaddy/index.js",
    },
    homePage: "#Home",
  };
  
  export { browserConfig };
  