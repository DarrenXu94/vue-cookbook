<template>
  <div>
    <h3>
      {{ title }}
    </h3>
    <div class="block-item-container">

      <div class="block-item" v-for="item of items" :key="item.id" @click="selected(item)">
        <Pill :class="{ isActive: isActive(item) }" class="center-content">
          {{ startCase(item.name) }}
        </Pill>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MultiSelect } from '../models/cookbook.models';
import Pill from './ui/Pill.vue'
import startCase from "lodash.startcase";

export default defineComponent({
  name: 'FilterBlock',
  components: {
    Pill
  },
  emits: {
    updatedSelection(payload: MultiSelect[]) {
      return payload
    }
  },
  methods: {
    selected(item: MultiSelect) {
      const isInListIndex = this.selectedList.findIndex(listItem => listItem.id === item.id);
      if (isInListIndex !== -1) {
        this.selectedList.splice(isInListIndex, 1)
      } else {
        this.selectedList.push(item)
      }
      this.$emit('updatedSelection', this.selectedList)
    },
    isActive(item: MultiSelect) {
      return this.selectedList.find(listItem => listItem.id === item.id)
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Object as PropType<MultiSelect[]>,
      required: true
    }
  },
  data() {
    return {
      selectedList: [] as MultiSelect[],
      startCase
    };
  },
});
</script>
<style lang="scss">
.block-item {
  &-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .pill {

    &.isActive {
      background-color: gray;
    }

    &.center-content {
      display: flex;
      justify-content: center;
    }
  }
}
</style>