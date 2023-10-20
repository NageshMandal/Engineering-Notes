const githubLoginButton = document.getElementById("github-login-button");

githubLoginButton.addEventListener("click", () => {
  const clientID = "9b422344fa31d0dfaa43";
  const redirectURI = "http://127.0.0.1:5500/GithubProfile.html";
  const scope = "read:user";

  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scope}`;
  
  window.location.replace(githubAuthURL);
});
