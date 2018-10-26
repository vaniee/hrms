<template>
  <div>
    <v-toolbar color="white" tabs>
      <v-toolbar-title>Leave Request Management</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="dialog = true">
        <v-icon>note_add</v-icon>
      </v-btn>
      <v-btn icon @click="settingDialog = true">
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-tabs v-model="tabs"
              slot="extension"
              color="white"
              slider-color="yellow">
        <v-tab href="#tab-1">
          Overview
        </v-tab>

        <v-tab href="#tab-2">
          My Request
        </v-tab>

        <v-tab href="#tab-3">
          Approval
        </v-tab>

      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <router-view></router-view>
    </v-tabs-items>

    <v-dialog v-model="dialog" persistent max-width="900px">
        <LeaveNewForm @on-button-clicked="onButtonClicked"/>
    </v-dialog>

    <v-dialog v-model="settingDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <LeaveSetting @on-button-clicked="onSettingButtonClicked"/>>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LeaveNewForm from "@/views/LeaveManagement/LeaveNewForm.vue";
import LeaveSetting from "@/views/LeaveManagement/LeaveSetting.vue";

@Component({
  components: {
    LeaveNewForm, LeaveSetting
  },
})
export default class LeaveHome extends Vue {
  public dialog: boolean = false;
  public settingDialog : boolean = false;
  public tabs: any = null;

  constructor() {
    super();
  }  

  public onButtonClicked(dialog: boolean): any {
    this.dialog = dialog;
  }

  public onSettingButtonClicked(dialog: boolean) :any {
    this.settingDialog = dialog;
  }
}
</script>

<style>
/*
.top-negative-3 {
  margin-top: -3px
}
*/
</style>