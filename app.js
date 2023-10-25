import './app-login.js';
import './app-blog.js';


document.addEventListener("DOMContentLoaded", function () {
  const login = document.querySelector('app-login');
  const blog = document.querySelector('app-blog');

  login.addEventListener("login", (event) => {
    blog.isLoggedIn = event.detail.isLoggedIn;
    blog.loadPosts();
  });
});
