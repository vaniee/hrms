<template>
<div>
    <router-link to="/employeelistpublic">
        <v-layout row>
            <v-flex xs12>
                <v-card class="custom-ripple" ripple height="100">
                    <div class="title pl-3 pt-3">Public Employee List</div>
                </v-card>
            </v-flex>
        </v-layout>
    </router-link>

    <router-link to="/employeelistmanager">
        <v-layout row>
            <v-flex xs12>
                <v-card class="custom-ripple" ripple height="100">
                    <div class="title pl-3 pt-3">Manager Employee List</div>
                </v-card>
            </v-flex>
        </v-layout>
    </router-link>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from "vue-property-decorator";

@Component({
    components: {}
})
export default class EmployeeDirectory extends Vue {

}
</script>

<style scoped>
.theme--light.v-card {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}

.theme--light.v-card>.title {
    padding: 0 !important;
}

a {
    text-decoration: none;
}
</style>
