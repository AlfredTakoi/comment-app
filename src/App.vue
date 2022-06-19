<template>
 
  <nav class="navbar navbar-expand-lg shadow navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Post Comment App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/post">Post</a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="/account">Account</a>
            </li>
           
          </ul>
          <div class="d-flex ">
            <a href="#" class="text-decoration-none">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  <router-view/>
</template>
<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
