<template>
  <div>
    <h1>
      Игра началась!
    </h1>
    <b-progress :value="80" variant="primary" class="mb-3"
    ></b-progress>
    <b-card-group columns>
      <b-card title="Nigger" style="max-width: 20rem;" class="mb-2">
        <b-form-radio-group :options="options" stacked>
        </b-form-radio-group>
      </b-card>
      <b-card title="Onion" style="max-width: 20rem;" class="mb-2">
        <b-form-radio-group :options="options2" stacked>
        </b-form-radio-group>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "Play",
  data() {
    return {
      selected: 'first',
      options: [
        { text: 'Негр', value: 'first' },
        { text: 'Табуретка', value: 'second' },
        { text: 'Штукатурить', value: 'third' }
      ],
      options2: [
        { text: 'Баклажан', value: 'first' },
        { text: 'Лук', value: 'second' },
        { text: 'Котлета', value: 'third' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
