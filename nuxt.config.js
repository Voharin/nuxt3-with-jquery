import webpack from 'webpack'

export default {
  // ...
ssr: false, 
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'

      })
    ]
  }
}