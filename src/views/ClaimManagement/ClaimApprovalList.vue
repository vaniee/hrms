<template>
  <div>
    <v-card>
      <v-card-title>
        <v-layout wrap>
          <v-flex xs6 sm6 md6>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details>
            </v-text-field>
          </v-flex>
          <v-flex xs6 sm6 md3 offset-md3
                text-xs-right text-sm-right text-md-right> 
            <v-btn @click="searchBoxDialog = true" class="hidden-sm-and-down">
              <span>Filter</span>
              <v-icon dark >filter_list</v-icon>
            </v-btn>

            <v-btn @click="searchBoxDialog = true" class="hidden-md-and-up">
              <v-icon dark>filter_list</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card-title>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :pagination.sync="pagination"
      :search="search"
      item-key="name"
      class="elevation-1">
      <template slot="headers" slot-scope="props">
      <tr>
        <th v-for="header in props.headers"
          :style="{width: header.width}"
          :key="header.text"
          :class="[(header.value == 'claimType'|| header.value == 'endDate' || header.value == 'submitDate' || header.value == 'status') ? 'hidden-sm-and-down' : '',
          'column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '', 'align-left']"
          @click="changeSort(header.value)">
          {{ header.text }}
          <v-icon small>arrow_upward</v-icon>
        </th>
      </tr>
      </template>

     
      <template slot="items" slot-scope="props">
        <tr class="clickable">
          <td @click="openDetailDialog()"> 
            <v-avatar slot="activator" size="36px">
              <img :src="props.item.avatar">
          </v-avatar>
            {{ props.item.name }}
          </td>
          <td class="text-xs-left hidden-sm-and-down" @click="openDetailDialog()">{{ props.item.claimType }}</td>
          <td class="text-xs-left" @click="openDetailDialog()">{{ props.item.startDate }}</td>
          <td class="text-xs-left hidden-sm-and-down" @click="openDetailDialog()">{{ props.item.submitDate }}</td>
          <td class="text-xs-left hidden-sm-and-down" @click="openDetailDialog()">{{ props.item.total }}</td>
          <td class="text-xs-left hidden-sm-and-down" @click="openDetailDialog()">{{ props.item.status }}</td>
          <td class="text-xs-left"> 
            <v-icon medium
              @click="props.expanded = !props.expanded">reorder</v-icon>
          </td>
        </tr>
      </template>
      <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-card-text>
          <v-avatar
              slot="activator"
              size="36px">
              <img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="Avatar">
          </v-avatar>
          <span> Johnathan Frozen Yogurt: "Hotel Costs" - 700000 VND</span>
        </v-card-text>

        <v-layout wrap class="brief-info">
          <v-flex xs12 sm6 md9>
            <v-text-field
              label="Comment">
            </v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3 text-xs-right text-sm-right text-md-right>
            <v-btn color="btn-success-important" @click="props.expanded = false">Approve</v-btn>
            <v-btn color="btn-error-important" @click="props.expanded = false">Reject</v-btn>
          </v-flex>
        </v-layout>

      </v-card>
    </template>
    </v-data-table>

    <v-dialog v-model="detailDialog" persistent max-width="900px">
        <ClaimApprovalDetail @on-button-clicked="onButtonClicked"/>
    </v-dialog>

    <v-dialog v-model="searchBoxDialog" persistent max-width="500px">
        <ClaimSearchBox @on-button-clicked="onSearchBoxButtonClicked"/>
    </v-dialog>
    </v-card>    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ClaimSearchBox from "@/views/ClaimManagement/ClaimSearchBox.vue";
import ClaimApprovalDetail from "@/views/ClaimManagement/ClaimApprovalDetail.vue";

@Component({
  components: {
    ClaimSearchBox, ClaimApprovalDetail
  },
})
export default class ClaimApprovalList extends Vue {
  public detailDialog: boolean = false;
  public searchBoxDialog: boolean = false;
  public pagination: any = {
        sortBy: 'name'
  };
  public headers: any[] = [
    {
      text: 'Request From',
      align: 'left',
      sortable: false,
      value: 'name'
    },
    { text: 'Claim Type', value: 'claimType' },
    { text: 'Application Date', value: 'startDate', width: '50px' },
    { text: 'Date of Expense', value: 'submitDate'},
    { text: 'Total Claim', value: 'total' },
    { text: 'Status', value: 'status' },
    { text: '', value: '', width: '50px'}
  ];
  public desserts: any[] = [
    {
      value: false,
      name: 'Johnathan Frozen Yogurt',
      startDate: "2018-09-15",
      total: 109000,
      claimType: "Sick Claim",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
    },
    {
      value: false,
      name: 'Ice cream sandwich',
      startDate: "2018-09-12",
      total: 900000,
      claimType: "Vacation Claim",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
    },
    {
      value: false,
      name: 'Margaret E. Gillespie',
      startDate: "2018-08-01",
      total: 400000,
      claimType: "Sick Claim",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
    },
    {
      value: false,
      name: 'Darrel K. Nieves',
      startDate: "2018-02-25",
      total: 100000,
      claimType: "Vacation Claim",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
    },
    {
      value: false,
      name: 'Adrian Merrill',
      startDate: "2018-09-12",
      total: 69000,
      claimType: "Sick Claim",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
    },
    {
      value: false,
      name: 'Julian Rutledge',
      startDate: "2018-10-12",
      total:5000000,
      claimType: "Business Trip",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
    },
    {
      value: false,
      name: 'Moses Mcconnell',
      startDate: "2018-10-12",
      total: 30000000,
      claimType: "Vacation Leave",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'
    },
    {
      value: false,
      name: 'Honeycomb',
      startDate: "2018-10-12",
      total: "400000000",
      claimType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
    },
    {
      value: false,
      name: 'Moses C. Molina',
      startDate: "2018-10-05",
      total: 60000000,
      claimType: "Sick Leave",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'
    },
    {
      value: false,
      name: 'Zorita Schneider',
      startDate: "2018-10-09",
      total: 36000000,
      claimType: "Business Trip",
      submitDate: "2018-09-19",
      status: 'Pending',
      avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'
    }
  ];
  public search: string = '';

  constructor() {
    super();
  }


  public created () {
      
  };

  public changeSort (column: any) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }


  public onButtonClicked(dialog: boolean): any {
    this.detailDialog = dialog;
  }

  public onSearchBoxButtonClicked(dialog: boolean): any {
    this.searchBoxDialog = dialog;
  }

  public openDetailDialog(): any {
    this.detailDialog = true;
  }

  public detail (item: any) {
    //this.$router.replace({path: "", name: ""});
  }
}
</script>

<style scoped>
.v-card__title{
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);
}
</style>

<style>
.align-left {
  text-align: left;
}

.clickable{
  cursor: pointer;
}

.btn-success-important {
  color: white !important;
  background-color: #4caf50 !important;
  border-color: #4caf50 !important;
}

.btn-error-important {
  color: white !important;
  background-color: #ff5252 !important;
  border-color: #ff5252 !important; 
}

.brief-info{
  padding-left: 15px;
  padding-right: 15px;
}
</style>