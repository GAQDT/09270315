<template>
  <div class="home-container">
    <img src="../assets/pets.svg" alt="Floating decoration" class="floating-image">
    
    <h1 class="home-title">听听果子想对你说什么吧</h1>

    <div class="video-wrapper">
      <video ref="videoPlayer" class="birthday-video" controls>
        <source src="../assets/birthday-video.mp4" type="video/mp4">
        你的浏览器不支持视频播放。
      </video>
    </div>
  </div>
</template>

<script>
// script 部分无需改动
import router from '../router'

export default {
  name: 'Home',
  methods: {
    handleLogout() {
      router.push('/')
    }
  },
  mounted() {
    // this.$refs.videoPlayer.play();
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fdf6f8;
  padding: 20px;
  box-sizing: border-box;
  position: relative; /* 1. 必须重新加回相对定位，作为图片定位的父容器 */
  overflow: hidden; 
}

/* --- 2. 重新修改浮动图片的样式 --- */
.floating-image {
  position: absolute; /* 使用绝对定位 */
  top: 50%; /* 垂直位置大概在50%的地方 */
  right: 8%; /* 距离右边8%的距离 */
  width: 150px; /* 或者用响应式单位 width: 10vw; */
  /* 移除了 margin-bottom */
  animation: float 4s ease-in-out infinite;
}

/* 浮动动画的关键帧 (保持不变) */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.home-title {
  font-family: 'KaiTi', 'Times New Roman', Times, serif;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 4px;
  background-image: linear-gradient(45deg, #ff8a65, #d81b60);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  animation: fadeInUp 1.2s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.video-wrapper {
  width: 90%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  margin-top: 50px; /* 给标题和视频之间增加一些间距 */
  margin-bottom: 30px;
}

.birthday-video {
  width: 100%;
  height: auto;
  display: block;
}
</style>