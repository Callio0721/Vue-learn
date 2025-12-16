## 收藏集装扮个性主题API
在这里来获取个性主题的json文件  
GET     https://api.bilibili.com/x/garb/v2/user/suit/benefit

| 字段    | 类型 | 内容                                   | 备注 |
| :------ | :--- | :------------------------------------- | :--- |
| item_id | int  | 对应的item_id，可以在收藏集信息API中找到                 | -    |
| part    | str  | 此处为cards或者emoji_package，可能有其他值      | -    |


  
示例：
https://api.bilibili.com/x/garb/v2/user/suit/benefit?item_id=1764310891001&part=emoji_package

返回的json为：
```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "item_id": 1764310891001,
    "name": "小白兔奶糖·专属表情包",
    "part_id": 5,
    "state": "active",
    "properties": {
      "addable": "true",
      "biz": "reply,dynamic,watch_full",
      "goods_type": "dlc",
      "image": "https://i0.hdslb.com/bfs/garb/2473d794e809635664a066c13f9d87d1bdc6adaa.png",
      "is_symbol": "false",
      "item_emoji_list": "[{\"name\":\"kisskiss\",\"image\":\"https://i0.hdslb.com/bfs/garb/d866203036077a03b021c0b00b6c9635b5cb5b96.png\"},{\"name\":\"送花花\",\"image\":\"https://i0.hdslb.com/bfs/garb/198f39a39b2d40c5b6c3ca6d5e89e1e8ca52361d.png\"},{\"name\":\"我全都要！\",\"image\":\"https://i0.hdslb.com/bfs/garb/f39a413dca03cbfcfec2871b2dc148eb961b283b.png\"},{\"name\":\"没问题\",\"image\":\"https://i0.hdslb.com/bfs/garb/1118b71bffe3c28bbe3822c336631f17376d1760.png\"},{\"name\":\"冷静思考\",\"image\":\"https://i0.hdslb.com/bfs/garb/cc555de34459e336f3a81656a52d439b1ebfdbfb.png\"},{\"name\":\"炒鸡棒\",\"image\":\"https://i0.hdslb.com/bfs/garb/446322efee0e30e6da2a9b63c69964da1aa34cbd.png\"},{\"name\":\"好难办呀\",\"image\":\"https://i0.hdslb.com/bfs/garb/67ee33f452af7009090c7e3ea41ec432839699f0.png\"},{\"name\":\"我吗？\",\"image\":\"https://i0.hdslb.com/bfs/garb/e35140deb5e9946b20e0ac0da587c54cd8c9a700.png\"},{\"name\":\"拜托拜托\",\"image\":\"https://i0.hdslb.com/bfs/garb/8d3b3593fa7235380b28cd988fd7dad98d81a281.png\"},{\"name\":\"给你一拳\",\"image\":\"https://i0.hdslb.com/bfs/garb/a0c51ef67111e0c0cd910fd423c9c193ed16c66f.png\"},{\"name\":\"是你！\",\"image\":\"https://i0.hdslb.com/bfs/garb/ee036c0d30289b6217176eac5643c77fde0f340d.png\"},{\"name\":\"好耶！\",\"image\":\"https://i0.hdslb.com/bfs/garb/d81ef7d0b1d362b33f295701c0f401a3b4e66ff1.png\"},{\"name\":\"比心\",\"image\":\"https://i0.hdslb.com/bfs/garb/373bb4fd5bdc3dc4bc8fb87b8d97356afcc311e8.png\"},{\"name\":\"暗中观察\",\"image\":\"https://i0.hdslb.com/bfs/garb/77c07c1417861f7abe5bfb4e4c1b5a10b05d3ab9.png\"},{\"name\":\"哭哭\",\"image\":\"https://i0.hdslb.com/bfs/garb/58d52686b8eb5337b8d510cbbca2253929c110eb.png\"},{\"name\":\"不好意思\",\"image\":\"https://i0.hdslb.com/bfs/garb/720c3afb81db6e1826fa63c66074c2afdcc9a152.png\"},{\"name\":\"没招了\",\"image\":\"https://i0.hdslb.com/bfs/garb/9bc399aab7bbc7486b7fc5e1990574715fdc5e99.png\"},{\"name\":\"让我康康\",\"image\":\"https://i0.hdslb.com/bfs/garb/b0718d10df1deb8d1e36601801b3328c642dcb17.png\"},{\"name\":\"达咩！\",\"image\":\"https://i0.hdslb.com/bfs/garb/0a7579a7152251e2ebeefa6d73f16665913e3fe4.png\"},{\"name\":\"戳脸脸\",\"image\":\"https://i0.hdslb.com/bfs/garb/a179f15e8fc5e7c267420b8f3b8887d24638ce49.png\"}]",
      "permanent": "false",
      "preview": "false",
      "recently_used": "false",
      "recommend": "false",
      "removable": "true",
      "resource_type": "0",
      "sale_type": "pay",
      "setting_pannel_not_show": "false",
      "size": "L",
      "sortable": "true"
    },
    "current_sources": null,
    "finish_sources": null,
    "suit_items": {
      "emoji": [
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_kisskiss]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/d866203036077a03b021c0b00b6c9635b5cb5b96.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_送花花]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/198f39a39b2d40c5b6c3ca6d5e89e1e8ca52361d.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_我全都要！]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/f39a413dca03cbfcfec2871b2dc148eb961b283b.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_没问题]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/1118b71bffe3c28bbe3822c336631f17376d1760.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_冷静思考]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/cc555de34459e336f3a81656a52d439b1ebfdbfb.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_炒鸡棒]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/446322efee0e30e6da2a9b63c69964da1aa34cbd.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_好难办呀]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/67ee33f452af7009090c7e3ea41ec432839699f0.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_我吗？]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/e35140deb5e9946b20e0ac0da587c54cd8c9a700.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_拜托拜托]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/8d3b3593fa7235380b28cd988fd7dad98d81a281.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_给你一拳]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/a0c51ef67111e0c0cd910fd423c9c193ed16c66f.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_是你！]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/ee036c0d30289b6217176eac5643c77fde0f340d.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_好耶！]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/d81ef7d0b1d362b33f295701c0f401a3b4e66ff1.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_比心]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/373bb4fd5bdc3dc4bc8fb87b8d97356afcc311e8.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_暗中观察]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/77c07c1417861f7abe5bfb4e4c1b5a10b05d3ab9.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_哭哭]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/58d52686b8eb5337b8d510cbbca2253929c110eb.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_不好意思]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/720c3afb81db6e1826fa63c66074c2afdcc9a152.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_没招了]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/9bc399aab7bbc7486b7fc5e1990574715fdc5e99.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_让我康康]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/b0718d10df1deb8d1e36601801b3328c642dcb17.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_达咩！]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/0a7579a7152251e2ebeefa6d73f16665913e3fe4.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        },
        {
          "item_id": 0,
          "name": "[小白兔奶糖·专属表情包_戳脸脸]",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "image": "https://i0.hdslb.com/bfs/garb/a179f15e8fc5e7c267420b8f3b8887d24638ce49.png",
            "sale_type": "pay"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765014866,
          "sale_time_end": -1765014866,
          "sale_surplus": 0,
          "items": null
        }
      ]
    },
    "activity_entrance": null,
    "biz_sale_type": "pay",
    "asset": null,
    "equip_item": null,
    "available": true,
    "visit_asset": null,
    "buy_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=110757&hybrid_set_header=2"
  }
}
```