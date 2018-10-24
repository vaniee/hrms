<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1">
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <span slot="activator">
            {{ props.header.text }}
          </span>
          <span>
            {{ props.header.text }}
          </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.leaveType }}</td>
        <td class="text-xs-left">{{ props.item.startDate }}</td>
        <td class="text-xs-left">{{ props.item.endDate }}</td>
        <td class="text-xs-left">{{ props.item.submitDate }}</td>
        <td class="text-xs-left">{{ props.item.status }}</td>
        <td class="justify-center">
          <v-icon
            small
            @click="detail(props.item)">
            info
          </v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class LeaveApprovalList extends Vue {
  public dialog: boolean = false;
  public headers: any[] = [
    {
      text: 'Apply To',
      align: 'left',
      sortable: false,
      value: 'applyTo'
    },
    { text: 'Leave Type', value: 'leaveType' },
    { text: 'Start Date', value: 'startDate' },
    { text: 'End Date', value: 'endDate' },
    { text: 'Submit Date', value: 'submitDate' },
    { text: 'Status', value: 'status' },
    { text: '', value: '' }
  ];
  public desserts: any[] = [
    {
      value: false,
      name: 'Frozen Yogurt',
      startDate: "2018-09-15",
      endDate: "2018-09-18",
      leaveType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Ice cream sandwich',
      startDate: "2018-09-12",
      endDate: "2018-09-18",
      leaveType: "Vacation Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Eclair',
      startDate: "2018-08-01",
      endDate: "2018-09-18",
      leaveType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Cupcake',
      startDate: "2018-02-25",
      endDate: "2018-09-18",
      leaveType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Gingerbread',
      startDate: "2018-09-12",
      endDate: "2018-09-18",
      leaveType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Jelly bean',
      startDate: "2018-10-12",
      endDate: "2018-09-18",
      leaveType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Lollipop',
      startDate: "2018-10-12",
      endDate: "2018-09-18",
      leaveType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Honeycomb',
      startDate: "2018-10-12",
      endDate: "2018-09-18",
      leaveType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Donut',
      startDate: "2018-10-05",
      endDate: "2018-09-18",
      leaveType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    },
    {
      value: false,
      name: 'KitKat',
      startDate: "2018-10-09",
      endDate: "2018-09-18",
      leaveType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Approved'
    }
  ];


  constructor() {
    super();
  }


  public created () {
      
  };

  public detail (item: any) {
    this.$router.replace({path: ""});
  }
}
</script>
