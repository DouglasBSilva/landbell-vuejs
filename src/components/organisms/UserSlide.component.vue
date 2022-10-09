<template>
  <item-slide-base-component :items="users" :title="title" :subtitle="subtitle">
      <v-slide-item
        v-for="user in users"
        :key="user.id"
      >
        <card-user-component :user="user"/>
      </v-slide-item>
  </item-slide-base-component>
</template>

<script>  
  import CardUserComponent from '../molecules/CardUser.component';
  import ItemSlideBaseComponent from './ItemSlideBase.component.vue';
  
  export default {
    name: 'UserSlide',
    components: {
      CardUserComponent,
      ItemSlideBaseComponent
    },
    props: {
      users: {
        type: Array,
        required: true
      }, 
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String
      },
    }
  }
</script>
