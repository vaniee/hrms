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
              <v-list-tile-title>Application date</v-list-tile-title>
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
              <v-list-tile-title>Expense date</v-list-tile-title>
              <v-list-tile-sub-title>{{date2}}</v-list-tile-sub-title>
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
              <span class="clickable">Show all</span>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

        <v-list two-line subheader>
          <v-subheader>Properties</v-subheader>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon class="font-size-action clickable">add_circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              Add Claim Type
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
              <span class="clickable">Show all</span>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon class="font-size-action clickable">add_circle</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              Add Currency
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
              <span class="clickable">Show all</span>
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
export default class ClaimSetting extends Vue {
public dialog: boolean = false;
public notifications: boolean = false;
public sound: boolean = true;
public widgets: boolean = false

constructor() {
    super();
  }

  public saveOrCloseClicked() {
    this.$emit("on-button-clicked", this.dialog);
  }

}
</script>