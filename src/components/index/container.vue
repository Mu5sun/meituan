<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd :class="{active: kind === 'all'}" data-type="all">全部</dd>
      <dd :class="{active: kind === 'food'}" data-type="food">约会聚餐</dd>
      <dd :class="{active: kind === 'spa'}" data-type="spa">丽人SPA</dd>
      <dd :class="{active: kind === 'movie'}" data-type="movie">电影演出</dd>
      <dd :class="{active: kind === 'travel'}" data-type="travel">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img
            :src="item.image"
            class="image"
          >
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      kind: 'all',
      list: [
        {
          image: '//p1.meituan.net/dnaimgdark/e5bb7737b2e3a0f84353bf9d5cce118d2788828.jpg@368w_208h_1e_1c',
          title: '呷哺呷哺（大兴龙湖天街店）',
          sub_title: '经典鲜蔬拼盘1份',
          price_info: {
            current_price: 20,
            old_price: 20
          },
          address: '大兴区'
        },
        {
          image: '//p1.meituan.net/mogu/54bcf6f6beb7bef1469f2decbc54cdba92736.jpg@368w_208h_1e_1c',
          title: '分米鸡  DM  Chicken（世纪金源店）',
          sub_title: '分米鸡5.0DM套餐1份',
          price_info: {
            current_price: 168,
            old_price: 208
          },
          address: '远大路'
        }
      ]
    }
  },
  methods: {
    over (e) {
      let dom = e.target
      let tagName = dom.tagName.toLowerCase()
      if (tagName !== 'dd') {
        return
      }
      this.kind = dom.getAttribute('data-type')
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
