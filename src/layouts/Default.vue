<template>
  <div class="layout">
    <div>
        <b-navbar toggleable="sm" type="dark" variant="secondary" sticky="true">
          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

          <b-navbar-brand to="/">Darren's Blog</b-navbar-brand>

          <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
              <g-link to="/articles-list/"> <b-nav-text class="m-2">Articles</b-nav-text></g-link>
              <g-link to="/about/"> <b-nav-text class="m-2">About</b-nav-text></g-link>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  background-color: #f4f4f4;
  padding: 0;
  margin: 0;
}



@media screen and (min-width: 992px) {
  .container {
    width: 60%;
    margin: 0 auto;
    padding: 30px;
  }
}
</style>
