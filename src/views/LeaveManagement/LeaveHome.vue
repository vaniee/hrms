<template>
  <div>
    <v-tab-item :id="'tab-' + 1">
        <v-card flat>
          <LeaveOverview />
        </v-card>
      </v-tab-item>
      <v-tab-item :id="'tab-' + 2">
        <v-card flat>
          <LeaveUserList />
        </v-card>
      </v-tab-item>
      <v-tab-item :id="'tab-' + 3">
        <v-card flat>
          <LeaveApprovalList/>
        </v-card>
      </v-tab-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LeaveOverview from "@/views/LeaveManagement/LeaveOverview.vue";
import LeaveUserList from "@/views/LeaveManagement/LeaveUserList.vue";
import LeaveApprovalList from "@/views/LeaveManagement/LeaveApprovalList.vue";

@Component({
  components: {
    LeaveOverview, LeaveUserList, LeaveApprovalList
  },
})
export default class LeaveHome extends Vue {

constructor() {
    super();
  }

}
</script>