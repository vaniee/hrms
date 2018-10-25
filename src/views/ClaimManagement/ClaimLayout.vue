<template>
  <div>
    <v-toolbar color="white" tabs>
      <v-toolbar-title>Claim Request Management</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="add = !add">
        <v-icon>note_add</v-icon>
      </v-btn>
      <v-btn icon @click.stop="setting = !setting">
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
          <v-icon class="top-negative-3">assignment_turned_in</v-icon>
        </v-tab>

      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <router-view></router-view>
    </v-tabs-items>

    <v-dialog v-model="dialog" persistent max-width="800px">
        <ClaimNewForm @on-button-clicked="onButtonClicked"/>
    </v-dialog>

    <v-navigation-drawer
      v-model="add"
      absolute
      temporary
      width = "500"
    >
      <ClaimNewForm @on-button-clicked="onButtonClicked"/>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="setting"
      absolute
      temporary
      width = "500"
    >
      <ClaimSettingForm @on-button-clicked="onButtonClicked"/>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClaimNewForm from "@/views/ClaimManagement/ClaimNewForm.vue";
import ClaimSettingForm from "@/views/ClaimManagement/ClaimSettingForm.vue";
@Component({
  components: {
    ClaimNewForm,ClaimSettingForm
  },
})
export default class ClaimHome extends Vue {
  public dialog: boolean = false;
  public tabs: any = null;
  public add: any =  null;
  public setting: any =  null;
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