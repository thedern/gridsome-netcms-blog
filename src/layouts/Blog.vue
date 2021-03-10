<template>
  <div class="layout">
    <div class="container">
      <div class="row">
        <div class="col-md-12 bg-secondary">
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>