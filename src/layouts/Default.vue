<template>
  <div class="layout">
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

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

@media screen and (min-width: 992px) {
  .container {
    width: 60%;
    margin: 0 auto;
    padding: 30px;
  }
}
</style>
