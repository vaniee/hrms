<template>
  <div>
    <v-toolbar color="grey" dark tabs>
      <v-toolbar-title>Leave Request Management</v-toolbar-title>
      <v-spacer></v-spacer>      
      <v-btn icon @click="dialog = true">
        <v-icon>note_add</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-tabs color="grey" dark icons-and-text v-model="tabs"
              slot="extension">
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab href="#tab-1">
          Overview
          <v-icon>dashboard</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          My Request
          <v-icon>account_circle</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Approval
          <v-icon>supervisor_account</v-icon>
        </v-tab>

      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item :id="'tab-' + 1">
        <v-card flat>
          <v-card-text>1. {{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item :id="'tab-' + 2">
        <v-card flat>
          <LeaveUserList />
        </v-card>
      </v-tab-item>
      <v-tab-item :id="'tab-' + 3">
        <v-card flat>
          <v-card-text>3. {{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>


    <v-dialog v-model="dialog" persistent max-width="800px">
        <LeaveNewForm @on-button-clicked="onButtonClicked"/>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LeaveUserList from "@/views/LeaveManagement/LeaveUserList.vue";
import LeaveNewForm from "@/views/LeaveManagement/LeaveNewForm.vue";

@Component({
  components: {
    LeaveUserList, LeaveNewForm
  },
})
export default class LeaveHome extends Vue {
  public text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  public dialog: boolean = false;
  public tabs: any = null;

  constructor() {
    super();
  }

  

  public onButtonClicked(dialog: boolean): any {
    this.dialog = dialog;
  }
}
</script>

<style>

</style>