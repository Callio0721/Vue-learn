## 收藏集装扮个性主题API
在这里来获取个性主题的json文件  
GET     https://api.bilibili.com/x/garb/v2/user/suit/benefit

| 字段    | 类型 | 内容                                   | 备注 |
| :------ | :--- | :------------------------------------- | :--- |
| item_id | int  | 对应的item_id，可以在收藏集信息API中找到                  | -    |
| part    | str  | 此处为cards或者emoji_package，可能有其他值      | -    |


  
示例：
https://api.bilibili.com/x/garb/v2/user/suit/benefit?item_id=1764311386001&part=cards

返回的json为：
```json
{
  "code": 0,
  "message": "0",
  "ttl": 1,
  "data": {
    "item_id": 1764311386001,
    "name": "小白兔奶糖·个性主题",
    "part_id": 9,
    "state": "active",
    "properties": {
      "color": "#000000",
      "color_mode": "light",
      "color_second_page": "#FFBED6",
      "goods_type": "dlc",
      "head_bg": "https://i0.hdslb.com/bfs/garb/f442b9e001f10245da8c71f7720ce13eea181f95.png",
      "head_myself_mp4_bg": "upos://panguxcodeboss/bb/0k/_00000uq3p5is02s6l2buiw8xgi90kbb-1-162111110023.mp4",
      "head_myself_mp4_play": "loop",
      "head_myself_squared_bg": "",
      "head_tab_bg": "https://i0.hdslb.com/bfs/baselabs/op/7070336f41e5a28ef4a9463aa4e7cd257f8958b5093bbe8c1d27e80028915946.png",
      "image_cover": "https://i0.hdslb.com/bfs/garb/2f2ba8ac45d2fd6aefe40911a6e5fc105db2e2be.png",
      "image_preview": "https://i0.hdslb.com/bfs/garb/2f2ba8ac45d2fd6aefe40911a6e5fc105db2e2be.png",
      "package_md5": "b619c95a66f48c0b58c4990cdd7676bd",
      "package_url": "https://i0.hdslb.com/bfs/garb/zip/79f1e670484b730a32fe47395e2d65ae9d6c5381.zip",
      "tail_bg": "https://i0.hdslb.com/bfs/garb/fdb2ff9a9496f13461a61fb6b313bb4c534010b6.png",
      "tail_color": "#9380D7",
      "tail_color_selected": "#E887BD",
      "tail_icon_channel": "https://i0.hdslb.com/bfs/garb/15c49c07e6d95a5a338f7a8a88ad348313f7ed57.png",
      "tail_icon_dynamic": "https://i0.hdslb.com/bfs/garb/15c49c07e6d95a5a338f7a8a88ad348313f7ed57.png",
      "tail_icon_main": "https://i0.hdslb.com/bfs/garb/4b3c8e7addc754b7a94c7bfb7c6a8f0445407c34.png",
      "tail_icon_mode": "img",
      "tail_icon_myself": "https://i0.hdslb.com/bfs/garb/898913eec603745e77e393d0fb41e2fc09f16538.png",
      "tail_icon_pub_btn_bg": "https://i0.hdslb.com/bfs/garb/997ce5bf8b621e6f63cc0884010f7cf555cc9254.png",
      "tail_icon_selected_channel": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
      "tail_icon_selected_dynamic": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
      "tail_icon_selected_main": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
      "tail_icon_selected_myself": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
      "tail_icon_selected_pub_btn_bg": "https://i0.hdslb.com/bfs/garb/997ce5bf8b621e6f63cc0884010f7cf555cc9254.png",
      "tail_icon_selected_shop": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
      "tail_icon_shop": "https://i0.hdslb.com/bfs/garb/96440c63f3ad55f2254135c5f53215ca10a74453.png",
      "ver": "1764743645"
    },
    "current_sources": null,
    "finish_sources": null,
    "suit_items": {
      "emoji_package": [
        {
          "item_id": 1764311386001,
          "name": "小白兔奶糖·个性主题",
          "state": "active",
          "tab_id": 0,
          "suit_item_id": 0,
          "properties": {
            "color": "#000000",
            "color_mode": "light",
            "color_second_page": "#FFBED6",
            "goods_type": "dlc",
            "head_bg": "https://i0.hdslb.com/bfs/garb/f442b9e001f10245da8c71f7720ce13eea181f95.png",
            "head_myself_mp4_bg": "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/bb/0k/_00000uq3p5is02s6l2buiw8xgi90kbb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765022312&gen=playurlv2&os=08cbv&oi=1910149235&trid=e17c236d4b4147d09dd423d3b3567efeB&mid=381986202&platform=html5&og=hw&upsig=de652e608c1fe5b0dea4332e9841db34&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "head_myself_mp4_bg_list": "[\"https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/bb/0k/_00000uq3p5is02s6l2buiw8xgi90kbb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=\\u0026uipk=5\\u0026nbs=1\\u0026deadline=1765022312\\u0026gen=playurlv2\\u0026os=08cbv\\u0026oi=1910149235\\u0026trid=e17c236d4b4147d09dd423d3b3567efeB\\u0026mid=381986202\\u0026platform=html5\\u0026og=hw\\u0026upsig=de652e608c1fe5b0dea4332e9841db34\\u0026uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og\\u0026bvc=vod\\u0026nettype=0\\u0026orderid=0,3\\u0026logo=00000000\\u0026f=B_0_0\",\"https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/bb/0k/_00000uq3p5is02s6l2buiw8xgi90kbb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=\\u0026uipk=5\\u0026nbs=1\\u0026deadline=1765022312\\u0026gen=playurlv2\\u0026os=08cbv\\u0026oi=1910149235\\u0026trid=e17c236d4b4147d09dd423d3b3567efeB\\u0026mid=381986202\\u0026platform=html5\\u0026og=hw\\u0026upsig=de652e608c1fe5b0dea4332e9841db34\\u0026uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og\\u0026bvc=vod\\u0026nettype=0\\u0026orderid=1,3\\u0026logo=00000000\\u0026f=B_0_0\",\"https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/bb/0k/_00000uq3p5is02s6l2buiw8xgi90kbb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=\\u0026uipk=5\\u0026nbs=1\\u0026deadline=1765022312\\u0026gen=playurlv2\\u0026os=08cbv\\u0026oi=1910149235\\u0026trid=e17c236d4b4147d09dd423d3b3567efeB\\u0026mid=381986202\\u0026platform=html5\\u0026og=hw\\u0026upsig=de652e608c1fe5b0dea4332e9841db34\\u0026uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og\\u0026bvc=vod\\u0026nettype=0\\u0026orderid=2,3\\u0026logo=00000000\\u0026f=B_0_0\"]",
            "head_myself_mp4_play": "loop",
            "head_myself_squared_bg": "",
            "head_tab_bg": "https://i0.hdslb.com/bfs/baselabs/op/7070336f41e5a28ef4a9463aa4e7cd257f8958b5093bbe8c1d27e80028915946.png",
            "image_cover": "https://i0.hdslb.com/bfs/garb/2f2ba8ac45d2fd6aefe40911a6e5fc105db2e2be.png",
            "image_preview": "https://i0.hdslb.com/bfs/garb/2f2ba8ac45d2fd6aefe40911a6e5fc105db2e2be.png",
            "package_md5": "b619c95a66f48c0b58c4990cdd7676bd",
            "package_url": "https://i0.hdslb.com/bfs/garb/zip/79f1e670484b730a32fe47395e2d65ae9d6c5381.zip",
            "tail_bg": "https://i0.hdslb.com/bfs/garb/fdb2ff9a9496f13461a61fb6b313bb4c534010b6.png",
            "tail_color": "#9380D7",
            "tail_color_selected": "#E887BD",
            "tail_icon_channel": "https://i0.hdslb.com/bfs/garb/15c49c07e6d95a5a338f7a8a88ad348313f7ed57.png",
            "tail_icon_dynamic": "https://i0.hdslb.com/bfs/garb/15c49c07e6d95a5a338f7a8a88ad348313f7ed57.png",
            "tail_icon_main": "https://i0.hdslb.com/bfs/garb/4b3c8e7addc754b7a94c7bfb7c6a8f0445407c34.png",
            "tail_icon_mode": "img",
            "tail_icon_myself": "https://i0.hdslb.com/bfs/garb/898913eec603745e77e393d0fb41e2fc09f16538.png",
            "tail_icon_pub_btn_bg": "https://i0.hdslb.com/bfs/garb/997ce5bf8b621e6f63cc0884010f7cf555cc9254.png",
            "tail_icon_selected_channel": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
            "tail_icon_selected_dynamic": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
            "tail_icon_selected_main": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
            "tail_icon_selected_myself": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
            "tail_icon_selected_pub_btn_bg": "https://i0.hdslb.com/bfs/garb/997ce5bf8b621e6f63cc0884010f7cf555cc9254.png",
            "tail_icon_selected_shop": "https://i0.hdslb.com/bfs/garb/183a6e8c6d92d5572db41efb58e4481d4f5854b6.png",
            "tail_icon_shop": "https://i0.hdslb.com/bfs/garb/96440c63f3ad55f2254135c5f53215ca10a74453.png",
            "ver": "1764743645"
          },
          "current_activity": null,
          "next_activity": null,
          "current_sources": null,
          "finish_sources": null,
          "sale_left_time": -1765015112,
          "sale_time_end": -1765015112,
          "sale_surplus": 0,
          "items": null
        }
      ]
    },
    "activity_entrance": null,
    "biz_sale_type": "",
    "asset": null,
    "equip_item": null,
    "available": false,
    "visit_asset": null,
    "buy_link": "https://www.bilibili.com/h5/mall/digital-card/home?-Abrowser=live&act_id=110757&hybrid_set_header=2"
  }
}
```