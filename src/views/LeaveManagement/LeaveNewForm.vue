<template>
    <v-card>
        <v-card-title>
          <span class="headline">New Leave Request</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age"
                  required></v-select>
              </v-flex>
              <v-flex xs12 sm12 md6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age"
                  required></v-select>
              </v-flex>
              
              <v-flex xs12 sm12 md6>
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
                    label="Picker in dialog"
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

              <v-flex xs12 sm12 md6>
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
                    label="Picker in dialog"
                    prepend-icon="event"
                    readonly>
                  </v-text-field>
                  <v-date-picker v-model="date2" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog2.save(date2)">OK</v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-flex>

              <v-flex xs12 sm12 md12>
                  <v-date-picker
                    color="cyan"
                    v-model="noDate"
                    :events="arrayEvents"
                    event-color="green lighten-1"
                    full-width
                  ></v-date-picker>
              </v-flex>

              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                  chips></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="newFormdialog = false" @click="saveOrCloseClicked()">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="newFormdialog = false" @click="saveOrCloseClicked()">Save</v-btn>
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
  public arrayEvents: any = [];

  constructor() {
    super();

    this.noDate = null;
    this.date = null;
    this.date2 = null;
  }

  public mounted() {
    this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
      })
  }


  public saveOrCloseClicked() {
    this.$emit("on-button-clicked", this.newFormdialog);
    console.log(this.date[9]);
  }
}
</script>
