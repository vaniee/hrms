<template>
    <v-card>
        <v-card-title>
          <span class="headline">Leave Request</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 sm12 md6>
                 <v-select
                  :items="['Eugenia', 'Taylor', 'Rhea', 'Mira']"
                  label="Apply To"
                  prepend-icon="account_box">
                  </v-select>

                  <v-select
                  :items="['Sick Leave', 'Vacation Leave', 'Business Trip']"
                  label="Leave Type"
                  prepend-icon="receipt">
                  </v-select>

                  <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  lazy
                  full-width
                  width="290px">
                  <v-text-field
                    slot="activator"
                    v-model="date"
                    label="Start date"
                    prepend-icon="event"
                    readonly>
                  </v-text-field>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>

                <v-dialog
                  ref="dialog2"
                  v-model="modal2"
                  :return-value.sync="date2"
                  persistent
                  lazy
                  full-width
                  width="290px">
                  <v-text-field
                    slot="activator"
                    v-model="date2"
                    label="End date"
                    prepend-icon="event"
                    readonly>
                  </v-text-field>
                  <v-date-picker v-model="date2" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog2.save(date2)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>

                 <v-textarea
                    label="Reason"
                    value=""
                    hint="Type the reason for request"></v-textarea>
              </v-flex>

              <v-flex xs12 sm12 md6>
                  <v-date-picker
                    color="cyan"
                    v-model="noDate"
                    :events="checkThatDate"
                    :event-color="d => (d >= date && d <= date2) ? 'red' : 'green lighten-1'"
                    @input="onCalendarSelected()"
                    full-width>
                  </v-date-picker>

                  <div v-if="leaveInfoOnDate">
                    <br/>
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
              </v-flex>
            </v-layout>
        </v-container>
        
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="newFormdialog = false" @click="saveOrCloseClicked()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="newFormdialog = false" @click="saveOrCloseClicked()">Submit</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class LeaveNewForm extends Vue {
  public newFormdialog: boolean = false;
  public noDate: any;

  public date: any;
  public date2: any;
  public modal: boolean = false;
  public modal2: boolean = false;

  public message: any = {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          msg: ' is absent on this day'
        }
  public leaveInfoOnDate: boolean = false;

  constructor() {
    super();

    this.noDate = null;
    this.date = null;
    this.date2 = null;
  }

  public mounted() {
   
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
    return parseInt(day, 10) % 4 === 0 // some days have been booked by other employee
  }

  public saveOrCloseClicked() {
    this.$emit("on-button-clicked", this.newFormdialog);
  }
}
</script>

<style>

</style>
