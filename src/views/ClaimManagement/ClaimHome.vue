<template>
  <div>
      <v-tab-item :id="'tab-' + 1">
        <v-card flat>
          <ClaimUserList />
        </v-card>
      </v-tab-item>
      <v-tab-item :id="'tab-' + 2">
        <v-card flat>
          <ClaimApprovalList/>
        </v-card>
      </v-tab-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClaimUserList from "@/views/ClaimManagement/ClaimUserList.vue";
import ClaimApprovalList from "@/views/ClaimManagement/ClaimApprovalList.vue";

@Component({
  components: {
     ClaimUserList, ClaimApprovalList
  },
})
export default class ClaimHome extends Vue {

constructor() {
    super();
  }

}
</script>