<template>
  <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.native="dialog = false" @click="saveOrCloseClicked()">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark flat @click.native="dialog = false" @click="saveOrCloseClicked()">Save</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sendEmail"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Email</v-list-tile-title>
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
        </v-list>

        <v-divider></v-divider>

        <v-list three-line subheader>
          <v-subheader>Permission</v-subheader>
          <v-list-tile
            v-for="item in people"
            :key="item.title"
            avatar>
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon :color="item.active ? 'teal' : 'grey'">chat_bubble</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

      </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    
  },
})
export default class LeaveSetting extends Vue {
public dialog: boolean = false;
public sendEmail: boolean = false;
public sound: boolean = true;

public people: any[] = [
  { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
  { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
  { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
  { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
];

constructor() {
    super();
  }

  public saveOrCloseClicked() {
    this.$emit("on-button-clicked", this.dialog);
  }

}
</script>