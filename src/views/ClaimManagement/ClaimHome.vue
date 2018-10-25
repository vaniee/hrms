<template>
  <div>
    <v-toolbar color="grey" dark tabs>
      <v-toolbar-title>Claim Request Management</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-btn icon @click="dialog = true">
        <v-icon>note_add</v-icon>
      </v-btn>
      <v-btn icon @click.stop="setting = true">
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-tabs color="grey" dark icons-and-text v-model="tabs"
              slot="extension">
        <v-tabs-slider color="yellow"></v-tabs-slider>
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
          <v-icon>assignment_turned_in</v-icon>
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
          <ClaimUserList />
        </v-card>
      </v-tab-item>
      <v-tab-item :id="'tab-' + 3">
        <v-card flat>
          <ClaimManagerList />
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-dialog v-model="dialog" persistent max-width="800px">
        <ClaimNewForm @on-button-clicked="onButtonClicked"/>
    </v-dialog>
     <v-dialog v-model="setting" persistent max-width="800px">
        <ClaimSettingForm @on-button-clicked="onButtonClicked"/>
    </v-dialog>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClaimUserList from "@/views/ClaimManagement/ClaimUserList.vue";
import ClaimNewForm from "@/views/ClaimManagement/ClaimNewForm.vue";
import ClaimSettingForm from "@/views/ClaimManagement/ClaimSettingForm.vue";
import ClaimManagerList from "@/views/ClaimManagement/ClaimManagerList.vue";

@Component({
  components: {
    ClaimUserList, ClaimNewForm,ClaimManagerList, ClaimSettingForm
  },
})
export default class ClaimHome extends Vue {
   public tabs: any = null;
public dialog: boolean = false;
  public setting: boolean = false;
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