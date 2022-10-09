<template>
  <item-slide-base-component :items="cities" :title="title" :subtitle="subtitle">
      <v-slide-item
        v-for="city in cities"
        :key="city.id"
      >
        <card-city-visit-component :name="city.name" :rate="!recommendation ? city.pivot.rate: city.avgRate"/>
      </v-slide-item>
  </item-slide-base-component>
</template>

<script>  
  import CardCityVisitComponent from '../molecules/CardCityVisit.component';
  import ItemSlideBaseComponent from './ItemSlideBase.component.vue';
  
  export default {
    name: 'CitySlide',
    components: {
      CardCityVisitComponent,
      ItemSlideBaseComponent
    },
    props: {
      cities: {
        type: Array,
        required: true
      }, 
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
      },
      recommendation: { 
        type: Boolean,
        default: false
      }
    }
  }
</script>
