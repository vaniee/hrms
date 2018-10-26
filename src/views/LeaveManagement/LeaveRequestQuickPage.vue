<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="margin-top-5">
        <v-date-picker
          color="cyan"
          v-model="noDate"
          :events="checkThatDate"
          :event-color="d => d[9] % 4 == 0 ? 'red' : 'green lighten-1'"
          @input="onCalendarSelected()"
          full-width>
        </v-date-picker>

        <div class="text-xs-right text-sm-right text-md-right">
            <br/>
            <template v-if="leaveInfoOnDate">
              <span v-for="msg in message" :key="msg.name" class="user-item">
                <v-avatar
                slot="activator"
                size="36px">
                <img
                    v-if="msg.avatar"
                    :src="msg.avatar"
                    alt="Avatar">
                </v-avatar>
                &nbsp;
                <strong v-html="msg.name"></strong>
                <span>{{msg.msg}}</span>
              </span>
            </template>
        </div>

        <v-list>
          <v-subheader>Approved</v-subheader>
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
              <v-icon :color="item.color">{{item.status}}</v-icon>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title">
              <v-list-tile-content v-if="subItem.line1 != 'field' && subItem.line2 != 'actions'">
                <v-list-tile-sub-title v-html="subItem.line1"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="subItem.line2"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-content v-if="subItem.line1 == 'field' && subItem.line2 == 'actions'">
                <v-text-field
                          label="Comment"
                          placeholder="Write your comment here">
                  </v-text-field>
              </v-list-tile-content>

              <span v-if="subItem.line1 == 'field' && subItem.line2 == 'actions'">
                <v-icon color="green darken-2">check</v-icon>
                &nbsp;
                <v-icon color="red">close</v-icon>
              </span>
            </v-list-tile>
          </v-list-group>
        </v-list>

        <v-list>
          <v-subheader>Pending</v-subheader>
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
              <v-icon :color="item.color">{{item.status}}</v-icon>
            </v-list-tile>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title">
              <v-list-tile-content v-if="subItem.line1 != 'field' && subItem.line2 != 'actions'">
                <v-list-tile-sub-title v-html="subItem.line1"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="subItem.line2"></v-list-tile-sub-title>
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
export default class LeaveRequestQuickPage extends Vue {
public items: any[] = [
    {
    no: '1',
    title: 'Jason Oner <span class="grey--text text--lighten-1">(Sick Leave)</span>',
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    subtitle: "2018-10-19 14:29:01",
    status: 'update',
    color: 'lime darken-1',
    items: [
        { 
          line1: "<b>Period:</b> 2018-10-15 &nbsp;<i class='material-icons' style='font-size: 10px'>arrow_forward</i>&nbsp; 2018-10-20",
          line2: "<b>Reason:</b> I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { 
          line1: "field",
          line2: "actions"
        }
    ]
    },
    {
    no: '2',
    title: 'Ranee Carlson <span class="grey--text text--lighten-1">(Sick Leave)</span>', 
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    subtitle: "2018-10-11 14:29:08",
    status: 'update',
    color: 'lime darken-1',
    active: true,
    items: [
        { 
          line1: "<b>Period:</b> 2018-10-17",
          line2: "<b>Reason:</b> I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { 
          line1: "field",
          line2: "actions"
        }
    ]
    },
    {
    no: '3',
    title: 'Cindy Baker <span class="grey--text text--lighten-1">(Sick Leave)</span>', 
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    subtitle: "2018-10-02 14:29:36",
    status: 'update',
    color: 'lime darken-1',
    items: [
        { 
          line1: "<b>Period:</b> 2018-10-19 &nbsp;<i class='material-icons' style='font-size: 10px'>arrow_forward</i>&nbsp; 2018-10-20",
          line2: "<b>Reason:</b> I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { 
          line1: "field",
          line2: "actions"
        }
    ]
    },
    {
    no: '4',
    title: 'Ali Connors <span class="grey--text text--lighten-1">(Sick Leave)</span>', 
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    subtitle: "2018-09-03 08:29:01",
    status: 'update',
    color: 'lime darken-1',
    items: [
        { 
          line1: "<b>Period:</b> 2018-10-19 &nbsp;<i class='material-icons' style='font-size: 10px'>arrow_forward</i>&nbsp; 2018-10-21",
          line2: "<b>Reason:</b> I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { 
          line1: "field",
          line2: "actions"
        }
    ]
    }
];
public noDate: any;
public markedDates: number[] = [];
public leaveInfoOnDate: boolean = false;
public message: any =[ 
  {
    avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
    name: 'John Leider',
    msg: ' (Sick Leave)'
  },
  {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    name: 'Anaa Khafli',
    msg: ' (Vacation Leave)'
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

.user-item{
  margin-left: 5px;
}
</style>