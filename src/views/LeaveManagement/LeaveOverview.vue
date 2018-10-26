<template>
  <v-card>
    <v-layout row wrap>
    <v-flex xs12 sm12 md6>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header">
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar>
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                <v-list-tile-sub-title>
                  <span @click='item.showComment = !item.showComment' class="clickable">View comment</span>
                </v-list-tile-sub-title>
              </v-list-tile-content>
              
              <v-tooltip v-model="item.showComment" left max-width="180">
                  <span slot="activator">&nbsp;</span>
                  <span>{{item.comment}}</span>
              </v-tooltip>
              <v-icon :color="item.color">{{item.status}}</v-icon>
            </v-list-tile>
          </template>
        </v-list>
    </v-flex>
    <v-flex xs12 sm12 md6 style="padding: 10px">
        <v-date-picker
          color="cyan"
          v-model="noDate"
          :event-color="date => date[9] % 2 ? 'red' : 'green lighten-1'"
          :events="checkThatDate"
          @input="onCalendarSelected()"
          full-width>
        </v-date-picker>

          <div class="leave-info-on-date">
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
    </v-flex>
  </v-layout>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class LeaveOverview extends Vue {
public items: any[] = [
    { header: 'Team members' },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Anan Khafli <span class="grey--text text--lighten-1">(Sick Leave)</span>',
    subtitle: "2018-10-19 14:29:01",
    status: 'check',
    color: 'green darken-2',
    showComment: false,
    comment: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Adam Khoo <span class="grey--text text--lighten-1">(Vacation Leave)</span>',
    subtitle: "2018-10-11 14:29:08",
    status: 'check',
    color: 'green darken-2',
    showComment: false,
    comment: "Wish I could come, but I'm out of town this weekend.",
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui Manan <span class="grey--text text--lighten-1">(Sick Leave)</span>',
    subtitle: "2018-10-02 14:29:36",
    status: 'check',
    color: 'green darken-2',
    showComment: false,
    comment: "Do you have Paris recommendations? Have you ever been?",
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Anan Khafli <span class="grey--text text--lighten-1">(Business Leave)</span>',
    subtitle: "2018-09-03 08:29:01",
    status: 'check',
    color: 'green darken-2',
    showComment: false,
    comment: "I'll be in your neighborhood doing errands this weekend.",
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Ali Connors <span class="grey--text text--lighten-1">(Business Leave)</span>',
    subtitle: "2018-09-01 10:02:20",
    status: 'check',
    color: 'green darken-2',
    showComment: false,
    comment: "I'll be in your neighborhood doing errands this weekend.",
    }
];
public noDate: any;
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
]
public leaveInfoOnDate: boolean = false;

public markedDates: number[] =[3, 4, 5, 11, 12, 13, 14, 15, 26, 27];

constructor() {
    super();
    this.noDate = null;
}

public onCalendarSelected() {
    if (this.checkThatDate(this.noDate)) {
      this.leaveInfoOnDate = true;
    } else {
      this.leaveInfoOnDate = false;
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

}
</script>

<style lang="less">
.leave-info-on-date {
    min-height: 60px;
    .user-item{
      margin-left: 5px;
    }
}
</style>
