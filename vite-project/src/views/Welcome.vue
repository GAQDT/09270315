<template>
  <div class="welcome-container">
    <img 
      src="../assets/dog.svg" 
      alt="Cute dog illustration" 
      class="dog-illustration"
      :class="{'shake-animation': isShaking}"
      @click="onDogClick"
    >

    <h1 class="birthday-text">生日快乐！</h1>
    <p class="greeting-text">果子祝你生日快乐！</p>
    <div class="button-wrapper">
      <button class="enter-button" @click="goToHome">
        <svg class="arrow-icon" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  // 修改2: 新增 data 属性来控制动画状态
  data() {
    return {
      isShaking: false // 初始状态下，图片不摇晃
    }
  },
  methods: {
    goToHome() {
      router.push('/home')
    },
    // 修改3: 新增点击小狗后触发的方法
    onDogClick() {
      // 如果正在摇晃，则不执行任何操作，防止连续点击
      if (this.isShaking) {
        return;
      }

      // 1. 开始摇晃
      this.isShaking = true

      // 2. 动画结束后 (500ms后)，移除摇晃状态，以便可以再次点击触发
      setTimeout(() => {
        this.isShaking = false
      }, 500) // 这个时间要和 CSS 动画的持续时间一致
    }
  }
}
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to top, #ffecd2 0%, #fcb69f 100%);
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.dog-illustration {
  width: 250px;
  position: absolute;
  bottom: 20px;
  left: 30px;
  animation: slideIn 1.5s ease-out;
  cursor: pointer; /* 修改4: 增加手型光标，提示用户这是可以点击的 */
  transform-origin: bottom center; /* 让摇晃动画看起来更自然 */
}

/* 图片入场动画 */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* 修改5: 新增摇晃动画的 CSS 类 */
.shake-animation {
  animation: shake 0.5s ease-in-out;
}

/* 修改6: 定义摇晃动画的关键帧 */
@keyframes shake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-8deg); }
  75% { transform: rotate(8deg); }
}


/* 其他样式保持不变... */

.birthday-text {
  font-size: 4rem;
  font-family: 'Georgia', serif;
  margin-bottom: 20px;
  animation: scaleIn 1s ease-out;
}

.greeting-text {
  font-size: 1.8rem;
  margin-bottom: 40px;
  animation: fadeIn 1.5s ease-out;
}

.button-wrapper {
  animation: bounce 2s infinite ease-in-out;
}

.enter-button {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f77062;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.enter-button:hover {
  background-color: #e55a4e;
}

.arrow-icon {
  fill: white;
  width: 50px;
  height: 50px;
}

@keyframes scaleIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
</style>