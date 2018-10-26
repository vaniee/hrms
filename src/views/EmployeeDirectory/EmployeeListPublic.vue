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
                    <v-flex xs12 sm6 md3 v-for="item in 10" :key="item" class="card-item">

                        <v-hover>
                            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="mx-auto" v-ripple>
                                <v-list-tile avatar @click="dialog = true">
                                    <v-list-tile-avatar>
                                        <img src="https://cdn.vuetifyjs.com/images/lists/ali.png">
                                   </v-list-tile-avatar>

                                        <v-list-tile-content>
                                            <v-list-tile-title>John Mallett</v-list-tile-title>
                                            <v-list-tile-sub-title>Operation Manager</v-list-tile-sub-title>
                                        </v-list-tile-content>
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
                    <v-layout align-center justify-center column pt-4>
                        <v-avatar :size="200">
                            <img src="https://cdn.vuetifyjs.com/images/lists/ali.png" alt="avatar">
                        </v-avatar>
                            <v-card-title>
                                <div class="display-1">Ali Conners</div>
                            </v-card-title>
                    </v-layout>

                    <v-card-text>
                        <v-list two-line>
                            <v-list-tile v-ripple>
                                <v-list-tile-action>
                                    <v-icon>phone</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                                    <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-icon>chat</v-icon>
                                </v-list-tile-action>
                            </v-list-tile>

                            <v-list-tile v-ripple>
                                <v-list-tile-action></v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                                    <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-icon>chat</v-icon>
                                </v-list-tile-action>
                            </v-list-tile>

                            <v-divider inset></v-divider>

                            <v-list-tile v-ripple>
                                <v-list-tile-action>
                                    <v-icon>mail</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                                    <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-list-tile v-ripple>
                                <v-list-tile-action></v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
                                    <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>

                            <v-divider inset></v-divider>

                            <v-list-tile v-ripple>
                                <v-list-tile-action>
                                    <v-icon>location_on</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title>1400 Main Street</v-list-tile-title>
                                    <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
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

    public searchBoxDialog: boolean = false;

    public dialog: any = false;

    public isActive: boolean = false;
}
</script>

<style lang="less">
.personDialog {

    .v-card__text,
    .v-list {
        padding: 0;
    }
}

.card-container .card-item, .card-container .card-item .v-card {
    padding: 10px !important;
}
</style>
