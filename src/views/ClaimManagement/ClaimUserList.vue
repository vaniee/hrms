<template>
  <div>
    <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details 
        width ="25px"
      ></v-text-field>
      <v-spacer></v-spacer>
      <div class="spacer hidden-sm-and-down"></div>
       <v-spacer></v-spacer>
      <v-select
      :items="['Status', 'Type', 'Date']"
      label="Sort By">
      </v-select>
    </v-card-title>
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
        <td class="text-xs-left">{{ props.item.ClaimType }}</td>
        <td class="text-xs-left">{{ props.item.endDate }}</td>
        <td class="text-xs-left">{{ props.item.total }}</td>
        <td class="text-xs-left">{{ props.item.status }}</td>
        <td class="justify-center">
        </td>
      </template>
    </v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class ClaimUserList extends Vue {
  public dialog: boolean = false;
  public search: any = '';
 public headers: any[] = [
    
    {
      text: 'Apply To',
      align: 'left',
      sortable: false,
      value: 'applyTo'
    },
    { text: 'Claim Type', value: 'ClaimType' },
    { text: 'Expense Date', value: 'endDate' },
    { text: 'Total (VND)', value: 'total' },
    { text: 'Status', value: 'status' },
    { text: '', value: '' }
  ];
  public desserts: any[] = [
    {
      value: false,
      name: 'Frozen Yogurt',
      endDate: "2018-09-18",
      ClaimType: "Sick claim",
      total: "100000000000",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Ice cream sandwich',
      endDate: "2018-09-18",
      ClaimType: "Vacation claim",
      total: "100000000000",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Eclair',
      endDate: "2018-09-18",
      ClaimType: "Sick claim",
      total: "100000000000",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Cupcake',
      endDate: "2018-09-18",
      ClaimType: "Sick claim",
      total: "100000000000",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Gingerbread',
      endDate: "2018-09-18",
      ClaimType: "Sick claim",
      total: "100000000000",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Jelly bean',
      endDate: "2018-09-18",
      ClaimType: "Sick claim",
      total: "100000000000",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Lollipop',
      endDate: "2018-09-18",
      ClaimType: "Sick claim",
      total: "100000000000",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Honeycomb',
      endDate: "2018-09-18",
      ClaimType: "Sick claim",
      total: "100000000000",
      status: 'Approved'
    },
    {
      value: false,
      name: 'Donut',
      endDate: "2018-09-18",
      ClaimType: "Sick claim",
      total: "100000000000",
      status: 'Approved'
    },
    {
      value: false,
      name: 'KitKat',
      endDate: "2018-09-18",
      ClaimType: "Sick claim",
      total: "100000000000",
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
