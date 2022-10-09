<template>
  <div class="home">
    <v-data-table
          :headers="headers"
          :items="items"
          disable-filtering
          disable-sort
          @update:page = "paginate($event)"
          @update:items-per-page = "paginate($event)"
          :options.sync = "options"
          :server-items-length="length"
          :footer-props="footerProps"
          class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <router-link :to="'/users/'+item.id">
          <v-icon
            class="mr-2"
          >
            mdi-eye
          </v-icon>
        </router-link>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  created: function (){
    this.loadUsers({});
  },
  data: function (){
    return {
      footerProps: {
        "items-per-page-options": [
            5,
            10,
            15,
            20
        ]
      },
      options: {
        page: 1,
        itemsPerPage: 10
      }
    }
  },
  computed: {
    ...mapGetters({users: 'users'}),
    items: function () {
      return this.users.data;
    },
    length: function () {
      return this.users.total;
    },
    page: function () {
      return this.users.current_page;
    },
    itemsPerPage: function () {
      return this.users.per_page;
    },
    headers: function () {
      return [
        { text: 'Id', value: 'id' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Surname', value: 'surname' },
        { text: 'Age', value: 'age' },
        { text: 'Gender', value: 'gender.name' },
        { text: 'Actions', value: 'actions' },
      ];
    }
  },
  methods: {
    ...mapActions({loadUsers: 'loadUsers'}),
    paginate(){
      this.loadUsers({page: this.options.page, per_page: this.options.itemsPerPage});
    }
    
  }
}
</script>
