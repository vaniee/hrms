<template>
  <form>
    <v-text-field
      v-model="name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-select
      :items="items"
      v-model="select"
      label="Select"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      value="1"
      label="Option"
      type="checkbox"
      required
    ></v-checkbox>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class LeaveForm extends Vue {
  public name: string = '';
  public email: string = '';
  public select: any = null;
  public items: any[] = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
  ];
  public checkbox: boolean = true;

  constructor() {
    super();
  }

  public submit () {
    console.log("Submitted");
  }
  public clear () {
        this.name = ''
        this.email = ''
        this.select = ""
        this.checkbox = false;
  }
}
</script>
