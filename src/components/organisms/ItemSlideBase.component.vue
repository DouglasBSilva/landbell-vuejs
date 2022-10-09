<template>
  <v-sheet
    class="mx-4 pa-4"
    elevation="2"
  >
    <h3>{{title}}</h3>
    <small>{{subtitle}}</small>
    <v-slide-group
      v-if="items.length > 0"  
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <slot/>
    </v-slide-group>
    <div v-else class="pa-10 text-center">
        No content to display
    </div>
  </v-sheet>
</template>

<script>  
  export default {
    name: 'ItemSlideBase',
    data: function() {
      return {
        model: 0
      }
    },
    props: {
      items: {
        type: Array,
        required: true
      }, 
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String
      }
    }
  }
</script>
