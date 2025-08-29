<template>
  <div class="container">
    <!-- 上半部分 图片 -->
    <div class="top">
      <img src="./assets/唐2.jpg" alt="主页图片" class="main-image" />
    </div>

    <!-- 下半部分 浮动文字 -->
    <div class="bottom">
      <p class="floating-text">果子正在建设中...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
}

/* 上半部分 */
.top {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-image {
  max-width: 80%;
  max-height: 100%;
  border-radius: 16px;
}

/* 下半部分 */
.bottom {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 浮动文字效果 */
.floating-text {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  animation: float 2s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
</style>
