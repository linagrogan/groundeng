<template>
  <div>
    <b-btn variant="success" @click="addWord()">Add</b-btn>
    <b-modal centered v-model="modal.show" @ok="handleOk" :title="modal.editing ? 'Edit' : 'Add'">
      <form>
        <b-form-group label="English">
          <b-form-input
            :disabled="this.modal.editing"
            type="text"
            placeholder="Translation"
            v-model="modal.eng"
          ></b-form-input>
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
        @click="editWord(index)"
        href="#"
        class="flex-column align-items-start"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{word.eng}}</h5>
          <b-button @click.stop.prevent="deleteWord(word.eng)" variant="danger">Delete</b-button>
        </div>
        <p class="mb-1">{{word.rus}}</p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  beforeMount() {
    this.updateWords();
  },
  data() {
    return {
      words: null,
      modal: {
        editing: false,
        show: false,
        eng: "",
        rus: ""
      }
    };
  },
  methods: {
    updateWords() {
      axios
        .get("/api/words", {
          headers: { sessid: localStorage.getItem("sessid") }
        })
        .then(({ data }) => {
          this.words = data;
        })
        .catch(e => {
          console.error(e);
          this.$root.$emit("alert", { message: e.message });
        });
    },
    editWord(index) {
      const word = this.words[index];
      this.modal.eng = word.eng;
      this.modal.rus = word.rus;
      this.modal.editing = true;
      this.modal.show = true;
    },
    addWord() {
      this.modal.editing = false;
      this.modal.rus = null;
      this.modal.eng = null;
      this.modal.show = true;
    },
    deleteWord(eng) {
      axios
        .delete("/api/words/" + eng, {
          headers: {
            sessid: localStorage.getItem("sessid")
          }
        })
        .then(() => {
          this.updateWords();
        })
        .catch(e => {
          console.error(e);
          this.$root.$emit("alert", { message: e.message });
        });
    },
    handleOk() {
      if (this.modal.editing) {
        axios
          .put(
            "/api/words/" + this.modal.eng,
            {
              rus: this.modal.rus
            },
            {
              headers: {
                sessid: localStorage.getItem("sessid")
              }
            }
          )
          .then(() => {
            this.updateWords();
          })
          .catch(e => {
            console.error(e);
            this.$root.$emit("alert", { message: e.message });
          });
      } else {
        axios
          .post(
            "/api/words",
            {
              eng: this.modal.eng,
              rus: this.modal.rus
            },
            {
              headers: {
                sessid: localStorage.getItem("sessid")
              }
            }
          )
          .then(() => {
            this.updateWords();
          })
          .catch(e => {
            console.error(e);
            this.$root.$emit("alert", { message: e.message });
          });
      }
    }
  }
};
</script>
