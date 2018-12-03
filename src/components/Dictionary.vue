<template>
  <div>
    <b-modal centered v-model="modal.show" title="Edit">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-group label="English">
          <b-form-input type="text" placeholder="Translation" v-model="modal.eng"></b-form-input>
        </b-form-group>
        <b-form-group label="Russian">
          <b-form-input type="text" placeholder="Перевод" v-model="modal.rus"></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <b-list-group>
      <b-list-group-item
        v-for="(word, index) in words"
        :key="word.eng"
        @click="openModal(index)"
        href="#"
        class="flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{word.eng}}</h5>
        </div>
        <p class="mb-1">{{word.rus}}</p>
        <small>{{word.details}}</small>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: [
        {
          eng: "dude",
          rus: "чувак"
        },
        {
          eng: "onion",
          rus: "лук"
        }
      ],
      modal: {
        show: false,
        eng: "",
        rus: "",
        details: ""
      }
    };
  },
  methods: {
    openModal() {
      this.modal.show = true;
    }
  }
};
</script>
