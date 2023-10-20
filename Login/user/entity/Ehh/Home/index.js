const Home = {
  scope: "Browser",
  name: "HomePage",
  path: "^#Home$",
  entity: "Ehh",
  model: {
    data: [],
  },
  view: function (model) {
    var elim = `<h1>${model.heading}</h1>
                <p>${model.text}</p>
                <br /><br />
                <p>Lets get started by signing up!</p>`;
    document.getElementById("ehh").innerHTML = elim;
  },
  controller: {
    name: "HomePage",
    callback: async (event, view) => {
      view({
        heading: "Everything happens here",
        text: "Wecome to Ehh",
      });
    },
  },
};

export { Home };
