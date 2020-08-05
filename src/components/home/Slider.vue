<template>
  <div class="slider">
    <div>
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
        require("@/assets/home/slider1.jpg"),
        require("@/assets/home/serve1.jpg"),
        require("@/assets/home/serve2.jpg")
      ],
      currentIndex: 0,
      timer: null
    };
  },
  computed: {
    nextIndex() {
      if (this.currentIndex == this.imgs.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    }
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
    },
    // runInv() {
    //   this.timer = setInterval(() => {
    //     this.gotoPage(this.nextIndex);
    //   }, 1000);
    // }
  },
  mounted:function(){
    this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex);
      }, 1000);
  }
};
</script>
