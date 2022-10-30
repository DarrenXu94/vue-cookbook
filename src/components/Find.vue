<template>
  <div class="find-component">
    <Pill>
      <Input />
    </Pill>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Input from './ui/Input.vue'
import Pill from './ui/Pill.vue'

export default defineComponent({
  name: 'Find',
  components: {
    Input,
    Pill
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
.find-component {
  .pill {
    padding: 0px;

    .custom-input {
      input {
        border-radius: var(--border-radius);
        border: none;
        margin: 0;

        &::placeholder {
          text-align: center;
        }
      }
    }
  }
}
</style>