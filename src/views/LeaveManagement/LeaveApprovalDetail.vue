<template>
    <v-card>
        <v-toolbar>
          <v-toolbar-title>
            <v-avatar
              slot="activator"
              size="45px">
              <img v-if="message.avatar"
                :src="message.avatar"
                alt="Avatar">
            </v-avatar>
              &nbsp;
            <strong v-html="message.name"></strong>
            <div class="sub-info">2018-10-21 14:29:01</div>
          </v-toolbar-title>
          <v-chip outline color="lime darken-1">
              <v-avatar>
                <v-icon>update</v-icon>
              </v-avatar>
              Pending
            </v-chip>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-menu bottom left>
            <v-btn slot="activator" icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(item, i) in actions"
                :key="i">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

            <v-btn icon @click="saveOrCloseClicked()">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex xs12 sm12 md6>
                
                  <v-list two-line>
                    <v-subheader class="subheading">Information</v-subheader>
                    <v-list-tile >
                      <v-list-tile-action>
                        <v-icon>receipt</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                          <v-list-tile-sub-title>Leave Type</v-list-tile-sub-title>
                        <v-list-tile-title>Sick Leave</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile >
                      <v-list-tile-action>
                        <v-icon>event</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-sub-title>Period (5 days)</v-list-tile-sub-title>
                        <v-list-tile-title>2018-10-15 &nbsp;<i class="material-icons" style="font-size: 10px">arrow_forward</i>&nbsp; 2018-10-20</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile >
                      <v-list-tile-action>
                        <v-icon>chat</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-sub-title>Reason</v-list-tile-sub-title>
                        <v-list-tile-title>I'll be in your neighborhood doing errands this weekend. Do you want to hang out. Really! Do you want to hang out?</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                

                <v-list two-line>
                  <template v-for="(item, index) in items">
                    <v-subheader class="subheading"
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
                      <v-tooltip v-model="item.showComment" left max-width="200">
                          <span>{{item.comment}}</span>
                      </v-tooltip>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                        <v-list-tile-sub-title>
                          <span @click='item.showComment = !item.showComment' class="clickable">View comment</span>
                        </v-list-tile-sub-title>
                      </v-list-tile-content>

                      <v-icon color="green darken-2">check</v-icon>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-flex>

              <v-flex xs12 sm12 md6>
                  <v-date-picker
                    readonly
                    color="cyan"
                    v-model="noDate"
                    :events="checkThatDate"
                    :event-color="'green lighten-1'"
                    @input="onCalendarSelected()"
                    full-width
                    class="margin-top-20">
                  </v-date-picker>

                  <v-list two-line>
                  <template v-for="(item, index) in itemsForCalendar">
                    <v-subheader class="subheading"
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

                      <v-icon :color="item.color">{{item.status}}</v-icon>
                    </v-list-tile>
                  </template>
                </v-list>
              </v-flex>

              <v-flex sx12 sm12 md12>
                  <v-text-field
                        label="Comment"
                        placeholder="Write your comment here">
                </v-text-field>
                
                <div class="text-xs-right text-sm-right text-md-right request-buttons">
                    <v-btn color="red" flat @click.native="newFormdialog = false" @click="saveOrCloseClicked()">Reject</v-btn>
                    <v-btn color="green" flat @click.native="newFormdialog = false" @click="saveOrCloseClicked()">Approve</v-btn>
                </div>
              </v-flex>
            </v-layout>
        </v-container>
        </v-card-text>
      </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class LeaveApprovalDetail extends Vue {
  public newFormdialog: boolean = false;
  public noDate: any;

  public message: any = {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          avatar2: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          name2: 'Oui Manan',
          msg: ' are absent on this day'
        }
  public markedDates: number[] =[15, 16, 17, 18, 19, 20];

public items: any[] = [
    { header: 'History' },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Anan Khafli <span class="grey--text text--lighten-1">(Team Leader)</span>',
    subtitle: "2018-10-19 14:29:01",
    showComment: false,
    comment: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Adam Khoo <span class="grey--text text--lighten-1">(Project Manager)</span>',
    subtitle: "2018-10-19 14:29:01",
    showComment: false,
    comment: "Wish I could come, but I'm out of town this weekend.",
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui Manan <span class="grey--text text--lighten-1">(HR Department)</span>',
    subtitle: "2018-10-19 14:29:01",
    showComment: false,
    comment: "Do you have Paris recommendations? Have you ever been?",
    }
];

public itemsForCalendar: any[] = [
    { header: 'Team Leaves' },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Ali Connors <span class="grey--text text--lighten-1">(Sick Leave)</span>',
    subtitle: "2018-10-17",
    status: 'check',
    color: 'green darken-2'
    },
    { divider: true, inset: true },
    {
    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    title: 'Travis Howard <span class="grey--text text--lighten-1">(Vacation Leave)</span>',
    subtitle: "2018-10-19 &nbsp;<i class='material-icons' style='font-size: 10px'>arrow_forward</i>&nbsp; 2018-10-20",
    status: 'update',
    color: 'lime darken-1'
    }
];

public actions: any[] = [
        { title: 'Edit' },
        { title: 'Delete' }
      ];

  constructor() {
    super();

    this.noDate = null;
  }

  public mounted() {
   
  }

  public checkThatDate (date: any) {
    const [,, day] = date.split('-')
    var result = this.markedDates.filter((d) => d == parseInt(day, 10));
    if(result.length > 0){
      return true;
    }
    return false;
  }

  public saveOrCloseClicked() {
    this.$emit("on-button-clicked", this.newFormdialog);
  }
}
</script>

<style lang="less">
.v-toolbar {
  .sub-info {
    font-size: 13px;
    margin-top: -15px;
    padding-left: 62px;
  }
}

.v-tooltip {
  .v-tooltip__content {
    margin-left: 20px;
    min-width: 200px;
    font-size: 14px;
  }
}

.margin-top-20{
  margin-top: 20px;
}

.request-buttons{
    .v-btn{
        margin: 0;
    }
}
</style>
