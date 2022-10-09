<template>
  <div class="user-show" v-if="user.id">
     <user-information-component :user="user" />
     <city-visit-slide-component 
        class="ma-2" 
        :cities="cityRecommendations" 
        title="City Recommendations:" 
        subtitle="(Average rating by city)"
        recommendation
      />
     <city-visit-slide-component class="ma-2" :cities="user.visits" title="Visits:" subtitle="(City which the user visited before)"/>
     <user-slide-component class="ma-2" :users="friends" title="Friends:" subtitle="(Direct friends of this user)"/>
     <user-slide-component class="ma-2" :users="friendsOfFriends" title="Friend of Friends:" subtitle="(Friends from this user direct connections)"/>
     <user-slide-component class="ma-2" :users="suggestions" title="Friend Suggestions:" subtitle="(Suggested friends based on similar connections)"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CityVisitSlideComponent from '../../components/organisms/CityVisitSlide.component.vue';
import UserInformationComponent from '../../components/organisms/UserInformation.component';
import UserSlideComponent from '../../components/organisms/UserSlide.component';

export default {
  name: 'UserShowView',
  components: { 
    UserSlideComponent, 
    UserInformationComponent,
    CityVisitSlideComponent 
  },
  created: function (){
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        this.getInfos(toParams.userId);
      }
    )
    this.getInfos(this.$route.params.userId);
  },
  computed: {
    ...mapGetters({
      user: 'user',
      friends: 'friends',
      friendsOfFriends: 'friendsOfFriends',
      suggestions: 'suggestions',
      cityRecommendations: 'cityRecommendations'
    }),
  },
  methods: {
    ...mapActions({
      loadUser: 'loadUser',
      loadFriends: 'loadFriends',
      loadFriendsOfFriends: 'loadFriendsOfFriends',
      loadSuggestions: 'loadSuggestions',
      loadCityRecommendations: 'loadCityRecommendations'
    }),
    getInfos(userId){ 
      this.loadUser(userId).catch(() => {
        this.$router.push({ name: 'notFound' })
      }).then(() => {
        this.loadCityRecommendations(userId);
        this.loadFriends(userId);
        this.loadSuggestions(userId);
        this.loadFriendsOfFriends(userId);
      });
      
    }
  }
}
</script>
