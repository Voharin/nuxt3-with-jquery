<template>
  <div>
    <div>My nav bar</div>
    <Nuxt :nuxt-child-key="someKey" />
    <div>My footer</div>
  </div>
</template>

<script>
import $ from 'jquery'

$(document).ready(function(){
  $('.box').click(function(){
    alert('hello')
  })
})

export default {
  key(route){
    return route.fullPath
  },

}

</script>
