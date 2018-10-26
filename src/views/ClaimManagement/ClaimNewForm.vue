<template>
   <v-card>
        <v-card-title>
          <span class="headline">Claim Request</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
               <v-flex xs12 sm6 md6>
                <v-select
                  :items="['Johnathan Frozen Yogurt', 'Ice cream sandwich', 'Margaret E. Gillespie']"
                  label="Apply To*"
                  required
                ></v-select>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex xs12 sm6 md4>
                <v-select
                  :items="['Insurance', 'Business Trip', 'Others']"
                  label="Claim Type*"
                  required
                ></v-select>
                <v-spacer></v-spacer>
                </v-flex>

              <v-flex xs12 sm6 md4>
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
                    label="Application Date"
                    prepend-icon="event"
                    readonly>
                  </v-text-field>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <v-flex xs12 sm6 md4>
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
                    label="Expense From"
                    prepend-icon="event"
                    readonly>
                  </v-text-field>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
            <v-flex xs12 sm6 md4>
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
                    label="Expense To"
                    prepend-icon="event"
                    readonly>
                  </v-text-field>
                  <v-date-picker v-model="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <v-flex xs12 sm6 md6>
                 <v-select
                  :items="['Food', 'Taxi']"
                  label="Expense Item"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Amount" style="text-align:right" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md2>
                <v-select
                  :items="['VND', 'USD', 'HKD', 'EURO']"
                  label="Currency"
                  required
                ></v-select>
              </v-flex>
                
              <v-flex xs12>
                <v-text-field
                    label="Reason"
                    value=""
                    hint="Type the reason for request"></v-text-field>
              </v-flex>
            <v-flex xs12>
                <div>
                  <h3>Upload Document</h3>
                    <input type="file">
                </div>
            </v-flex>
            
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" @click="saveOrCloseClicked()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" @click="saveOrCloseClicked()">Save</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class ClaimNewForm extends Vue {
  public dialog: boolean = false;
  public noDate: any;
  public date: any;
  public date2: any;
  public modal: boolean = false;
  public modal2: boolean = false;
  public message: any = {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          msg: ' will be absent on this day'
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
    this.$emit("on-button-clicked", this.dialog);
  }
}
</script>

<style>

</style>
