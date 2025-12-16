<template>
  <!-- 模板中直接使用 setup 里定义的响应式数据和方法 -->
  <div class="main-page">
    <!-- 卡片容器：横向/纵向排列（根据需求调整） -->
    <div class="card-list">
      <!-- 循环渲染多个通用卡片 -->
      <CollectionOverview
        v-for="(card, index) in cardList"
        :key="index"
        :card-title="card.cardTitle"
        :card-type="card.cardType"
        :sales-text="card.salesText"
        :cover-img-url="card.coverImgUrl"
        :cover-alt-text="card.coverAltText"
        :cover-title="card.coverTitle"
        :button-text="card.buttonText"
        @view="handleCardView"
      />
    </div>
  </div>
</template>

<!-- vite-plugin-vue-setup-extend 是「Vue 组件编译阶段」的插件，只处理组件内部的 name 注入
这个插件只做了「帮你自动设置组件 name 选项」这一件事，对 main.ts 里的 import、组件挂载、插件注册等逻辑，没有任何影响
组件的 name 选项是 Vue 给组件定义的「标识名称」
name 最基础的作用：在 Vue 开发者工具（Vue Devtools 浏览器调试面板）中，组件树会显示 name 作为组件的「显示名称」，而非默认的 <Anonymous>（匿名组件）或文件路径，能快速定位组件。
递归组件: 在组件内部调用自身时, 此时必须通过 name 引用自身 —— 因为 <script setup> 是闭包语法，无法直接通过变量名引用组件，只能靠 name 识别。
-->
<script setup lang="ts">
// 1. 引入通用卡片组件
import CollectionOverview from './components/CollectionOverview.vue'

// 2. 定义卡片数据（可从接口请求/本地模拟）
const cardList = [
  {
    cardTitle: '2024拜年纪-2233拜年画册',
    cardType: '收藏集',
    salesText: '销量：37万+',
    coverImgUrl: 'http://i0.hdslb.com/bfs/archive/f96a8cf6866ccef8f54de4773acf0cb07b915ac6.png',
    coverAltText: '2024拜年纪画册封面',
    coverTitle: '拜年纪',
    buttonText: '查看',
  },
  {
    cardTitle: '2233·宅舞嘉年华2025-宅舞嘉年华',
    cardType: '收藏集',
    salesText: '销量：2千+',
    coverImgUrl: 'https://i0.hdslb.com/bfs/garb/0a4577ede7845b02d33289578fc42ac60fdf71d7.png',
    coverAltText: '宅舞嘉年华2025',
    coverTitle: '宅舞嘉年华',
    buttonText: '查看',
  },
  {
    cardTitle: '2233·元素协奏-潮蚀',
    cardType: '装扮',
    salesText: '销量：3万+',
    coverImgUrl: 'https://i0.hdslb.com/bfs/garb/0f847d1977dff4e1cc49b2bf48c328628542ce65.jpg',
    coverAltText: '元素协奏-潮蚀封面',
    coverTitle: '元素协奏',
    buttonText: '查看',
  },
]

// 3. 处理卡片点击事件（统一处理所有卡片的点击逻辑）
const handleCardView = (cardInfo: any) => {
  console.log('点击了卡片：', cardInfo)
  // 可根据卡片信息做不同操作：如路由跳转、弹窗、请求详情等
  // 示例：跳转到卡片详情页
  // router.push({ path: '/card-detail', query: { id: cardInfo.cardTitle } })
}
</script>

<style scoped>
.main-page {
  padding: 20px;
  background: #f5f5f5;
  /* 让main-page占满父容器宽度，为居中做准备 */
  width: 100%;
  /* 内部内容居中 */
  display: flex;
  justify-content: center;
}

.card-list {
  /* 核心：Flex横向排列 */
  display: flex;
  /* 超出3个卡片时自动换行 */
  flex-wrap: wrap;
  /* 卡片之间的水平+垂直间距（可自定义，比如16px/24px） */
  gap: 100px;
  /* 左对齐（默认），若想居中可改为 justify-content: center; */
  justify-content: flex-start;
  /* 垂直方向顶端对齐 */
  align-items: flex-start;
}

/* 穿透scoped，固定子组件卡片宽度为320px */
.card-list > :deep(.collection-card) {
  width: 320px; /* 固定宽度，不再动态计算 */
  /* 可选：固定卡片高度，保证视觉统一 */
  height: 500px;
  box-sizing: border-box; /* 防止padding/border撑大宽度 */
}

/* 响应式适配：小屏（宽度＜1000px）自动调整为一行2个 */
@media (max-width: 1000px) {
  .card-list {
    /* 小屏时居中显示，视觉更友好 */
    justify-content: center;
  }
}

/* 手机端（宽度＜700px）一行1个 */
@media (max-width: 700px) {
  .card-list > :deep(.collection-card) {
    /* 手机端占满宽度，保留左右间距 */
    width: calc(100% - 40px);
  }
}
</style>
