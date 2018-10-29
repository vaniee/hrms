<template>
<v-app>
    <v-layout row>
        <v-flex xs12>
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
            <v-container fluid grid-list-md text-xs-center class="card-container">
                <v-layout row wrap>
                    <v-flex xs12 sm6 md3 v-for="item in dataTable" :key="item.name" class="card-item">
                        <v-hover>
                            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" v-ripple height="170">
                                <v-list-tile avatar @click="dialog = true; selectedItem = item">
                                    <v-layout fill-height>
                                        <v-list-tile-avatar>
                                            <img :src="item.avatar">
                                            </v-list-tile-avatar>

                                            <v-list-tile-content>
                                                <v-list-tile-title class="headline">{{item.name}}</v-list-tile-title>
                                                <v-list-tile-sub-title class="title font-weight-light">{{item.job}}</v-list-tile-sub-title>
                                                <v-list-tile-sub-title>{{item.department}}</v-list-tile-sub-title>
                                                <v-list-tile-sub-title>{{item.email}}</v-list-tile-sub-title>
                                            </v-list-tile-content>
                                    </v-layout>
                                </v-list-tile>
                            </v-card>
                        </v-hover>
                    </v-flex>
                </v-layout>
            </v-container>

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

                                    <v-select :items="['Male', 'Female']" label="Gender" prepend-icon="wc">
                                    </v-select>

                                    <v-select :items="['Sweden', 'Vietnam']" label="Nationality" prepend-icon="home">
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
            <v-dialog v-model="dialog" max-width="500" scrollable>
                <v-card class="personDialog">
                    <v-btn icon>
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-layout align-center justify-center column>
                        <v-avatar :size="200">
                            <img :src="selectedItem.avatar" alt="avatar">
                        </v-avatar>
                            <v-card-title>
                                <v-layout align-center justify-center column fill-height pt-4 pb-3>
                                    <div class="display-1">{{selectedItem.name}}</div>
                                    <v-layout mt-2>
                                        <div class="headline font-weight-light">{{selectedItem.job}}</div>
                                    </v-layout>
                                </v-layout>
                            </v-card-title>
                    </v-layout>

                    <v-card-text>
                        <v-list two-line>
                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon>phone</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                                    <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                                <v-list-tile-action></v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                                    <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-divider inset></v-divider>

                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon>mail</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>{{selectedItem.email}}</v-list-tile-title>
                                    <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile>
                                <v-list-tile-action></v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>{{selectedItem.email}}</v-list-tile-title>
                                    <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-divider inset></v-divider>

                            <v-list-tile>
                                <v-list-tile-action>
                                    <v-icon>location_on</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>{{selectedItem.national}}</v-list-tile-title>
                                    <v-list-tile-sub-title>{{selectedItem.address}}</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card-text>
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

    public selectedItem: any = {
        value: false,
        avatar: '',
        name: '',
        department: '',
        email: '',
        job: '',
        address: ''
    };

    public searchBoxDialog: boolean = false;

    public dialog: any = false;

    public isActive: boolean = false;

    public dataTable: any = [{
        avatar: 'https://cdn.vuetifyjs.com/images/lists/ali.png',
        name: 'Sara Laurent',
        department: 'Sweden HR Department',
        email: 'saralaurent@gmail.com',
        job: 'Operation Manager',
        national: 'Sweden',
        address: '91 street, Town'
    }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Phan Văn Thịnh',
        department: 'Vietnam IT Department',
        email: 'thinhphan@gmail.com',
        job: 'Developer',
        national: 'Vietnam',
        address: '12 street, Town'
    }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        name: 'Travis Howard',
        department: 'Sweden HR Department',
        email: 'travishoward@gmail.com',
        job: 'Tester',
        national: 'Sweden',
        address: '18 Dien Bien Phu, Distric 1'
    }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Jessica Karen',
        department: 'Sweden HR Department',
        email: 'jessicakaren@gmail.com',
        job: 'Technical Leader',
        national: 'Sweden',
        address: '11 street, Town'

    }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'John Mallett',
        department: 'Sweden HR Department',
        email: 'johnmallett@gmail.com',
        job: 'Leader',
        national: 'Sweden',
        address: '89 street, Town'

    }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        name: 'Mary Johnson',
        department: 'Vietnam IT Department',
        email: 'maryjohnson@gmail.com',
        job: 'Manager',
        national: 'Vietnam',
        address: '21 Dien Bien Phu, Distric 1'
    }]
}
</script>

<style lang="less">
.personDialog {
    .v-card__text,
    .v-card,
    .v-list {
        padding: 0 !important;
    }
}

.card-container {
    .card-item {
        padding: 10px !important;

        .v-card {
            padding: 20px;
        }

        .v-list__tile {
            padding: 0;
            height: 100%;
            overflow: hidden;
        }

        .v-avatar {
            height: 80px !important;
            width: 80px !important;
            margin-top: 5px;
            margin-left: 5px;
        }

        .v-list__tile__content {
            line-height: 25px;
            height: 100%;
            width: 100%;
            margin: 5px 0 0 50px;

            .v-list__tile__sub-title.title {
                margin-top: 15px;
                margin-bottom: 20px;
                font-size: 20px !important;
            }
        }
    }
}
</style>
