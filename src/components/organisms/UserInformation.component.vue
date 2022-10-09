<template>
  <v-sheet>
    
    <v-list-item three-line>
    
      <v-avatar color="red" size="90">
        <span class="white--text text-h2">{{nameInitials}}</span>
      </v-avatar>
      <v-list-item-content class="ml-4">
        <v-list-item-title class="text-h2">{{fullName}}</v-list-item-title>
         <v-list-item three-line>
            <v-list-item-content class="ml-4">
              <v-list-item-subtitle class="text-h5">age: {{age}}</v-list-item-subtitle>
              <v-list-item-subtitle class="text-h5">gender: {{gender}}</v-list-item-subtitle>
            </v-list-item-content>
         </v-list-item>
      </v-list-item-content>

    </v-list-item>
  </v-sheet>
</template>

<script>  
  export default {
    name: 'UserInformation',
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
    },
  }
</script>
