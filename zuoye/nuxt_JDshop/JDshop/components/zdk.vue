<template>
  <div class="zdk">
    <!-- 标题 -->
    <div class="zdk-icon">
      <svg
        t="1584363921696"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3074"
        width="16"
        height="16"
        v-if="location"
      >
        <path
          d="M511.68 0A373.12 373.12 0 0 0 138.56 373.12C138.56 739.84 442.56 1024 511.68 1024s373.76-285.44 373.76-650.88A373.76 373.76 0 0 0 511.68 0z m0 546.56a154.88 154.88 0 1 1 154.88-154.24 154.24 154.24 0 0 1-154.88 154.24z"
          p-id="3075"
          fill="#d81e06"
        />
      </svg>
      {{title}}
      <svg
        t="1584451830491"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2859"
        width="16"
        height="16"
        v-if="arrow"
      >
        <path
          d="M944.083879 289.536302c14.264888 18.286482 15.462157 41.208541 2.670829 51.196009l-417.191704 325.421604c-2.885723 2.261507-12.156878 7.828292-13.732769 9.578146-15.544021 17.181311-37.893029 22.338774-49.947576 11.461029l-392.908648-354.309538c-12.054547-10.887978-9.271154-33.666774 6.272867-50.889017 15.544021-17.21201 37.893029-22.349007 49.988508-11.471262l357.584118 322.443783 408.258241-318.463122C907.910005 264.516466 929.84969 271.260054 944.083879 289.536302z"
          p-id="2860"
          fill="#cdcdcd"
        />
      </svg>
    </div>
    <!-- 占位fu -->

    <!-- 内容 -->
    <div class="zdk-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    arrow: {
      type: Boolean,
      default: false
    },
    location: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang='scss'>
.zdk {
  display: inline-block;
  // position: relative;

  &-content {
    position: absolute;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    max-width: 313px;
    padding: 0px 30px;
    display: none;
  }
  &-icon {
    cursor: pointer;
    padding: 0 5px;
    display: inline-block;
    line-height: 31px;
  }
  &:hover {
    .zdk-icon {
      background-color: #fff;
      color: red;
      border: 1px solid #ccc;
      border-bottom: 1px solid #fff;
      .zdk-bottom {
        //  position: absolute;
        width: 100%;
        height: 10px;
        background-color: red;
      }
    }
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #fff;
      display: block;
      position: absolute;
      z-index: 9999;
      left: 0;
    }
    .zdk-content {
      display: block;
    }
  }
}
</style>
