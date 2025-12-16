<template>
  <!-- 通用卡片组件 -->
  <div class="collection-card">
    <!-- 顶部信息栏（动态标题/类型/销量） -->
    <div class="collection-header">
      <span class="collection-title">{{ cardTitle }}</span>
      <div class="collection-meta">
        <span>{{ cardType }}</span>
        <span>{{ salesText }}</span>
      </div>
    </div>

    <!-- 封面图（动态图片地址/封面标题） -->
    <div class="collection-cover">
      <img :src="coverImgUrl" :alt="coverAltText" class="cover-img" />
      <div class="cover-title" v-if="coverTitle">{{ coverTitle }}</div>
    </div>

    <!-- 查看按钮（动态按钮文字） -->
    <button class="view-btn" @click="handleViewClick">
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts" setup>
// 1. 定义接收的参数（props），指定类型+默认值，保证通用性
const props = defineProps({
  // 卡片标题（如：2024拜年纪·2233拜年画册）
  cardTitle: {
    type: String,
    required: true, // 必传参数
  },
  // 卡片类型（如：收藏集）
  cardType: {
    type: String,
    default: '收藏集', // 默认值
  },
  // 销量文案（如：销量：37万+）
  salesText: {
    type: String,
    default: '销量：0',
  },
  // 封面图片地址
  coverImgUrl: {
    type: String,
    required: true,
  },
  // 封面图片alt属性（无障碍）
  coverAltText: {
    type: String,
    default: '画册封面',
  },
  // 封面底部标题（如：拜年纪）
  coverTitle: {
    type: String,
    default: '',
  },
  // 按钮文字（如：查看）
  buttonText: {
    type: String,
    default: '查看',
  },
})

// 2. 定义事件发射，把点击事件传递给父组件（解耦）
const emit = defineEmits<{
  (e: 'view', cardInfo: typeof props): void // 发射view事件，携带卡片信息
}>()

// 按钮点击逻辑：向外发射事件，由父组件决定具体行为
const handleViewClick = () => {
  emit('view', props) // 把当前卡片的所有信息传给父组件
}
</script>

<!-- scoped 用来限制样式的作用域，让样式只作用于当前组件的 DOM 元素，不会污染全局或其他组件的样式。 -->
<style scoped>
.collection-card {
  /* 1. 卡片宽度：固定320px，匹配设计稿中卡片的宽度尺寸 */
  width: 320px;
  /* 2. 圆角：让卡片四个角变成圆角（8px是常用的柔和圆角值），避免直角生硬 */
  border-radius: 8px;
  /* 3. 背景色：卡片主体背景为白色，符合常规UI设计的清爽风格 */
  background: #fff;
  /* 4. 盒子阴影：给卡片添加轻微悬浮阴影，提升层次感
       - 5px：水平向右偏移5px（原代码调整后的值）
       - 2px：垂直向下偏移2px
       - 8px：阴影模糊半径（值越大越柔和）
       - rgba(0, 0, 0, 0.1)：黑色+10%不透明度（极淡，不突兀） */
  box-shadow: 5px 2px 8px rgba(0, 0, 0, 0.1);
  /* 5. 溢出隐藏：防止卡片内部元素（比如图片、文字）超出卡片边界显示
       例如：图片如果尺寸超出卡片，或子元素定位超出时，会被裁剪掉 */
  overflow: hidden;
  /* 6. 字体族：优先使用微软雅黑（适配Windows系统），无则使用系统默认无衬线字体
       保证文字在不同系统下显示风格统一 */
  font-family: '微软雅黑', sans-serif;
}

/* 顶部信息栏 */
.collection-header {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

.collection-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.collection-meta {
  margin-top: 4px;
  font-size: 12px;
  color: #999;
  display: flex;
  justify-content: space-between;
}

/* 封面图 */
.collection-cover {
  position: relative;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}

.cover-img {
  width: 95%;
  height: 95%;
  object-fit: cover;
  position: relative;
}

.cover-title {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.view-btn {
  width: 100%;
  /* 移除固定height，改用padding控制按钮整体高度 */
  padding: 10px 0; /* 上下各10px，总高度=文字行高24px + 10*2=44px，和原高度一致 */
  background: #00a1d6;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  /* Flex保证文字在按钮内居中 */
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */

  /* 自定义文字行高（核心：设置文字自身的高度） */
  line-height: 20px; /* 你可以任意修改这个值，比如20px/30px */
}

.view-btn:hover {
  background: #00b5e5;
}
</style>
