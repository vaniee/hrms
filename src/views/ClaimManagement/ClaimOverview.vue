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
              </v-list-tile-content>
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

          <div class="claim-info-on-date">
              <br/>
              <div v-if="claimInfoOnDate">
                  <v-avatar
                  slot="activator"
                  size="36px">
                  <img
                      v-if="message.avatar"
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      alt="Avatar">
                  </v-avatar>
                  &nbsp;
                  <strong v-html="message.name"></strong>
                  <span>{{message.msg}}</span>
              </div>
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
export default class ClaimOverview extends Vue {
public items: any[] = [
    { header: 'Team members' },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Anan Khafli <span class="grey--text text--lighten-1">(Business Trip)</span>',
    subtitle: "<span class='text--primary'>From <b>2018-11-20</b> to <b>2018-11-22</b></span> &mdash; 800000 (VND)"
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Adam Khoo <span class="grey--text text--lighten-1">(Other)</span>',
    subtitle: "<span class='text--primary'>From <b>2018-09-02</b> to <b>2018-09-13</b></span> &mdash; 600 (USD)"
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui Manan <span class="grey--text text--lighten-1">(Business Trip)</span>',
    subtitle: "<span class='text--primary'>From <b>2018-08-20</b> to <b>2018-08-30</b></span> &mdash; 5000000 (VND)"
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Anan Khafli <span class="grey--text text--lighten-1">(Insurance)</span>',
    subtitle: "<span class='text--primary'>From <b>2018-08-15</b> to <b>2018-08-20</b></span> &mdash; 300000000 (VND)"
    }
];
public noDate: any;
public message: any = {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          msg: ' is absent on this day'
        }
  public claimInfoOnDate: boolean = false;

constructor() {
    super();
    this.noDate = null;
}

public onCalendarSelected() {
    if (this.checkThatDate(this.noDate)) {
      this.claimInfoOnDate = true;
    } else {
      this.claimInfoOnDate = false;
    }
  }

public checkThatDate (date: any) {
    const [,, day] = date.split('-')
    return parseInt(day, 10) % 3 === 0 // some days have been booked by other employee
}

}
</script>

<style>
.claim-info-on-date {
    min-height: 60px;
}
</style>
