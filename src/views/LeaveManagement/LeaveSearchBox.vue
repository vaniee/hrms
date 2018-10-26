<template>
    <v-card>
        <v-card-title>
          <span class="headline">Leave Filter</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 sm12 md12>
                <v-select
                  :items="['Eugenia', 'Taylor', 'Rhea', 'Mira']"
                  label="Apply To"
                  prepend-icon="account_box">
                  </v-select>

                  <v-select
                  :items="['Sick Leave', 'Vacation Leave', 'Business Trip']"
                  label="Leave Type"
                  prepend-icon="insert_drive_file">
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
              </v-flex>
            </v-layout>
        </v-container>
        
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="newFormdialog = false" @click="saveOrCloseClicked()">Apply</v-btn>
          <v-btn color="blue darken-1" flat @click.native="newFormdialog = false" @click="saveOrCloseClicked()">Close</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class LeaveSearchBox extends Vue {
  public newFormdialog: boolean = false;
  public noDate: any;

  public date: any;
  public date2: any;
  public modal: boolean = false;
  public modal2: boolean = false;

  constructor() {
    super();

    this.noDate = null;
    this.date = null;
    this.date2 = null;
  }

  public mounted() {
   
  }

  public saveOrCloseClicked() {
    this.$emit("on-button-clicked", this.newFormdialog);
  }
}
</script>

<style>

</style>
