<template>
  <div class="slider">
    <div>
      <img src="@/assets/home/slider1.jpg" alt="" />
      <img :src="imgs[currentIndex]" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      imgs: [
        "@/assets/home/slider1.jpg",
        "@/assets/home/slider1.jpg",
        "@/assets/home/slider1.jpg"
      ],
      currentIndex: 0,
      timer: null
    };
  },
  computed: {
    nextIndex() {
      if (this.currentIndex == this.dataList.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    }
  },
  methods: {
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 1000);
    }
  }
};
</script>
