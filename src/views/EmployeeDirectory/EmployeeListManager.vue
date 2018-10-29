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
                            <v-btn flat icon @click="dialog = true; selectedItem = props.item; avatar = props.item.avatar">
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

                    <v-tabs-items v-model="tabs" class="grid-input">
                        <v-tab-item v-for="i in 7" :id="'tab-' + i" :key="i">
                            <v-container fluid grid-list-md text-xs-center>
                                <v-list three-line subheader>
                                    <v-subheader>Employee Profile</v-subheader>
                                    <v-layout row wrap>
                                        <v-flex xs12 sm9 md9>
                                            <v-list-tile>
                                                <v-text-field xs12 sm6 md4 box value="Jessica " label="First name"></v-text-field>
                                                <v-text-field xs12 sm6 md4 box value="K." label="Middle name"></v-text-field>
                                                <v-text-field xs12 sm6 md4 box value="Karen" label="Last name"></v-text-field>
                                            </v-list-tile>
                                            <v-list-tile>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-content expand-icon="remove">
                                                        <div slot="header">Add email</div>
                                                        <v-card>
                                                            <v-text-field label="Email"></v-text-field>
                                                        </v-card>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                            </v-list-tile>
                                            <v-list-tile>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-content expand-icon="remove">
                                                        <div slot="header">Add gender</div>
                                                        <v-card>
                                                            <v-select :items="['Male', 'Female']" label="Gender"></v-select>
                                                        </v-card>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                            </v-list-tile>
                                            <v-list-tile>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-content expand-icon="remove">
                                                        <div slot="header">Add nationality</div>
                                                        <v-card>
                                                            <v-select :items="['Sweden', 'Vietnam']" label="Nationality"></v-select>
                                                        </v-card>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                            </v-list-tile>
                                            <v-list-tile>
                                                <v-expansion-panel>
                                                    <v-expansion-panel-content expand-icon="remove">
                                                        <div slot="header">Add religion</div>
                                                        <v-card>
                                                            <v-select :items="['Christianity', 'Buddhism', 'Islam']" label="Religion"></v-select>
                                                        </v-card>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                            </v-list-tile>
                                        </v-flex>
                                        <v-flex xs12 sm3 md3>
                                            <v-layout align-start justify-start column fill-height pl-3>
                                                <div class="avatar-upload">
                                                    <div class="avatar-edit">
                                                        <input type='file' id="imageUpload" @change="readURL">
                                                        <v-hover>
                                                            <label for="imageUpload" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 5}`" class="mx-auto"><v-icon large>add_circle_outline</v-icon></label>
                                                        </v-hover>
                                                    </div>
                                                    <div class="avatar-preview">
                                                        <div ref="imagePreview" :style="{ backgroundImage: 'url(' + avatar + ')' }">
                                                        </div>
                                                    </div>
                                                </div>

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
                                                <v-text-field xs12 sm1 md1 box value="12" label="No."></v-text-field>
                                                <v-expansion-panel xs12 sm5 md5>
                                                    <v-expansion-panel-content expand-icon="remove">
                                                        <div slot="header">Add street</div>
                                                        <v-card>
                                                            <v-text-field label="Street"></v-text-field>
                                                        </v-card>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                                <v-expansion-panel xs12 sm5 md5>
                                                    <v-expansion-panel-content expand-icon="remove">
                                                        <div slot="header">Add ward</div>
                                                        <v-card>
                                                            <v-text-field label="Ward"></v-text-field>
                                                        </v-card>
                                                    </v-expansion-panel-content>
                                                </v-expansion-panel>
                                                <v-text-field xs12 sm6 md3 box value="Distric 1" label="District"></v-text-field>
                                            </v-list-tile>
                                            <v-list-tile>
                                                <v-flex xs12 sm6 md4>
                                                    <v-expansion-panel>
                                                        <v-expansion-panel-content expand-icon="remove">
                                                            <div slot="header">Add city</div>
                                                            <v-card>
                                                                <v-text-field label="City"></v-text-field>
                                                            </v-card>
                                                        </v-expansion-panel-content>
                                                    </v-expansion-panel>
                                                </v-flex>

                                                <v-flex xs12 sm6 md4>
                                                    <v-expansion-panel>
                                                        <v-expansion-panel-content expand-icon="remove">
                                                            <div slot="header">Add country</div>
                                                            <v-card>
                                                                <v-select :items="['Sweden', 'Vietnam']" label="Country"></v-select>
                                                            </v-card>
                                                        </v-expansion-panel-content>
                                                    </v-expansion-panel>
                                                </v-flex>

                                                <v-flex xs12 sm6 md4>
                                                    <v-select :items="['Hà Nội', 'TP Hồ Chí Minh']" value="Hà Nội" label="Province"></v-select>
                                                </v-flex>

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
    public selectedItem: any = {
        value: false,
        avatar: '',
        name: '',
        department: '',
        email: '',
        job: '',
        address: ''
    };

    public readURL(input) {
        let file = input.target.files;

        if (file && file[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(file[0]);
            this.avatar = reader.result;
        }
    }
    public avatar: any = null;

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
        dob: 'Nov 2, 1980',
        gender: 'Female',
    }, {
        value: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'Phan Văn Thịnh',
        department: 'Vietnam IT Department',
        dob: 'Jul 23, 1983	',
        gender: 'Male',
    }, {
        value: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        name: 'Travis Howard',
        department: 'Sweden HR Department',
        dob: 'May 17, 1985',
        gender: 'Female',
    }, {
        value: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'Jessica Karen',
        department: 'Sweden HR Department',
        dob: 'Jun 29, 2018	',
        gender: 'Female',
    }, {
        value: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'John Mallett',
        department: 'Sweden HR Department',
        dob: 'Jul 23, 1983',
        gender: 'Male',
    }, {
        value: false,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        name: 'Mary Johnson',
        department: 'Vietnam IT Department',
        dob: 'Jun 13, 1982',
        gender: 'Female',
    }]

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

<style lang="less">
.grid-input {
    .v-text-field--box {
        .v-input__slot {
            padding-left: 0 !important;
            background: transparent !important;

            &:hover {
                background: transparent !important;
            }
        }
    }

    .v-expansion-panel {
        box-shadow: none;

        .v-expansion-panel__container {
            .v-expansion-panel__header {
                margin-top: -6px;
                padding: 0;
                color: rgba(0, 0, 0, .54);
                transition: all .25s;
                opacity: 1;
                visibility: visible;

                &:hover {
                    color: rgba(0, 0, 0, .87);
                }

                .v-expansion-panel__header__icon {
                    z-index: 999;
                    display: none;
                    margin-top: -15px;
                }
            }

            .v-expansion-panel__body {
                opacity: 0;
                visibility: hidden;
                margin-top: -50px;
                display: block !important;

                .v-input .v-label {
                    margin-top: 2px;
                }
            }

            &--active {
                .v-expansion-panel__header {
                    margin-top: 10px;

                    >div:first-child {
                        opacity: 0;
                        visibility: hidden;
                    }

                    .v-expansion-panel__header__icon {
                        display: block
                    }
                }

                .v-expansion-panel__body {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }

    .v-input {
        padding: 0;

        .v-label {
            margin-top: 10px;
        }

        &.v-text-field {
            .v-label--active {
                top: 0;
            }

            &>.v-input__control>.v-input__slot:before {
                display: none;
            }
        }

        &.v-select .v-label {
            margin-top: 5px;
        }

        &__append-inner {
            display: none !important;
        }
    }
}
</style><style lang="less" scoped>
nav.v-toolbar.theme--light.white {
    box-shadow: none;
}

.v-card__title {
    background: #fff;
}

.avatar-upload {
    position: relative;
    max-width: 205px;
    margin: 50px auto;

    .avatar-edit {
        position: absolute;
        right: 12px;
        z-index: 1;
        top: 10px;

        input {
            display: none;

            +label {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 34px;
                height: 34px;
                margin-bottom: 0;
                border-radius: 100%;
                background: #FFFFFF;
                border: 1px solid transparent;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
                cursor: pointer;
                transition: all .2s ease-in-out;

                &:hover {
                    background: #f1f1f1;
                    border-color: #d6d6d6;
                }
            }
        }
    }

    .avatar-preview {
        width: 192px;
        height: 192px;
        position: relative;
        border-radius: 100%;
        border: 6px solid #F8F8F8;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

        >div {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
}
</style>
