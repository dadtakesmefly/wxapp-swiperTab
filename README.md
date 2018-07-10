# wxapp-swiperTab    demo代码是滑动切换  

# 点击切换 代码 如下

    <view class="nav">

        <view wx:for="{{taga}}" class='tag-box' wx:key="id" wx:for-index="i">

        <view class="taga-item {{currentItem==item.id?'bold':''}}" data-id="{{item.id}}" bindtap="select">{{item.text}}</view>

        <view class="borderline {{currentItem==item.id?'active-tag':''}}"></view>

        </view>

    </view>


    .nav {
      width: 100%;
      height: 97rpx;
      display: flex;
      font-size: 32rpx;
      color: rgba(34, 34, 34, 1);
      justify-content: center;
      line-height: 97rpx;
      position: relative;
      border-bottom: 1px solid #f5f5f7;
    }
    .tag-box {
      position: relative;
      margin: 0 30rpx;
      color:#222;
    }
    .tag-box view{
      font-size: 32rpx;
      color: #222;
    }

    .borderline {
      width: 50rpx;
      height: 3px;
      background-color: transparent;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }

    .active-tag {
      background-color: #FF6767;
    }


    data: {

      "taga": [{ "text": "主考院校", "id": 0 }, { "text": "热门专业", "id": 1 }],

       "currentItem": "",

      "school": true,

      "profession": false,

    },

    select: function (e) 
    {

    var that = this

    console.log(e.target.dataset.id)

    that.setData({
     "currentItem": e.target.dataset.id,})

    if (e.target.dataset.id == 0) {

    that.setData({
            school: true,
            profession: false,

    })
        }

    else {

    that.setData({

    school: false,
            profession: true,

     })
        }

    }


      select:function(e){
        var that = this
        console.log(e.target.dataset.id)
        that.setData({
          'currentItem': e.target.dataset.id,
        })
        if (e.target.dataset.id == 0){
          that.setData({
            school:true,
            profession:false,
          })
        }
        else{
          that.setData({
            school: false,
            profession: true,
          })
        }
      }
