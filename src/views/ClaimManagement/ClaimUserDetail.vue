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
          <v-chip outline color="teal">
              <v-avatar>
                <v-icon>check_circle</v-icon>
              </v-avatar>
              Approved
            </v-chip>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon @click="saveOrCloseClicked()">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
  <v-card-text>
          <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex xs12>
                  <v-list two-line>
                    <v-list-tile >
                      <v-list-tile-action>
                        <v-icon>person</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                          <v-list-tile-sub-title>Apply To</v-list-tile-sub-title>
                        <v-list-tile-title>Anan Khafli</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>

                     <v-divider inset></v-divider>
                     
                    <v-list-tile >
                      <v-list-tile-action>
                        <v-icon>receipt</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                          <v-list-tile-sub-title>Claim Type</v-list-tile-sub-title>
                        <v-list-tile-title>Business Trip</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile >
                      <v-list-tile-action>
                        <v-icon>attach_money</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-sub-title>Total (VND)</v-list-tile-sub-title>
                        <v-list-tile-title>90000000000</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>

                    <v-divider inset></v-divider>

                    <v-list-tile xs6 sm4>
                      
                      <v-list-tile-action>
                        <v-icon>date_range</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-sub-title>Application Date</v-list-tile-sub-title>
                        <v-list-tile-title>2018-10-26</v-list-tile-title>
                      </v-list-tile-content>
                    
                    </v-list-tile>
                    <v-divider inset></v-divider>

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
                   <v-toolbar-title>Files</v-toolbar-title>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          
        </v-list>               
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
export default class ClaimUserDetail extends Vue {
  public newFormdialog: boolean = false;
  public noDate: any;

  public message: any = {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          avatar2: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          name2: 'Oui Manan',
          msg: ' are absent on this day'
        }
  public claimInfoOnDate: boolean = false;

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
public items1: any[] = [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
        ];
public items2: any[] = [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Invoice', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Receipt', subtitle: 'Jan 10, 2014' }
        ];

  constructor() {
    super();

    this.noDate = null;
  }

  public mounted() {
   
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
        return (parseInt(day, 10) === 18 || parseInt(day, 10) === 19 || parseInt(day, 10) === 20) // some days have been booked by other employee
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
</style>
