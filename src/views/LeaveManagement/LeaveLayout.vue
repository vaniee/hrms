<template>
  <div>
    <v-toolbar color="white" tabs>
      <v-toolbar-title>Leave Request Management</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="dialog = true">
        <v-icon>note_add</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-tabs v-model="tabs"
              slot="extension"
              color="white"
              slider-color="yellow">
        <v-tab href="#tab-1">
          Overview
          <v-icon class="top-negative-3">dashboard</v-icon>
        </v-tab>

        <v-tab href="#tab-2">
          My Request
          <v-icon class="top-negative-3">account_circle</v-icon>
        </v-tab>

        <v-tab href="#tab-3">
          Approval
          <v-icon class="top-negative-3">supervisor_account</v-icon>
        </v-tab>

      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <router-view></router-view>
    </v-tabs-items>

    <v-dialog v-model="dialog" persistent max-width="800px">
        <LeaveNewForm @on-button-clicked="onButtonClicked"/>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LeaveNewForm from "@/views/LeaveManagement/LeaveNewForm.vue";

@Component({
  components: {
    LeaveNewForm
  },
})
export default class LeaveHome extends Vue {
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
.top-negative-3 {
  margin-top: -3px
}
</style>