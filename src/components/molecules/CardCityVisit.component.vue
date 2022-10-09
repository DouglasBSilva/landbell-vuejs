<template>
  <v-card
    class="mx-auto"
    max-width="250"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4 mr-3">
          {{name}}
        </div>
      </v-list-item-content>
      <v-progress-circular
            :rotate="-90"
            :size="45"
            :width="6"
            :value="rate"
            :color="color"
    >
      <small>{{ rate }}</small>
    </v-progress-circular>
    </v-list-item>
  </v-card>
</template>

<script>
  export default {
    name: 'CardUser',
    props: {
        name: {
          type: String,
          required: true
        }, 
        rate: {
          type: Number,
          required: true
        }
    },
    computed: {
        color(){
            let color = '';
            if(this.rate < 40) {
                let level = Math.ceil(this.rate / 10); 
                color = 'orange darken-'+ (4 - level);
            }else if(this.rate > 80){
                let level = Math.ceil((this.rate - 80) / 5); 
                color = 'lime accent-'+ level;
            }else {
                let level = Math.ceil((this.rate - 40) / 10); 
                color = 'yellow darken-'+ (4 - level);
            }

            return color;
        }
    }
  }
</script>
