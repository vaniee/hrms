<template>
  <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="dialog = false" @click="saveOrCloseClicked()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.native="dialog = false" @click="saveOrCloseClicked()">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-switch v-model="sendEmail"></v-switch>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Email</v-list-tile-title>
              <v-list-tile-sub-title>Send email to approver, requester, manager</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  lazy
                  full-width
                  width="290px">
                  <v-icon slot="activator">event</v-icon>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Start date</v-list-tile-title>
              <v-list-tile-sub-title>{{date}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-dialog
                  ref="dialog2"
                  v-model="modal2"
                  :return-value.sync="date2"
                  persistent
                  lazy
                  full-width
                  width="290px">
                  <v-icon slot="activator">event</v-icon>
                  <v-date-picker v-model="date2" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog2.save(date2)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>End date</v-list-tile-title>
              <v-list-tile-sub-title>{{date2}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-dialog
                  ref="alDialog"
                  v-model="alModal"
                  :return-value.sync="alDate"
                  persistent
                  lazy
                  full-width
                  width="290px">
                  <v-icon slot="activator">event</v-icon>
                  <v-date-picker v-model="alDate" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="alModal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.alDialog.save(alDate)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Start date of annual leave</v-list-tile-title>
              <v-list-tile-sub-title>{{alDate}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-dialog
                  ref="alDialog2"
                  v-model="alModal2"
                  :return-value.sync="alDate2"
                  persistent
                  lazy
                  full-width
                  width="290px">
                  <v-icon slot="activator">event</v-icon>
                  <v-date-picker v-model="alDate2" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="alModal2 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.alDialog2.save(alDate2)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>End date of annual leave</v-list-tile-title>
              <v-list-tile-sub-title>{{alDate2}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          
        </v-list>

        <v-divider></v-divider>

        <v-list two-line subheader>
          <v-subheader>Permission</v-subheader>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon class="font-size-action clickable">add_circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              Add people
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="item in people"
            :key="item.title"
            avatar>
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title>{{item.role}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon :color="item.active ? 'teal' : 'grey'" class="clickable">edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile>
            <v-spacer></v-spacer>
            <v-list-tile-action>
              <v-btn flat>
                <span>Show all</span>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list two-line subheader>
          <v-subheader>Leave Type</v-subheader>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon class="font-size-action clickable">add_circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              Add leave type
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="item in leaveTypes"
            :key="item.title"
            ripple
            avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title>{{item.status}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon class="clickable">edit</v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile>
            <v-spacer></v-spacer>
            <v-list-tile-action>
              <v-btn flat>
                <span>Show all</span>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

      </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    
  },
})
export default class LeaveSetting extends Vue {
public dialog: boolean = false;
public sendEmail: boolean = false;
public date: any;
public date2: any;
public modal: boolean = false;
public modal2: boolean = false;
public alDate: any;
public alDate2: any;
public alModal: boolean = false;
public alModal2: boolean = false;

public people: any[] = [
  { active: false, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', role: 'Approver' },
  { active: false, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', role: 'Administrator' },
  { active: false, title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', role: 'Approver' },
  { active: false, title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', role: 'Manager' }
];

public leaveTypes: any[] = [
  { title: 'Annual Leave (AL)', code: 'AL', status: 'Active' },
  { title: 'Sick Leave (SL)', code: 'SL', status: 'Inactive' },
  { title: 'Business Trip (BT)', code: 'BT', status: 'Active' },
  { title: 'Vacation Leave (VL)', code: 'VL', status: 'Active' }
];

constructor() {
    super();
    this.date = "2018-01-01";
    this.date2 = "2018-12-31";
    this.alDate = "2018-02-15";
    this.alDate2 = "2019-02-15";
  }

  public saveOrCloseClicked() {
    this.$emit("on-button-clicked", this.dialog);
  }

}
</script>

<style>
  .font-size-action {
    font-size: 40px !important;
  }
</style>