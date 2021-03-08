// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// configure integration of  @gridsome/source-filesystem and @gridsome/transformer-remark
// path: filesustem path/url
// typeName: is type create in GraphQL

module.exports = {
  siteName: 'derns blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {}
      }
    },
  ],
   transformers: {
    remark: {}
  }
}