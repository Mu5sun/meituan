<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd>
        <i class="food"></i>
        美食
        <span class="arrow"></span>
      </dd>
      <!-- <dd>
        <i class="food"></i>
        美食
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="takeout"></i>
        外卖
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="hotel"></i>
        酒店
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="homestay"></i>
        榛果民宿
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="movie"></i>
        猫眼电影
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="airport"></i>
        机票 / 火车票
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="ktv"></i>
        休闲娱乐 / KTV
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="life"></i>
        生活服务
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="hair"></i>
        丽人 / 美发 / 医学美容
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="marry"></i>
        结婚 / 婚纱摄影 / 婚宴
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="offspring"></i>
        亲子 / 儿童乐园 / 幼教
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="sport"></i>
        运动健身 / 健身中心
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="furniture"></i>
        家装 / 建材 / 家居
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="study"></i>
        学习培训 / 音乐培训
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="health"></i>
        医疗健康 / 宠物 / 爱车
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="bar"></i>
        酒吧 / 密室逃脱
        <span class="arrow"></span>
      </dd> -->
    </dl>
    <div class="detail">
      <template v-for="(item, index) in menuList.children">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v, i) in item.children" :key="v + '_' + i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      curDetail: null,
      menuList: [
        {
          title: '美食',
          icon: 'food',
          children: [
            {
              title: '美食',
              children: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃', '快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉']
            }
          ]
        },
        {
          title: '外卖',
          icon: 'takeout',
          children: [
            {
              title: '外卖',
              children: ['美团外卖']
            }
          ]
        },
        {
          title: '酒店',
          icon: 'hotel',
          children: [
            {
              title: '酒店星级',
              children: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        }
      ]
    }
  }
}
</script>
