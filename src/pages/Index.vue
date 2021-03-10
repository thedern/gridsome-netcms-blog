<template>
  <Layout>
    <div class="container mt-4">
      <div class="row">
        <h1>Landing Page</h1>
        <div class="col-md-12 bg border border-danger" />
      </div>
      <div class="row">
        <div class="col-md-12">
             <div>
              <p class="lead mt-2 text-justify p-4 jumbotron jumbotron-fluid" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod tellus quis condimentum auctor. Cras consectetur
              leo ligula. Proin mollis porta vestibulum. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Fusce nec metus nec nisl suscipit pretium. Praesent euismod nibh risus, in pellentesque erat mollis vitae.
              Praesent facilisis lectus nibh, et consequat sapien interdum quis. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.
              </p>
            </div>
        </div>
      </div>
    </div>

  </Layout>
</template>


<script>
export default {
  metaInfo: {
    title: "My blog"
  }
};
</script>

<style>
  .bg {
    min-height: 600px;
    background-image: url("~@/assets/images/redbobber.jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
