##  收藏集获取对应act_id下的基础组合信息
GET  https://api.bilibili.com/x/vas/dlc_act/act/basic  
请求参数:
| 字段   | 类型 | 内容           | 备注 |
| :----- | :--- | :------------- | :--- |
| act_id | int  | 对应的act_id   | -    |

返回数据中的重要条目：  
`lottery_list中的lottery_image`：收藏集的封面  
`product_introduce`:收藏集简介
`collector_medal_info`:收藏集勋章





   
示例:  
以下为act_id为`110757`时的原始json
https://api.bilibili.com/x/vas/dlc_act/act/basic?act_id=110757

```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "act_title": "小白兔奶糖ovo",
    "cur_time": 1765012174,
    "start_time": 1764907200,
    "end_time": 2114406245,
    "pre_start_time": 1764820800,
    "pre_end_time": 1764907199,
    "is_booked": 0,
    "act_desc": "",
    "lottery_list": [
      {
        "lottery_id": 110758,
        "lottery_name": "萌兔来袭",
        "display_time": 1764820800,
        "start_time": 1764907200,
        "end_time": 2114406245,
        "lottery_image": "https://i0.hdslb.com/bfs/garb/a7d52944907d8135f4283a768fb987241b7fa5c9.jpg",
        "draw_cnt": 0,
        "goods_id": 3338360011,
        "price": 9900,
        "goods_name": "萌兔来袭",
        "lottery_desc": "",
        "item_total_cnt": 24,
        "item_owned_cnt": 0,
        "total_sale_amount": 12544,
        "lottery_type": 1,
        "effective_forever": 1,
        "discount": {
          "origin_price": 9900,
          "price": 4900,
          "discount_guidance": {
            "guidance_text": "开通大会员首抽",
            "guidance_url": "bilibili://user_center/vip/buy/187?appSubId=zbdlc"
          }
        },
        "free": 0,
        "sale_mode": 1,
        "lottery_square_img": "https://i0.hdslb.com/bfs/garb/395dc6acf6df09d0d328cac54a7a54d6d0c9914b.jpg"
      }
    ],
    "share_info": {
      "main_title": "萌兔来袭·小白兔奶糖",
      "sub_title": "恭喜！你被欧气砸中！快来抽卡吧 ଘ(੭ˊᵕˋ)੭* ੈ",
      "share_content": "活动火热售卖中，快来开卡吧！"
    },
    "act_y_img": "https://i0.hdslb.com/bfs/garb/e296975ddd7e78ff7f40c0116a7b358b34972ef7.jpg",
    "animation_info": {
      "animation_draw_url": {
        "10": "https://i0.hdslb.com/bfs/garb/b6b9ed048a206aff8f17b4cb8c99b776d99f261f.mp4",
        "30": "https://i0.hdslb.com/bfs/garb/d3388b8fe9720c5a4d94057b0a87bcda53ad1d21.mp4"
      },
      "animation_entry_url": {
        "10": "https://i0.hdslb.com/bfs/garb/a95bfff793fe72fd2b3b0ed929f86283356b3b05.mp4?delay=900",
        "30": "https://i0.hdslb.com/bfs/garb/28a9489b17b11dbd6b7aa39b35b16e9c779213a8.mp4?delay=1200"
      }
    },
    "total_book_cnt": 502,
    "total_buy_cnt": 12544,
    "horizontal_card_light_url": "https://i0.hdslb.com/bfs/b/60e291bb0a1cbe46f0116c3f782579f8f708e404.png",
    "horizontal_card_shadow_url": "https://i0.hdslb.com/bfs/garb/item/88518857ab51c71119d972bdec7066ffb7b0b55c.png",
    "vertical_card_light_url": "https://i0.hdslb.com/bfs/b/60e291bb0a1cbe46f0116c3f782579f8f708e404.png",
    "vertical_card_shadow_url": "https://i0.hdslb.com/bfs/garb/item/88518857ab51c71119d972bdec7066ffb7b0b55c.png",
    "is_pre": 1,
    "is_pre_risk": 0,
    "is_collector_rank": 1,
    "collect_list": null,
    "display_title": "任务奖励",
    "effective_forever": 1,
    "guide_info": {
      "title": "",
      "guide_content": "",
      "jump_url": ""
    },
    "is_can_donate": 1,
    "is_up_chain": 0,
    "related_mids": [
      "34173336"
    ],
    "is_vip": false,
    "task_list": null,
    "popup_info": null,
    "act_desc_light": "",
    "not_need_realname": 1,
    "product_introduce": "【萌兔来袭】是小白兔奶糖特别定制打造的个人数字集卡，其中的每张数字卡片都将拥有独特编号，还有专属语音视频典藏卡牌，期待大家一起来解锁百变萌兔哦！",
    "app_head_show": "https://i0.hdslb.com/bfs/garb/open/ae3343b6c9ad72e95e6207d0ba786e79dab5d348.png@0-0-1126-1126a",
    "app_space_show": "https://i0.hdslb.com/bfs/garb/open/ae3343b6c9ad72e95e6207d0ba786e79dab5d348.png@0-0-1126-1126a",
    "collector_medal_info": "[{\"level\":1,\"score\":10,\"image\":\"https://i0.hdslb.com/bfs/garb/open/9644fc29d90bef69da65a977bf3a08cd9216a4b7.png\",\"num_color\":\"#B89D89\",\"card_count\":1,\"scene_image\":{\"4\":\"https://i0.hdslb.com/bfs/garb/open/3010d512c9070cadf65450785454a52c2cfa21fd.png\",\"6\":\"https://i0.hdslb.com/bfs/garb/open/d1d9cd2b29ce47b71e16d8eea9918e7f1fec8432.png\",\"1\":\"https://i0.hdslb.com/bfs/garb/open/ebc0875d88f5564f387a81fd98e03e7f11498cc5.png\",\"2\":\"https://i0.hdslb.com/bfs/garb/open/9644fc29d90bef69da65a977bf3a08cd9216a4b7.png\",\"3\":\"https://i0.hdslb.com/bfs/garb/open/9644fc29d90bef69da65a977bf3a08cd9216a4b7.png\"}},{\"level\":2,\"score\":30,\"image\":\"https://i0.hdslb.com/bfs/garb/open/c3ac4328bc7d3b92970209e505f42e609bdde5f5.png\",\"num_color\":\"#8BD8ED\",\"card_count\":5,\"scene_image\":{\"6\":\"https://i0.hdslb.com/bfs/garb/open/f9010bce4782f7fbe2ba2791f446e887f601d5f1.png\",\"1\":\"https://i0.hdslb.com/bfs/garb/open/a7a54a77e522856cf4a9303de161bb83353918b3.png\",\"2\":\"https://i0.hdslb.com/bfs/garb/open/c3ac4328bc7d3b92970209e505f42e609bdde5f5.png\",\"3\":\"https://i0.hdslb.com/bfs/garb/open/c3ac4328bc7d3b92970209e505f42e609bdde5f5.png\",\"4\":\"https://i0.hdslb.com/bfs/garb/open/831b212e3093f20bec757c419d14e099ebb186e7.png\"}},{\"level\":3,\"score\":100,\"image\":\"https://i0.hdslb.com/bfs/garb/open/b354023606d68aa8f343789fe687641789ceb5b0.png\",\"num_color\":\"#FAE34A\",\"card_count\":15,\"scene_image\":{\"1\":\"https://i0.hdslb.com/bfs/garb/open/df10a882efce53e7988fa4e71efdedd2f0c29776.png\",\"2\":\"https://i0.hdslb.com/bfs/garb/open/b354023606d68aa8f343789fe687641789ceb5b0.png\",\"3\":\"https://i0.hdslb.com/bfs/garb/open/b354023606d68aa8f343789fe687641789ceb5b0.png\",\"4\":\"https://i0.hdslb.com/bfs/garb/open/92f96381961d1296ed0cf22b6ef16538620a188f.png\",\"6\":\"https://i0.hdslb.com/bfs/garb/open/df6e34f4181e0b8cc91a5b07d559b06d4f53b641.png\"}},{\"level\":4,\"score\":250,\"image\":\"https://i0.hdslb.com/bfs/garb/open/9cfb8dae932ec45dbb66b3ed4caa97fa5106f8e9.png\",\"num_color\":\"#F8B8DF\",\"card_count\":30,\"scene_image\":{\"6\":\"https://i0.hdslb.com/bfs/garb/open/e27374addd18ca971c72d473e5d2caa8247f5cf7.png\",\"1\":\"https://i0.hdslb.com/bfs/garb/open/e6ee19bfc7cfa4b266ee80ace4f29f9b075b7325.png\",\"2\":\"https://i0.hdslb.com/bfs/garb/open/9cfb8dae932ec45dbb66b3ed4caa97fa5106f8e9.png\",\"3\":\"https://i0.hdslb.com/bfs/garb/open/9cfb8dae932ec45dbb66b3ed4caa97fa5106f8e9.png\",\"4\":\"https://i0.hdslb.com/bfs/garb/open/c96f92f5525f00cb8a265418a30da74546c5160c.png\"}},{\"level\":5,\"score\":0,\"image\":\"https://i0.hdslb.com/bfs/garb/open/534646b7c6a7a7b76cea6d3198fc88ea161791fd.png\",\"num_color\":\"#9F5DEA\",\"card_count\":60,\"scene_image\":{\"6\":\"https://i0.hdslb.com/bfs/garb/open/d599feee2f4aae20cf8e6e701e19beb9d1a71075.png\",\"1\":\"https://i0.hdslb.com/bfs/garb/open/78d21580792c9f0dc94b2fbac161aaeb3137874d.png\",\"2\":\"https://i0.hdslb.com/bfs/garb/open/534646b7c6a7a7b76cea6d3198fc88ea161791fd.png\",\"3\":\"https://i0.hdslb.com/bfs/garb/open/534646b7c6a7a7b76cea6d3198fc88ea161791fd.png\",\"4\":\"https://i0.hdslb.com/bfs/garb/open/69ff1778408c2e7915c67d5aab368d62a2a0c2dd.png\"}}]",
    "topic": null,
    "physical_exchange": false,
    "act_square_img": "https://i0.hdslb.com/bfs/garb/a7d52944907d8135f4283a768fb987241b7fa5c9.jpg",
    "tab_lottery_id": 110758,
    "related_user_infos": {
      "34173336": {
        "uid": 34173336,
        "nickname": "小白兔奶糖ovo",
        "avatar": "https://i0.hdslb.com/bfs/face/8fdd1daccf3484c5e8eccb2704cd88f0179149c5.jpg"
      }
    },
    "save_image_right": 1,
    "show_decompose_rule": 0,
    "show_smelt_rule": 0,
    "gray_transaction": 1,
    "icon_infos": null,
    "is_game_rank": 0
  }
}
```