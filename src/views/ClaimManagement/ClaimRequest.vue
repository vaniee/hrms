<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="margin-top-5">
        <v-list>
          <v-list-group
            v-for="item in items"
            v-model="item.active"
            :key="item.title"
            no-action>
            <v-list-tile slot="activator" avatar @click="updateCalendarTracker(item.no)">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile >
                      <v-list-tile-action>
                        <v-icon>person</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                          <v-list-tile-sub-title>Apply To</v-list-tile-sub-title>
                        <v-list-tile-title>Anan Khafli</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>

                     
                    <v-list-tile >
                      <v-list-tile-action>
                        <v-icon>receipt</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                          <v-list-tile-sub-title>Claim Type</v-list-tile-sub-title>
                        <v-list-tile-title>Business Trip</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>



                    <v-list-tile >
                      <v-list-tile-action>
                        <v-icon>attach_money</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-sub-title>Total (VND)</v-list-tile-sub-title>
                        <v-list-tile-title>90000000000</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>



                    <v-list-tile xs6 sm4>
                      
                      <v-list-tile-action>
                        <v-icon>date_range</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-sub-title>Application Date</v-list-tile-sub-title>
                        <v-list-tile-title>2018-10-26</v-list-tile-title>
                      </v-list-tile-content>
                    
                    </v-list-tile>


                    <v-list-tile xs6 sm4>
                      
                      <v-list-tile-action>
                        <v-icon>date_range</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-sub-title>Expense Date</v-list-tile-sub-title>
                        <v-list-tile-title>2018-10-26</v-list-tile-title>
                      </v-list-tile-content>
                    
                    </v-list-tile>
                    <v-list-tile xs6 sm4>
                      <v-list-tile-action>
                        <v-icon>list</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-sub-title>Expense Item</v-list-tile-sub-title>
                        <v-list-tile-title>Food</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {

  },
})
export default class ClaimRequest extends Vue {
public items: any[] = [
    {
    no: '1',
    title: 'Jason Oner <span class="grey--text text--lighten-1">(Insurance)</span>',
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    subtitle: "2018-10-19 14:29:01"
    },
    {
    no: '2',
    title: 'Ranee Carlson <span class="grey--text text--lighten-1">(Business Trip)</span>', 
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    subtitle: "2018-10-11 14:29:08",
    active: true
    },
    {
    no: '3',
    title: 'Cindy Baker <span class="grey--text text--lighten-1">(Business Trip)</span>', 
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    subtitle: "2018-10-02 14:29:36"
    },
    {
    no: '4',
    title: 'Ali Connors <span class="grey--text text--lighten-1">(Travel Costs)</span>', 
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    subtitle: "2018-09-03 08:29:01"
    }
];
public noDate: any;
public markedDates: number[] = [];
public leaveInfoOnDate: boolean = false;
public message: any =[ 
  {
    avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
    name: 'John Leider',
    msg: ' (Business Trip)'
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    name: 'Anaa Khafli',
    msg: ' (Insurance)'
  }
];


constructor() {
    super();
    this.noDate = null;
  }


public updateCalendarTracker(personName: string) {
  switch (personName) {
    case '1':{
      this.markedDates = [1,2,3,4,5];
      break;
    }
    case "2":{
      this.markedDates = [8,9,10];
      break;
    }
    case "3": {
      this.markedDates = [15, 16, 17, 18, 19, 20];
      break;
    }
    case "4": {
      this.markedDates = [29];
      break;
    }
  }
}

 public checkThatDate (date: any) {
    const [,, day] = date.split('-')
    var result = this.markedDates.filter((d) => d == parseInt(day, 10));
    if(result.length > 0){
      return true;
    }
    return false;
  }

  public onCalendarSelected() {
    if (this.checkThatDate(this.noDate)) {
      this.leaveInfoOnDate = true;
    } else {
      this.leaveInfoOnDate = false;
    }
  }
}
</script>

<style>
.margin-top-5{
  margin-top: 5px;
}


</style>