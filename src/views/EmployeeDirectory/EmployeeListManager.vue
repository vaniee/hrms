<template>
<v-app>
    <v-layout row>
        <v-flex xs12>
            <v-toolbar color="white">
                <v-toolbar-title>Employee Directory Management</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="modal = true">
                    <v-icon>note_add</v-icon>
                </v-btn>
                <v-btn icon @click="settingDialog = true">
                    <v-icon>more_vert</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-title>
                <v-layout wrap>
                    <v-flex xs6 sm6 md6>
                        <v-text-field append-icon="search" label="Search" single-line hide-details>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs6 sm6 md3 offset-md3 text-xs-right text-sm-right text-md-right>
                        <v-btn @click="searchBoxDialog = true" class="hidden-sm-and-down">
                            <span>Filter</span>
                            <v-icon dark>filter_list</v-icon>
                        </v-btn>

                        <v-btn @click="searchBoxDialog = true" class="hidden-md-and-up">
                            <v-icon dark>filter_list</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-card-title>

            <v-data-table v-model="selected" :headers="headers" :items="dataTable" :pagination.sync="pagination" select-all item-key="name" class="elevation-1">
                <template slot="headers" slot-scope="props">
                    <tr>
                        <th v-for="header in props.headers" :key="header.text" :class="['column sortable text-xs-'+ header.align, pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']" @click="changeSort(header.value)">
                            <v-icon small>arrow_upward</v-icon>
                            {{ header.text }}
                        </th>
                    </tr>
                </template>
                <template slot="items" slot-scope="props">
                    <tr>
                        <td class="text-xs-left">
                            <v-avatar :size="36">
                                <img :src="props.item.avatar" alt="avatar">
                             </v-avatar>
                        </td>

                        <td class="text-xs-left">{{ props.item.name }}</td>
                        <td class="text-xs-left">{{ props.item.department }}</td>
                        <td class="text-xs-left">{{ props.item.dob }}</td>
                        <td class="text-xs-left">{{ props.item.gender }}</td>
                        <td class="justify-center layout px-0">
                            <v-btn flat icon @click="dialog = true">
                                <v-icon small>edit</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </template>
            </v-data-table>
            <v-dialog v-model="modal" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Add new Employee</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="First name *" required prepend-icon="edit"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="Middle name"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field label="Last name *" required></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-text-field label="Email *" required prepend-icon="email"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field label="Password *" type="password" required prepend-icon="security"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field label="Password *" type="password" required prepend-icon="replay"></v-text-field>
                                </v-flex>
                                <v-flex xs12>
                                    <v-select :items="['Male', 'Female']" label="Gender *" required prepend-icon="wc"></v-select>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat @click.native="modal = false">Close</v-btn>
                        <v-btn flat @click.native="modal = false">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card>
                    <v-toolbar tabs color="white">
                        <v-btn icon @click.native="dialog = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Employee Detail</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog = false">
                            <v-icon>delete</v-icon>
                        </v-btn>
                        <v-btn icon @click="dialog = false">
                            <v-icon>save</v-icon>
                        </v-btn>

                        <v-tabs v-model="tabs" slot="extension">
                            <v-tab href="#tab-1">
                                Profile
                            </v-tab>

                            <v-tab href="#tab-2">
                                Personal information
                            </v-tab>

                            <v-tab href="#tab-3">
                                Communication
                            </v-tab>

                            <v-tab href="#tab-4">
                                Dependent
                            </v-tab>

                            <v-tab href="#tab-5">
                                Document
                            </v-tab>

                            <v-tab href="#tab-6">
                                Employee Contract
                            </v-tab>

                             <v-tab href="#tab-7">
                                Activity
                            </v-tab>
                        </v-tabs>
                    </v-toolbar>

                    <v-tabs-items v-model="tabs">
                        <v-tab-item v-for="i in 7" :id="'tab-' + i" :key="i">
                            <v-container fluid grid-list-md text-xs-center>
                                <v-list three-line subheader>
                                    <v-subheader>Employee Profile</v-subheader>
                                    <v-layout row wrap>
                                        <v-flex xs12 sm9 md9>
                                            <v-list-tile>
                                                <v-text-field xs12 sm6 md4 label="First name *" required prepend-icon="edit"></v-text-field>
                                                <v-text-field xs12 sm6 md4 label="Middle name"></v-text-field>
                                                <v-text-field xs12 sm6 md4 label="Last name *" required></v-text-field>
                                            </v-list-tile>
                                            <v-list-tile>
                                                <v-text-field xs12 sm12 md12 label="Email *" required prepend-icon="email"></v-text-field>
                                            </v-list-tile>
                                            <v-list-tile>
                                                <v-select xs12 sm6 md4 :items="['Male', 'Female']" label="Gender *" required prepend-icon="wc"></v-select>
                                                <v-select xs12 sm6 md4 :items="['Sweden', 'Vietnam']" label="Nationality" required prepend-icon="home"></v-select>
                                                <v-select xs12 sm6 md4 :items="['Christianity', 'Buddhism', 'Islam']" label="Religion" required prepend-icon="favorite"></v-select>
                                            </v-list-tile>
                                        </v-flex>
                                        <v-flex xs12 sm3 md3>
                                            <v-layout align-center justify-center column fill-height pl-3>
                                                <v-avatar :size="150">
                                                    <img src="https://cdn.vuetifyjs.com/images/lists/ali.png" alt="avatar">
                                                  </v-avatar>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                </v-list>
                                <v-divider></v-divider>
                                <v-list three-line subheader>
                                    <v-subheader>Permanent address</v-subheader>
                                    <v-layout row wrap>
                                        <v-flex xs12 sm9 md9>
                                            <v-list-tile>
                                                <v-text-field xs12 sm1 md1 label="No." required prepend-icon="home"></v-text-field>
                                                <v-text-field xs12 sm5 md5 label="Street"></v-text-field>
                                                <v-text-field xs12 sm6 md3 label="Ward" required></v-text-field>
                                                <v-text-field xs12 sm6 md3 label="District" required></v-text-field>
                                            </v-list-tile>
                                            <v-list-tile>
                                                <v-text-field xs12 sm1 md1 label="City" required prepend-icon="location_city"></v-text-field>
                                                <v-select xs12 sm6 md4 :items="['Sweden', 'Vietnam']" label="Country" required prepend-icon="location_on"></v-select>
                                                <v-select xs12 sm6 md4 :items="['Hà Nội', 'TP Hồ Chí Minh']" label="Province" required prepend-icon="location_on"></v-select>
                                            </v-list-tile>
                                        </v-flex>
                                    </v-layout>
                                </v-list>
                            </v-container>
                        </v-tab-item>
                    </v-tabs-items>
                </v-card>
            </v-dialog>

            <v-dialog v-model="searchBoxDialog" persistent max-width="500">
                <v-card>
                    <v-card-title>
                        <span class="headline">Employee Filter</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-center>
                                <v-flex xs12 sm12 md12>
                                    <v-text-field label="ID card number" single-line prepend-icon="perm_identity"></v-text-field>
                                    <v-select xs12 sm12 md12 :items="['Male', 'Female']" label="Gender" prepend-icon="wc">
                                    </v-select>
                                    <v-select xs12 sm12 md12 :items="['Sweden', 'Vietnam']" label="Nationality" prepend-icon="home">
                                    </v-select>
                                </v-flex>
                            </v-layout>
                        </v-container>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="newFormdialog = false" @click="searchBoxDialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" flat @click.native="newFormdialog = false" @click="searchBoxDialog = false">Apply</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="settingDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card>
                    <v-toolbar>
                        <v-btn icon @click.native="settingDialog = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>Settings</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn flat @click.native="settingDialog = false">Save</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                        <v-subheader>User Controls</v-subheader>
                        <v-list-tile avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>Content filtering</v-list-tile-title>
                                <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>Password</v-list-tile-title>
                                <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                    <v-divider></v-divider>
                    <v-list three-line subheader>
                        <v-subheader>General</v-subheader>
                        <v-list-tile avatar>
                            <v-list-tile-action>
                                <v-checkbox v-model="notifications"></v-checkbox>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Notifications</v-list-tile-title>
                                <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile avatar>
                            <v-list-tile-action>
                                <v-checkbox v-model="sound"></v-checkbox>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Sound</v-list-tile-title>
                                <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile avatar>
                            <v-list-tile-action>
                                <v-checkbox v-model="widgets"></v-checkbox>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                                <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-dialog>

        </v-flex>
    </v-layout>
</v-app>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator';

@Component({
    components: {},
})
export default class EmployeeListPublic extends Vue {
    constructor() {
        super();
    }

    public notifications: any = null;
    public sound: any = null;
    public widgets: any = null;
    public datePicker: any = false;

    public dialog: any = false;
    public date: any = null;

    public modal: any = false;
    public searchBoxDialog: boolean = false;

    public settingDialog: any = false;

    public tabs: any = null;

    public isActive: boolean = false;

    public pagination: any = {
        sortBy: 'name'
    };
    public selected: any = [];

    public headers: any = [{
            text: 'Avatar',
            align: 'left',
            value: 'avatar'
        }, {
            text: 'Name',
            align: 'left',
            value: 'name'
        },
        {
            text: 'Department',
            align: 'left',
            value: 'department'
        },
        {
            text: 'Date of birth',
            align: 'left',
            value: 'dob'
        },
        {
            text: 'Gender',
            align: 'left',
            value: 'gender'
        },
        {
            text: 'Actions',
            value: 'name',
            sortable: false
        }

    ];
    public dataTable: any = [{
            value: false,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
            name: 'Sara Laurent',
            department: 'Sweden HR Department',
            dob: 'May 17, 1985',
            gender: 'Female',
        },{
            value: false,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
            name: 'Sara Laurent',
            department: 'Sweden HR Department',
            dob: 'May 17, 1985',
            gender: 'Female',
        },{
            value: false,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
            name: 'Sara Laurent',
            department: 'Sweden HR Department',
            dob: 'May 17, 1985',
            gender: 'Female',
        },{
            value: false,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
            name: 'Sara Laurent',
            department: 'Sweden HR Department',
            dob: 'May 17, 1985',
            gender: 'Female',
        },{
            value: false,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
            name: 'Sara Laurent',
            department: 'Sweden HR Department',
            dob: 'May 17, 1985',
            gender: 'Female',
        },{
            value: false,
            avatar: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
            name: 'Sara Laurent',
            department: 'Sweden HR Department',
            dob: 'May 17, 1985',
            gender: 'Female',
        }
    ]

    public changeSort(column) {
        if (this.pagination.sortBy === column) {
            this.pagination.descending = !this.pagination.descending
        } else {
            this.pagination.sortBy = column
            this.pagination.descending = false
        }
    }

}
</script>

<style lang="less" scoped>
nav.v-toolbar.theme--light.white {
    box-shadow: none;
}

.v-card__title {
    background: #fff;
}
</style>
