<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
    <v-breadcrumbs>
      <v-icon slot="divider">forward</v-icon>

      <v-breadcrumbs-item
        v-for="item in items"
        :disabled="item.disabled"
        :key="item.text">
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>

    <v-breadcrumbs>
      <v-icon slot="divider">chevron_right</v-icon>

      <v-breadcrumbs-item
        v-for="item in items"
        :disabled="item.disabled"
        :key="item.text">
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  public items: any[] = [
          {
            text: 'Dashboard',
            disabled: false
          },
          {
            text: 'Link 1',
            disabled: false
          },
          {
            text: 'Link 2',
            disabled: true
          }
        ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
