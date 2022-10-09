<template>
  <v-card
    class="mx-auto"
    max-width="250"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{fullName}}
        </div>
        <v-list-item-subtitle>age: {{age}}</v-list-item-subtitle>
        <v-list-item-subtitle>gender: {{gender}}</v-list-item-subtitle>
      </v-list-item-content>
      <router-link :to="'/users/'+user.id"> 
        <v-avatar color="red">
          <span class="white--text text-h5">{{nameInitials}}</span>
        </v-avatar>
      </router-link>
    </v-list-item>
  </v-card>
</template>

<script>
  export default {
    name: 'CardUser',
    props: { 
      user: {
        type: Object,
        required: true
      }
    },
    computed: {
      gender(){
        return this.user.gender ? this.user.gender.name : 'N/A';
      },
      age() {
        return this.user.age || 'N/A';
      },
      fullName(){
        return `${this.user.firstName} ${this.user.surname}`;
      },
      nameInitials(){
        let firstNameInitial = (this.user.firstName || '').charAt(0);
        let surnameInitial = (this.user.surname || '').charAt(0);
        
        return `${firstNameInitial}${surnameInitial}`;
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
