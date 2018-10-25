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
      ></v-text-field>
       <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      <div class="spacer hidden-sm-and-down"></div>
       <v-spacer></v-spacer>
      <v-select
      :items="['Status', 'Type', 'Date']"
      label="Filter">
      </v-select>
    </v-card-title>
     <v-data-table
      :headers="headers"
      :items="desserts"
       :search="search"
       
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
       <tr @click="expanded[props.item.name] = !expanded[props.item.name]">
        <td><v-avatar><img v-bind:src="props.item.avatar" width="50"/></v-avatar></td>
        <td class="text-xs-left"><router-link to="/ClaimUserDetail">{{ props.item.name }}</router-link></td>
        <td class="text-xs-left">{{ props.item.claimType }}</td>
        <td class="text-xs-left">{{ props.item.startDate }}</td>
        <td class="text-xs-left">{{ props.item.endDate }}</td>
        <td class="text-xs-left">{{ props.item.total }}</td>
        <td class="justify-center">
          <v-btn icon @click="DetailDialog = true">
        <v-icon>info</v-icon>
         <v-dialog v-model="DetailDialog" persistent max-width="800px">
        <ClaimNewForm @on-button-clicked="onButtonClicked"/>
    </v-dialog>
      </v-btn>
        </td>
      </tr>
                <tr v-show="expanded[props.item.name]">
                  <td colspan="50%">
                    <v-expansion-panel>
                      <v-expansion-panel-content v-model="expanded[props.item.name]">
                        <v-card>
        <v-text-field
                    label="Comment"
                    value=""
                    hint="Type the comment for this request"></v-text-field>
        <td class="text-xs-left"><v-btn color="cyan">Approve</v-btn></td>
        <td class="text-xs-left"><v-btn color="grey">Reject</v-btn></td>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  </td>
                </tr>
      </template>

      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
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
export default class ClaimManagerList extends Vue {
  public dialog: boolean = false;
  public DetailDialog: boolean = false;
  public search: any = '';
  public expanded:any = {};
  public headers: any[] = [
    { text: '', value: 'avatar' },
    {
      text: 'Request From',
      align: 'left',
      sortable: false,
      value: 'requestFrom'
    },
    { text: 'Claim Type', value: 'claimType' },
    { text: 'Application Date', value: 'startDate' },
    { text: 'Expense Date', value: 'endDate' },
    { text: 'Total (VND)', value: 'total' },
    { text: 'Status', value: 'status' },
    { text: '', value: '' }
  ];
  public desserts: any[] = [
    {
      value: false,
      id:1,
      avatar:'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
      name: 'Frozen Yogurt',
      startDate: "2018-09-15",
      endDate: "2018-09-18",
      claimType: "Insurance",
      total: "60000",
      status: 'Approved'
    },
    {
      value: false,
      avatar:'https://cdn.vuetifyjs.com/images/john.jpg',
      name: 'Ice cream sandwich',
      startDate: "2018-09-12",
      endDate: "2018-09-18",
      claimType: "Transport",
      total: "14500000",
      status: 'Approved'
    },
    {
      value: false,
      avatar:'https://avatars.githubusercontent.com/u/170270?v=3',
      name: 'Eclair',
      startDate: "2018-08-01",
      endDate: "2018-09-18",
      claimType: "Business Trip",
      total: "1000000",
      status: 'Approved'
    },
    {
      value: false,
      avatar:'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      name: 'Cupcake',
      startDate: "2018-02-25",
      endDate: "2018-09-18",
      claimType: "Transport",
      total: "59000",
      status: 'Approved'
    },
    {
      value: false,
      avatar:'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      name: 'Gingerbread',
      startDate: "2018-09-12",
      endDate: "2018-09-18",
      claimType: "Sick claim",
      total: "465000",
      status: 'Approved'
    },
    {
      value: false,
      avatar:'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      name: 'Jelly bean',
      startDate: "2018-10-12",
      endDate: "2018-09-18",
      claimType: "Sick claim",
      total: "7000000",
      status: 'Approved'
    },
    {
      value: false,
      avatar:'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      name: 'Lollipop',
      startDate: "2018-10-12",
      endDate: "2018-09-18",
      claimType: "Sick claim",
      total: "7000000",
      status: 'Approved'
    },
    {
      value: false,
      avatar:'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      name: 'Honeycomb',
      startDate: "2018-10-12",
      endDate: "2018-09-18",
      claimType: "Sick claim",
      total: "7000000",
      status: 'Approved'
    },
    {
      value: false,
      avatar:'https://cdn.vuetifyjs.com/images/lists/ali.png',
      name: 'Donut',
      startDate: "2018-10-05",
      endDate: "2018-09-18",
      claimType: "Sick claim",
      total: "7000000",
      status: 'Approved'
    },
    {
      value: false,
      avatar:'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      name: 'KitKat',
      startDate: "2018-10-09",
      endDate: "2018-09-18",
      claimType: "Sick claim",
      total: "7000000",
      status: 'Approved'
    }
  ];


  constructor() {
    super();
  }


    public created () {
    this.desserts.forEach(i => {
      this.$set(this.expanded, i.name, false) 
    })
    console.log(this.expanded)
  }

  public detail (item: any) {
    this.$router.replace({path: ""});
  }
  public onButtonClicked(DetailDialog: boolean): any {
    this.DetailDialog = DetailDialog;
  }
}
</script>
