<template>
  <div class="find-component">
    <Pill>
      <div class="icon-span">
        <Icon icon="bytesize:search" />
      </div>

      <Input />
    </Pill>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Input from "./ui/Input.vue";
import Pill from "./ui/Pill.vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "Find",
  components: {
    Input,
    Pill,
    Icon,
  },
  data() {
    return {};
  },
});
</script>
<style lang="scss">
.find-component {
  .pill {
    padding: 0px;
    position: relative;

    .icon-span {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(50%, -50%);
      display: flex;
    }

    .custom-input {
      input {
        border-radius: var(--border-radius);
        border: none;
        margin: 0;
        padding-left: 40px;

        &::placeholder {
          text-align: center;
        }
      }
    }
  }
}
</style>
