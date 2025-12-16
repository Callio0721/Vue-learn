## 收藏集信息API


> https://api.bilibili.com/x/vas/dlc_act/lottery_home_detail

*请求方式: GET*

从中获取的信息：  
1、动态个性主题和表情包的id，然后通过两个API获取具体内容  
2、`item_list中的card_info`:获取卡牌图片、名称
3、`collect_list`


**URL参数:**

| 参数名 | 类型 | 内容 | 必要性 | 备注 |
| ----- | ---- | ---- | ---- | ---- |
| act_id | int | 收藏集活动id | 必要 |  |
| lottery_id | int | 收藏集抽奖id|不必要| 但缺了不返回数据 |

**JSON回复:**

根对象:

| 字段 | 类型 | 内容 | 备注 |
| ---- | ---- | ---- | ---- |
| code | num | 返回值 | 0：成功 |
| message | str | 错误信息 | 默认为 0 |
| ttl | num | 1 |  |
| data | obj | 返回数据 |  |

`data` 对象:

| 字段 | 类型 | 内容 | 备注 |
|-|-|-|-|
| lottery_id | int | 收藏集抽奖id |  |
| name | str | 收藏集抽奖名称 |  |
| item_list | array | 可抽出的物品列表 |  |
| collect_list | obj | 见下方 |  |
| button_bubble | null | 未知 |  |
| guide_info | null | 未知 |  |
| is_booked | int | 未知 |  |
| total_book_cnt | int | 未知 |  |
| is_fission | int | 未知 |  |
| physical_exchange | int | 未知 |  |

`data` 中的 `item_list` 数组中的对象:

|字段 | 类型 | 内容 | 备注|
|-|-|-|-|
|item_type | int | 物品类型 | 目前只拿到个1, 其他值未知|
|card_info | obj | 见下方 |  |

`item_list` 数组中的对象中的 `card_info` 对象:

|字段 | 类型 | 内容 | 备注 |
|-|-|-|-|
|card_type_id | int | 该卡片id |  |
|card_name | str | 该卡片名称 |  |
|card_img | str | 该卡片图片 | 无水印|
|card_type | int | int | 未知|
|video_list | array | 该卡片动态视频 | 无水印|
|is_physical_orientation | int | 该卡片旋转方向 |  |
|card_scarcity | int | 该卡片稀有度 |  |
|is_mute | int | 该卡片是否静音 |  |
|width | int | 该卡片像素宽度 |  |
|height | int | 该卡片像素高度 |  |
|card_ext_text | str | ?该卡片文件名字符串 |  |
|card_img_download | str | 该卡片图片 | 有水印|
|video_list_download | array | 该卡片动态视频 | 有水印|
|subtitles_url | 未知 |  | |
|play | null | 未知 |  |
|tag | null | 未知 |  |
|card_sub_type | int | 未知 |  |
|is_new_tag | int | 未知 |  |
|is_up_tag | int | 未知 |  |
|is_limited_card | int | 未知 |  |
|stock_info | null | 未知 |  |

`data` 中的 `collect_list` 对象:

| 字段 | 类型 | 内容 | 备注|
|-|-|-|-|
| collect_infos | array | 见下方 |  |
| collect_chain | null | 未知 |  |

`collect_list` 中的 `collect_infos` 数组中的对象：

| 字段 | 类型 | 内容 | 备注 |
|-|-|-|-|
| collect_id | int | 收集品id |  |
| start_time | int | 开始时间 |  |
| end_time | int | 结束时间 |  |
| redeem_text | str | 兑换条件 |  |
| redeem_item_type | int | 兑换物类型 |  |
| redeem_item_id | str | 兑换物id |  |
| redeem_item_name | str | 兑换物名称 |  |
| redeem_item_image | str | 兑换物预览图片 |  |
| owned_item_amount | int | 拥有的数量 |  |
| require_item_amount | int | 需要的数量 |  |
| has_redeemed_cnt | int | 兑换次数 |  |
| effective_forever | int | 是否永久有效 |  |
| redeem_item_image_download | str | 未知 | |
| card_item | obj | 见下方 | 有时为 null  |
| jump_url | str | ?跳转链接 |  |
| redeem_cond_type | str | 当前兑换状态 |  |
| remain_stock | int | 当前库存 |  |
| total_stock | int | 总库存 |  |
| lottery_id | int | 抽奖id |  |
| reward_tag | str | 奖励显示标签 |  |
| redeem_detail_image | str | 兑换详情图片 |  |
| redeem_detail_videos | null | 未知 |  |
| sort | int | 排序 |  |
| redeem_items_optional | null | 未知 |  |
| unlock_condition | obj | 见下方 |  |

`collect_infos` 数组中的对象中的 `card_item` 对象:

| 字段 | 类型 | 内容 | 备注|
|-|-|-|-|
| card_type_info | null |  |  |
| card_asset_info | null |  |  |
| play | null |  |  |
| tag | null |  |  |

`collect_infos` 数组中的对象中的 `unlock_condition` 对象:

|字段 | 类型 | 内容 | 备注|
|-|-|-|-|
|unlocked | bool | 是否解锁 |  |
|lock_type | int | 解锁类型 |  |
|expire_at | int | 过期与 |  |
|unlocked_at | int | 解锁于 |  |
|unlock_threshold | int | ?解锁起点 |  |
|current_threshold | int | ?当前起点 |  |

**示例:**

```shell
curl -G --url 'https://api.bilibili.com/x/vas/dlc_act/lottery_home_detail' \
--url-query 'act_id=110757' \
--url-query 'lottery_id=110758'
```

<details>
<summary>查看响应示例:</summary>

```json
{
  "code": 0,
  "data": {
    "act_rights_infos": [
      {
        "extra": "{}",
        "range_type": 2,
        "resource": "https://i0.hdslb.com/bfs/garb/open/ae3343b6c9ad72e95e6207d0ba786e79dab5d348.png@0-0-1079-1079a",
        "rights_type": 1
      },
      {
        "extra": "{}",
        "range_type": 2,
        "resource": "https://i0.hdslb.com/bfs/garb/open/ae3343b6c9ad72e95e6207d0ba786e79dab5d348.png@0-0-1079-1079a",
        "rights_type": 2
      },
      {
        "extra": "{\"logo_mode\":1}",
        "range_type": 2,
        "resource": "https://i0.hdslb.com/bfs/vas_new/c53da66275dc8cd3183055eebc271517ed1ce9e1.webp",
        "rights_type": 5
      },
      {
        "extra": "{}",
        "range_type": 1,
        "resource": "https://i0.hdslb.com/bfs/garb/open/ae3343b6c9ad72e95e6207d0ba786e79dab5d348.png@0-0-1079-1079a",
        "rights_type": 3
      },
      {
        "extra": "{}",
        "range_type": 2,
        "resource": "https://i0.hdslb.com/bfs/garb/open/ae3343b6c9ad72e95e6207d0ba786e79dab5d348.png",
        "rights_type": 6
      },
      {
        "extra": "{}",
        "range_type": 1,
        "resource": "https://i0.hdslb.com/bfs/garb/open/ae3343b6c9ad72e95e6207d0ba786e79dab5d348.png",
        "rights_type": 4
      },
      {
        "extra": "{}",
        "range_type": 1,
        "resource": "https://i0.hdslb.com/bfs/garb/open/ae3343b6c9ad72e95e6207d0ba786e79dab5d348.png",
        "rights_type": 7
      }
    ],
    "button_bubble": [
      {
        "bubble_text": "获得主题套装",
        "lottery_num": 5
      }
    ],
    "collect_list": {
      "collect_chain": [
        {
          "card_item": null,
          "collect_id": 0,
          "effective_forever": 0,
          "end_time": 2114406245,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": null,
          "redeem_cond_type": "",
          "redeem_count": null,
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/d375b9aa7e7f30b00d4cffddf6541fe198a9a361.png",
          "redeem_detail_videos": null,
          "redeem_item_id": "",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/open/f72a71c0baf68e2eebbd57408cd9bae8ca2dc510.png",
          "redeem_item_image_download": "",
          "redeem_item_name": "钻石头像背景",
          "redeem_item_optional_list": null,
          "redeem_item_type": 1000,
          "redeem_items_optional": null,
          "redeem_text": "1抽",
          "remain_stock": 0,
          "require_item_amount": 1,
          "reward_tag": "",
          "sort": 0,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": null
        },
        {
          "card_item": {
            "card_asset_info": null,
            "card_type_info": null,
            "play": null,
            "tag": null
          },
          "collect_id": 110759,
          "effective_forever": 1,
          "end_time": 2114406245,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": null,
          "redeem_cond_type": "lottery_num",
          "redeem_count": {
            "has_redeem_count": 0,
            "redeem_count": 2,
            "redeem_count_type": 0
          },
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/18266f0f1364371214c2e74c1282bcd956ea777e.png",
          "redeem_detail_videos": null,
          "redeem_item_id": "1764310891001",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/18266f0f1364371214c2e74c1282bcd956ea777e.png",
          "redeem_item_image_download": "",
          "redeem_item_name": "表情包",
          "redeem_item_optional_list": null,
          "redeem_item_type": 2,
          "redeem_items_optional": null,
          "redeem_text": "萌兔来袭卡池完成2抽即可领取",
          "remain_stock": -1,
          "require_item_amount": 2,
          "reward_tag": "",
          "sort": 1,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        },
        {
          "card_item": {
            "card_asset_info": null,
            "card_type_info": null,
            "play": null,
            "tag": null
          },
          "collect_id": 110761,
          "effective_forever": 1,
          "end_time": 2114406245,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": null,
          "redeem_cond_type": "lottery_num",
          "redeem_count": {
            "has_redeem_count": 0,
            "redeem_count": 2,
            "redeem_count_type": 0
          },
          "redeem_detail_image": "https://i0.hdslb.com/bfs/baselabs/first_frame/16a0524d-01ec-43b2-8423-54b2aab9251f.png",
          "redeem_detail_videos": [
            "https://jssz-boss.hdslb.com/garb-live2d-resource/award_video/8355af92-bba5-46b1-8a3a-9827657ed06b.mp4"
          ],
          "redeem_item_id": "1764311386001",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/a6431a6ed99aecb227b70f7321970a877aaa278d.png",
          "redeem_item_image_download": "",
          "redeem_item_name": "动态个性主题",
          "redeem_item_optional_list": null,
          "redeem_item_type": 5,
          "redeem_items_optional": null,
          "redeem_text": "萌兔来袭卡池完成5抽即可领取",
          "remain_stock": -1,
          "require_item_amount": 5,
          "reward_tag": "",
          "sort": 1,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        }
      ],
      "collect_infos": [
        {
          "card_item": null,
          "collect_id": 0,
          "effective_forever": 1,
          "end_time": 2114406245,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 0,
          "owned_item_amount": 0,
          "rank_info": null,
          "redeem_cond_type": "",
          "redeem_count": null,
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/4a1c83384e394799cb0386d89a8da9d03109d4c2.png",
          "redeem_detail_videos": null,
          "redeem_item_id": "",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/open/9644fc29d90bef69da65a977bf3a08cd9216a4b7.png",
          "redeem_item_image_download": "",
          "redeem_item_name": "小白兔奶糖·专属勋章",
          "redeem_item_optional_list": null,
          "redeem_item_type": 1001,
          "redeem_items_optional": null,
          "redeem_text": "1抽必得勋章，可应用为评论背景&动态卡片",
          "remain_stock": 0,
          "require_item_amount": 1,
          "reward_tag": "",
          "sort": 0,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        },
        {
          "card_item": {
            "card_asset_info": null,
            "card_type_info": {
              "card_no_style": {
                "color_format": {
                  "colors": [
                    "#B8C7D0FF",
                    "#A2A7B0FF"
                  ],
                  "end_point": "100,100",
                  "gradients": [
                    0,
                    100
                  ],
                  "start_point": "0,0"
                }
              },
              "cardgame": null,
              "content": {
                "animation": {
                  "animation_backup_image": "https://i0.hdslb.com/bfs/garb/open/6a4e0192a030aff40b86974fbadd448e3e30f6fc.png",
                  "animation_first_frame": "https://i0.hdslb.com/bfs/garb/open/6a4e0192a030aff40b86974fbadd448e3e30f6fc.png",
                  "animation_url": "upos://panguxcodeboss/eb/q6/_00000xqr09h0umljz20rtb7ms1vq6eb-1-162111110023.mp4",
                  "animation_video_urls": [
                    "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/eb/q6/_00000xqr09h0umljz20rtb7ms1vq6eb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=a15e017c059040678783d6c9d647ceaaB&mid=0&platform=html5&og=cos&upsig=177e236410c3bed4ab9d4dfc4fd909d7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
                    "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/eb/q6/_00000xqr09h0umljz20rtb7ms1vq6eb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=a15e017c059040678783d6c9d647ceaaB&mid=0&platform=html5&og=cos&upsig=177e236410c3bed4ab9d4dfc4fd909d7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
                    "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/eb/q6/_00000xqr09h0umljz20rtb7ms1vq6eb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=a15e017c059040678783d6c9d647ceaaB&mid=0&platform=html5&og=cos&upsig=177e236410c3bed4ab9d4dfc4fd909d7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
                  ],
                  "compressed_w_h": "",
                  "duration": 13,
                  "height": 0,
                  "is_mute": false,
                  "location": "",
                  "subtitles_url": "",
                  "width": 0
                },
                "image": null
              },
              "extra_info": "{\"material_layout\":0,\"material_width\":1242,\"material_height\":1863,\"attributes\":null,\"is_limit\":0,\"smelt\":null}",
              "face_overflow": null,
              "height": 1863,
              "id": 1764324502002,
              "layout": 0,
              "material_sub_type": 0,
              "material_type": 2,
              "name": "甜梦",
              "overview_image": "https://i0.hdslb.com/bfs/garb/open/6a4e0192a030aff40b86974fbadd448e3e30f6fc.png",
              "overview_image_watermarks": [
                {
                  "scene": 1,
                  "watermark_image": "https://i0.hdslb.com/bfs/garb/watermark/d92129448d16e1652bc557f5c79ac8735a49f17a.png"
                }
              ],
              "scarcity": 0,
              "space_background": {
                "animation": {
                  "animation_backup_image": "https://i0.hdslb.com/bfs/garb/open/6a4e0192a030aff40b86974fbadd448e3e30f6fc.png@1080w_1618h",
                  "animation_first_frame": "https://i0.hdslb.com/bfs/garb/open/6a4e0192a030aff40b86974fbadd448e3e30f6fc.png@1080w_1618h",
                  "animation_url": "upos://panguxcodeboss/eb/q6/_00000xqr09h0umljz20rtb7ms1vq6eb-1-162111110023.mp4",
                  "animation_video_urls": [
                    "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/eb/q6/_00000xqr09h0umljz20rtb7ms1vq6eb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=a15e017c059040678783d6c9d647ceaaB&mid=0&platform=html5&og=cos&upsig=177e236410c3bed4ab9d4dfc4fd909d7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
                    "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/eb/q6/_00000xqr09h0umljz20rtb7ms1vq6eb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=a15e017c059040678783d6c9d647ceaaB&mid=0&platform=html5&og=cos&upsig=177e236410c3bed4ab9d4dfc4fd909d7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
                    "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/eb/q6/_00000xqr09h0umljz20rtb7ms1vq6eb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=a15e017c059040678783d6c9d647ceaaB&mid=0&platform=html5&og=cos&upsig=177e236410c3bed4ab9d4dfc4fd909d7&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
                  ],
                  "compressed_w_h": "1079-1618",
                  "duration": 13,
                  "height": 0,
                  "is_mute": false,
                  "location": "0-0-1079-1079",
                  "subtitles_url": "",
                  "width": 0
                },
                "image": null
              },
              "splash": {
                "logo_mode": 1,
                "mode": "full",
                "resource": {
                  "full_size": {
                    "thumb": "https://i0.hdslb.com/bfs/vas_new/64ee3b6e5f732e86edfa6c80fc525877959951e7.webp",
                    "thumb_hash": "3299833bda6f2b31620a17b33357c1e3"
                  },
                  "normal": {
                    "thumb": "https://i0.hdslb.com/bfs/vas_new/bf7146334b8af0f3895d8dfb0c8ee51aba6307a6.webp",
                    "thumb_hash": "a756c1b671f544713f55d56cd3d93fed"
                  }
                }
              },
              "theme": "open",
              "watermark_animations": [
                {
                  "scene": 2,
                  "watermark_animation": "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermarkjb/3g/_00003d24n57tmec3b2ttk9lw1hu3gjb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=a15e017c059040678783d6c9d647ceaaB&mid=0&platform=html5&og=hw&upsig=b56771efc8832b51d15262bb5ea4a063&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0"
                },
                {
                  "scene": 2,
                  "watermark_animation": "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermarkjb/3g/_00003d24n57tmec3b2ttk9lw1hu3gjb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=a15e017c059040678783d6c9d647ceaaB&mid=0&platform=html5&og=hw&upsig=b56771efc8832b51d15262bb5ea4a063&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0"
                },
                {
                  "scene": 2,
                  "watermark_animation": "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermarkjb/3g/_00003d24n57tmec3b2ttk9lw1hu3gjb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=a15e017c059040678783d6c9d647ceaaB&mid=0&platform=html5&og=hw&upsig=b56771efc8832b51d15262bb5ea4a063&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
                }
              ],
              "width": 1242
            },
            "play": null,
            "tag": null
          },
          "collect_id": 110767,
          "effective_forever": 1,
          "end_time": 2114406245,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": null,
          "redeem_cond_type": "lottery_num",
          "redeem_count": {
            "has_redeem_count": 0,
            "redeem_count": 2,
            "redeem_count_type": 0
          },
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/open/6a4e0192a030aff40b86974fbadd448e3e30f6fc.png",
          "redeem_detail_videos": null,
          "redeem_item_id": "1764324502002",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/open/6a4e0192a030aff40b86974fbadd448e3e30f6fc.png",
          "redeem_item_image_download": "",
          "redeem_item_name": "小白兔奶糖典藏卡",
          "redeem_item_optional_list": null,
          "redeem_item_type": 1,
          "redeem_items_optional": null,
          "redeem_text": "萌兔来袭卡池完成12抽即可领取",
          "remain_stock": -1,
          "require_item_amount": 12,
          "reward_tag": "",
          "sort": 1,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        },
        {
          "card_item": {
            "card_asset_info": null,
            "card_type_info": null,
            "play": null,
            "tag": null
          },
          "collect_id": 110766,
          "effective_forever": 0,
          "end_time": 1769788800,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": {
            "deadline": 1767283199,
            "from": 6,
            "my_rank": 0,
            "to": 10
          },
          "redeem_cond_type": "collect_rank",
          "redeem_count": {
            "has_redeem_count": 0,
            "redeem_count": 2,
            "redeem_count_type": 0
          },
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/3f4cbefa3932f7f7fb969f2a48386171ee1ffe8b.jpg",
          "redeem_detail_videos": null,
          "redeem_item_id": "",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/3f4cbefa3932f7f7fb969f2a48386171ee1ffe8b.jpg",
          "redeem_item_image_download": "",
          "redeem_item_name": "小白兔奶糖收藏集TOP6-10",
          "redeem_item_optional_list": null,
          "redeem_item_type": 9,
          "redeem_items_optional": null,
          "redeem_text": "截止2026年01月01日 23:59:59，收藏家排行榜排名第6-10名可获得小白兔奶糖收藏集TOP6-10",
          "remain_stock": -1,
          "require_item_amount": 1,
          "reward_tag": "",
          "sort": 1,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        },
        {
          "card_item": {
            "card_asset_info": null,
            "card_type_info": null,
            "play": null,
            "tag": null
          },
          "collect_id": 110765,
          "effective_forever": 0,
          "end_time": 1769788800,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": {
            "deadline": 1767283199,
            "from": 4,
            "my_rank": 0,
            "to": 5
          },
          "redeem_cond_type": "collect_rank",
          "redeem_count": {
            "has_redeem_count": 0,
            "redeem_count": 2,
            "redeem_count_type": 0
          },
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/4e6b3c621ef4fe022e8c1c140d7330387237c0da.jpg",
          "redeem_detail_videos": null,
          "redeem_item_id": "",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/4e6b3c621ef4fe022e8c1c140d7330387237c0da.jpg",
          "redeem_item_image_download": "",
          "redeem_item_name": "小白兔奶糖收藏集TOP4-5",
          "redeem_item_optional_list": null,
          "redeem_item_type": 9,
          "redeem_items_optional": null,
          "redeem_text": "截止2026年01月01日 23:59:59，收藏家排行榜排名第4-5名可获得小白兔奶糖收藏集TOP4-5",
          "remain_stock": -1,
          "require_item_amount": 1,
          "reward_tag": "",
          "sort": 1,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        },
        {
          "card_item": {
            "card_asset_info": null,
            "card_type_info": null,
            "play": null,
            "tag": null
          },
          "collect_id": 110764,
          "effective_forever": 0,
          "end_time": 1769788800,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": {
            "deadline": 1767283199,
            "from": 2,
            "my_rank": 0,
            "to": 3
          },
          "redeem_cond_type": "collect_rank",
          "redeem_count": {
            "has_redeem_count": 0,
            "redeem_count": 2,
            "redeem_count_type": 0
          },
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/ef25c5d90433a0e4bd3be629530822a7b298863e.jpg",
          "redeem_detail_videos": null,
          "redeem_item_id": "",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/ef25c5d90433a0e4bd3be629530822a7b298863e.jpg",
          "redeem_item_image_download": "",
          "redeem_item_name": "小白兔奶糖收藏集TOP2-3",
          "redeem_item_optional_list": null,
          "redeem_item_type": 9,
          "redeem_items_optional": null,
          "redeem_text": "截止2026年01月01日 23:59:59，收藏家排行榜排名第2-3名可获得小白兔奶糖收藏集TOP2-3",
          "remain_stock": -1,
          "require_item_amount": 1,
          "reward_tag": "",
          "sort": 1,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        },
        {
          "card_item": {
            "card_asset_info": null,
            "card_type_info": null,
            "play": null,
            "tag": null
          },
          "collect_id": 110763,
          "effective_forever": 0,
          "end_time": 1769788800,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": {
            "deadline": 1767283199,
            "from": 1,
            "my_rank": 0,
            "to": 1
          },
          "redeem_cond_type": "collect_rank",
          "redeem_count": {
            "has_redeem_count": 0,
            "redeem_count": 2,
            "redeem_count_type": 0
          },
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/53d7e6ec3c10782d47c2832c45383cb563f78662.jpg",
          "redeem_detail_videos": null,
          "redeem_item_id": "",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/53d7e6ec3c10782d47c2832c45383cb563f78662.jpg",
          "redeem_item_image_download": "",
          "redeem_item_name": "小白兔奶糖收藏集TOP1",
          "redeem_item_optional_list": null,
          "redeem_item_type": 9,
          "redeem_items_optional": null,
          "redeem_text": "截止2026年01月01日 23:59:59，收藏家排行榜排名第1名可获得小白兔奶糖收藏集TOP1",
          "remain_stock": -1,
          "require_item_amount": 1,
          "reward_tag": "",
          "sort": 1,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        },
        {
          "card_item": {
            "card_asset_info": null,
            "card_type_info": null,
            "play": null,
            "tag": null
          },
          "collect_id": 110762,
          "effective_forever": 0,
          "end_time": 1767283199,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": null,
          "redeem_cond_type": "scarcity",
          "redeem_count": {
            "has_redeem_count": 0,
            "redeem_count": 2,
            "redeem_count_type": 0
          },
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/bdc065ed2f2d68f10688ef0656a1101d0022e553.jpg",
          "redeem_detail_videos": null,
          "redeem_item_id": "",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/bdc065ed2f2d68f10688ef0656a1101d0022e553.jpg",
          "redeem_item_image_download": "",
          "redeem_item_name": "小白兔奶糖全图鉴奖励",
          "redeem_item_optional_list": null,
          "redeem_item_type": 9,
          "redeem_items_optional": null,
          "redeem_text": "萌兔来袭卡池抽到任意24张不同卡牌即可领取",
          "remain_stock": -1,
          "require_item_amount": 24,
          "reward_tag": "",
          "sort": 1,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        },
        {
          "card_item": {
            "card_asset_info": null,
            "card_type_info": null,
            "play": null,
            "tag": null
          },
          "collect_id": 110760,
          "effective_forever": 1,
          "end_time": 2114406245,
          "has_redeemed_cnt": 0,
          "jump_url": "",
          "lottery_id": 110758,
          "owned_item_amount": 0,
          "rank_info": null,
          "redeem_cond_type": "scarcity",
          "redeem_count": {
            "has_redeem_count": 0,
            "redeem_count": 2,
            "redeem_count_type": 0
          },
          "redeem_detail_image": "https://i0.hdslb.com/bfs/garb/open/b0aa778e426c9b6274a5a3a46a7d7d4846c17d11.png",
          "redeem_detail_videos": null,
          "redeem_item_id": "1764310735001",
          "redeem_item_image": "https://i0.hdslb.com/bfs/garb/open/b0aa778e426c9b6274a5a3a46a7d7d4846c17d11.png",
          "redeem_item_image_download": "",
          "redeem_item_name": "小白兔奶糖头像挂件",
          "redeem_item_optional_list": null,
          "redeem_item_type": 3,
          "redeem_items_optional": null,
          "redeem_text": "萌兔来袭卡池抽到任意1张隐藏款立绘即可领取",
          "remain_stock": -1,
          "require_item_amount": 1,
          "reward_tag": "",
          "sort": 1,
          "start_time": 1764820800,
          "total_stock": -1,
          "unlock_condition": {
            "current_threshold": 0,
            "expire_at": 0,
            "lock_type": 0,
            "unlock_threshold": 0,
            "unlocked": true,
            "unlocked_at": 0
          }
        }
      ]
    },
    "guide_info": {
      "guide_content": "",
      "jump_url": "",
      "title": ""
    },
    "is_booked": 0,
    "is_fission": 0,
    "item_list": [
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/ae3343b6c9ad72e95e6207d0ba786e79dab5d348.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/9110bd75c9667d73192c34eac8d3cb06a8415647.png",
          "card_name": "与你同行",
          "card_scarcity": 40,
          "card_sub_type": 0,
          "card_type": 2,
          "card_type_id": 1764313749002,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/yb/ne/_00000et24q7obz5ko28brfwrtxqneyb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=5a0f67e8358843831b7767216838498d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/yb/ne/_00000et24q7obz5ko28brfwrtxqneyb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=5a0f67e8358843831b7767216838498d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/yb/ne/_00000et24q7obz5ko28brfwrtxqneyb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=5a0f67e8358843831b7767216838498d&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "video_list_download": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermarkmb/iw/_000004cb8k4wuousr2dfrehhh8diwmb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=7e276c9769211edd93f2eb71efea2642&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermarkmb/iw/_000004cb8k4wuousr2dfrehhh8diwmb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=7e276c9769211edd93f2eb71efea2642&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermarkmb/iw/_000004cb8k4wuousr2dfrehhh8diwmb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=7e276c9769211edd93f2eb71efea2642&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/3fbdc5475ced2f8072bc5135d20cd9fc482be09a.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/dfe7e107366e3a91aa7640f17570bb6bf98361ef.png",
          "card_name": "萌兔来袭",
          "card_scarcity": 40,
          "card_sub_type": 0,
          "card_type": 2,
          "card_type_id": 1764313749003,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": [
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/qb/vd/_000017629xvcmkgkn245mm5n4w9vdqb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=b3eb65b42fdf0e6431c595526cdbe984&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/qb/vd/_000017629xvcmkgkn245mm5n4w9vdqb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=b3eb65b42fdf0e6431c595526cdbe984&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/qb/vd/_000017629xvcmkgkn245mm5n4w9vdqb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=b3eb65b42fdf0e6431c595526cdbe984&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "video_list_download": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermarkjb/vj/_00001hixz4ghghckk2e8w8mzq03vjjb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=4a845b41de571719bb7100f081cb74c1&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermarkjb/vj/_00001hixz4ghghckk2e8w8mzq03vjjb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=4a845b41de571719bb7100f081cb74c1&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermarkjb/vj/_00001hixz4ghghckk2e8w8mzq03vjjb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=4a845b41de571719bb7100f081cb74c1&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/8726fe46306f65f0296df33fef5f664489dbad58.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/63ca0645cfd9b53239b3bf9b91e46ba41263475c.png",
          "card_name": "祈盼",
          "card_scarcity": 40,
          "card_sub_type": 0,
          "card_type": 2,
          "card_type_id": 1764313749004,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/jb/13/_00002la7byxfwfg9b2jaguzb7r913jb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=e11a7132d066f0806448d9b257daccaa&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/jb/13/_00002la7byxfwfg9b2jaguzb7r913jb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=e11a7132d066f0806448d9b257daccaa&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/jb/13/_00002la7byxfwfg9b2jaguzb7r913jb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=e11a7132d066f0806448d9b257daccaa&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "video_list_download": [
            "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermark8b/37/_00003af68f4fitzv92u5yz52eg1378b-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=cos&upsig=512f9d5a0125b5494792c4d51025bfd0&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermark8b/37/_00003af68f4fitzv92u5yz52eg1378b-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=cos&upsig=512f9d5a0125b5494792c4d51025bfd0&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermark8b/37/_00003af68f4fitzv92u5yz52eg1378b-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=cos&upsig=512f9d5a0125b5494792c4d51025bfd0&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/53e2faf221be2499f4fbeadae5efa9bfb77cd0d7.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/92c972b2e00e07fadcf386f63e80a7d46f12ff98.png",
          "card_name": "纯洁无暇-安克雷奇",
          "card_scarcity": 30,
          "card_sub_type": 0,
          "card_type": 2,
          "card_type_id": 1764313749023,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/jb/0c/_0000067ea4mswkvq2242yt91vu20cjb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=538083f65d66c701f78ae4a47bf25626&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/jb/0c/_0000067ea4mswkvq2242yt91vu20cjb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=538083f65d66c701f78ae4a47bf25626&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/jb/0c/_0000067ea4mswkvq2242yt91vu20cjb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=538083f65d66c701f78ae4a47bf25626&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "video_list_download": [
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/digital_watermarkqb/4y/_00003vck600yy2yy12txp5xrj3x4yqb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=d7917e94ef9f898243a80a928b5cebc3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/digital_watermarkqb/4y/_00003vck600yy2yy12txp5xrj3x4yqb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=d7917e94ef9f898243a80a928b5cebc3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/digital_watermarkqb/4y/_00003vck600yy2yy12txp5xrj3x4yqb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=d7917e94ef9f898243a80a928b5cebc3&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/a865bb3f50c2819e7024d7bf79a1032dbb1fd2b4.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/762eb236cfa04f867cc521d868c15bc0a611bfdf.png",
          "card_name": "携光同进-甘雨",
          "card_scarcity": 30,
          "card_sub_type": 0,
          "card_type": 2,
          "card_type_id": 1764313749024,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/hb/3m/_00003hnvtjfii3tom2pztmwk48a3mhb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=98043b88bbd61ddf534502605dae43ee&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/hb/3m/_00003hnvtjfii3tom2pztmwk48a3mhb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=98043b88bbd61ddf534502605dae43ee&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/hb/3m/_00003hnvtjfii3tom2pztmwk48a3mhb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=98043b88bbd61ddf534502605dae43ee&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "video_list_download": [
            "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermarknb/64/_000039enu2a0ol76s2g6ry9g2le64nb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=cos&upsig=3cbb90bea7417fb852865eb5de65ad4b&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermarknb/64/_000039enu2a0ol76s2g6ry9g2le64nb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=cos&upsig=3cbb90bea7417fb852865eb5de65ad4b&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermarknb/64/_000039enu2a0ol76s2g6ry9g2le64nb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=cos&upsig=3cbb90bea7417fb852865eb5de65ad4b&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/e16286f83036e08cad80a792ca897bd5d30bd864.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/bb333dacdd7f8a5b994e908f1d5c684241119491.png",
          "card_name": "花海尽头-遐蝶",
          "card_scarcity": 30,
          "card_sub_type": 0,
          "card_type": 2,
          "card_type_id": 1764313749025,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/db/cy/_000003gv1je3up2fv2uiz6box5lcydb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=c4a1260ff4c47ca59748a252729b50ca&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/db/cy/_000003gv1je3up2fv2uiz6box5lcydb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=c4a1260ff4c47ca59748a252729b50ca&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/db/cy/_000003gv1je3up2fv2uiz6box5lcydb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=c4a1260ff4c47ca59748a252729b50ca&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "video_list_download": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermarkzb/ze/_00003ap4cjnap6xzp2e3hm3eh30zezb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=57f32db9d965fc9aeea83556668874bf&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermarkzb/ze/_00003ap4cjnap6xzp2e3hm3eh30zezb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=57f32db9d965fc9aeea83556668874bf&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermarkzb/ze/_00003ap4cjnap6xzp2e3hm3eh30zezb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=57f32db9d965fc9aeea83556668874bf&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/51cf1ff2ac5db70d8a809b20cabb47d97aef4d22.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/c13671d4a019ab3ebd0be0037a35cd828bf9aa03.png",
          "card_name": "初见",
          "card_scarcity": 20,
          "card_sub_type": 0,
          "card_type": 2,
          "card_type_id": 1764313749005,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": [
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/db/7m/_00002w29amnhex7gn268lc27lpa7mdb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=633e2fffcbbcb135b3aa41ac71a05fc6&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/db/7m/_00002w29amnhex7gn268lc27lpa7mdb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=633e2fffcbbcb135b3aa41ac71a05fc6&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/db/7m/_00002w29amnhex7gn268lc27lpa7mdb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=633e2fffcbbcb135b3aa41ac71a05fc6&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "video_list_download": [
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/digital_watermarkfb/ed/_00003d7twrg52fkmu2gwq814q9bedfb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=542d6664168adae0d4df3aeb94a35857&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/digital_watermarkfb/ed/_00003d7twrg52fkmu2gwq814q9bedfb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=542d6664168adae0d4df3aeb94a35857&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorbd.bilivideo.com/panguxcodeboss/digital_watermarkfb/ed/_00003d7twrg52fkmu2gwq814q9bedfb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=bdbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=542d6664168adae0d4df3aeb94a35857&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/b10ec16217ed27607f73184d0d96d64d9cfc1213.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/1110affaa8b9f9a8182a87c6b73c641a14964dde.png",
          "card_name": "小美好",
          "card_scarcity": 20,
          "card_sub_type": 0,
          "card_type": 2,
          "card_type_id": 1764313749006,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": [
            "https://upos-sz-mirrorali.bilivideo.com/panguxcodeboss/zb/3p/_00001fkv30m1f85ld244670cgkx3pzb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=alibv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=ali&upsig=cb15a83292330ebcbf8df481040cef1a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-estgoss.bilivideo.com/panguxcodeboss/zb/3p/_00001fkv30m1f85ld244670cgkx3pzb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=upos&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=ali&upsig=ca8379b4be58537fb1e245091785be96&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorali.bilivideo.com/panguxcodeboss/zb/3p/_00001fkv30m1f85ld244670cgkx3pzb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=alibv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=ali&upsig=cb15a83292330ebcbf8df481040cef1a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "video_list_download": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermark6b/uw/_00001q9nlm2ywf2ov2iui08ecisuw6b-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=8594304db457bd50150ff9c7018f6c1e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermark6b/uw/_00001q9nlm2ywf2ov2iui08ecisuw6b-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=8594304db457bd50150ff9c7018f6c1e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/digital_watermark6b/uw/_00001q9nlm2ywf2ov2iui08ecisuw6b-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=8594304db457bd50150ff9c7018f6c1e&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/6dc6cf5df66a2a9bf084752f6aa604fbf26ee124.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/6ea50f61d983f30b4873d4a399c43a9daf0fd00d.png",
          "card_name": "懵懂时光",
          "card_scarcity": 20,
          "card_sub_type": 0,
          "card_type": 2,
          "card_type_id": 1764313749007,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": [
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/fb/y3/_00002fg00k89h0hou2o0lk16hcfy3fb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=6c1661ac47e726acf192f069635c9631&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/fb/y3/_00002fg00k89h0hou2o0lk16hcfy3fb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=6c1661ac47e726acf192f069635c9631&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirror08c.bilivideo.com/panguxcodeboss/fb/y3/_00002fg00k89h0hou2o0lk16hcfy3fb-1-162111110023.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=08cbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=hw&upsig=6c1661ac47e726acf192f069635c9631&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "video_list_download": [
            "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermarkkb/22/_00001r774bf3f4iwp2rr8twtkee22kb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=cos&upsig=0ba9b7124689e07f5192accaaca01436&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=0,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermarkkb/22/_00001r774bf3f4iwp2rr8twtkee22kb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=cos&upsig=0ba9b7124689e07f5192accaaca01436&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=1,3&logo=00000000&f=B_0_0",
            "https://upos-sz-mirrorcos.bilivideo.com/panguxcodeboss/digital_watermarkkb/22/_00001r774bf3f4iwp2rr8twtkee22kb-teaser.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1765020752&gen=playurlv2&os=cosbv&oi=1910149235&trid=6a7b059d0cff4fdd86499ba0f4d5dae2B&mid=0&platform=html5&og=cos&upsig=0ba9b7124689e07f5192accaaca01436&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform,og&bvc=vod&nettype=0&orderid=2,3&logo=00000000&f=B_0_0"
          ],
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/f72a71c0baf68e2eebbd57408cd9bae8ca2dc510.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/600ea40c5f1241c47dfff88cea9fd8ea6253fe74.png",
          "card_name": "循循守月",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749008,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/9b5c758c43e291c27ceeba4cb46ef57be8fff784.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/451078ead488ced78046c4e135a81ec5f1d52f0a.png",
          "card_name": "寻光",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749009,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/2dfbbc1393fba3ad036f52e70c1ea1bfbc6cef42.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/80990d6cef8092bdb5aca6576b035247d1cf0291.png",
          "card_name": "心向暖阳",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749010,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/9fb0406d1a629cc62833fb9e4ec3996ee6ae6633.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/0d5983ed72daf5e8d600e9c918d04eebef610325.png",
          "card_name": "琉璃岁月",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749011,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/6ea49e51203cc55578e367baceaee65ad5872511.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/5b1fc7b0b41f653122c89a6d5809ff663e1c1a03.png",
          "card_name": "蝶影",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749012,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/1954981411af11f5b932518c26ca7d5fac155e94.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/16144d48bbabf1eea4ac5eaec8640d821431849d.png",
          "card_name": "甜蜜晨间",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749013,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/018658603166b227a9ec703898054f675d762096.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/7a435e3ce0455bf86e910fcb8d5c4ab2b842f438.png",
          "card_name": "暮色归程",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749014,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/875d5661efe677020ff8064fc3317854207730c5.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/ed68130256e1db40752698238bf83b0339ff4b02.png",
          "card_name": "假日时光",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749015,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/640484852e82aa69dc6164c70bc29224235d139a.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/6c3d5abd2ef62ac3fa6d3092c7f265213bb26ba2.png",
          "card_name": "不负韶华",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749016,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/2fbf78fe8fdcf9df8a655df9bbb62a89b5544967.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/3122b61107c5fdba81d82e9426bb7ad2fd964f4c.png",
          "card_name": "光斑跃动",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749017,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/724aaa0cd05a91d1cae3c35115afbc57c9f9ba9b.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/897a9a58b3e72c6d9204dfac441ee79f99ea96e1.png",
          "card_name": "岁月静好",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749018,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/508841e175cf4dc198371d172569f90ae2227cbc.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/2b51a01c16283d65f947c6abefeb142aa077a213.png",
          "card_name": "年少时光",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749019,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/3fcf8d6d74dd15e14393fb7958ffa25863b45f05.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/7b7e85082f4a05a274928b2e6ce09a6b1218e678.png",
          "card_name": "晨露微光",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749020,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/db91d4988479fc7fbf913c62eab8d1da96a76981.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/f0352a56343d4499d923586b3486471eaf310c15.png",
          "card_name": "赴约",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749021,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      },
      {
        "card_info": {
          "card_ext_text": "",
          "card_img": "https://i0.hdslb.com/bfs/garb/open/adc08626aa4c224ae8b3822654bfbbf68fe69193.png",
          "card_img_download": "https://i0.hdslb.com/bfs/garb/watermark/63deef2ae4892cc182c9221b96aa3480186f3b9f.png",
          "card_name": "慵懒",
          "card_scarcity": 10,
          "card_sub_type": 0,
          "card_type": 1,
          "card_type_id": 1764313749022,
          "height": 1863,
          "is_limited_card": 0,
          "is_mute": 0,
          "is_new_tag": 0,
          "is_physical_orientation": 0,
          "is_up_tag": 0,
          "meta_info": null,
          "play": null,
          "stock_info": null,
          "subtitles_url": "",
          "tag": null,
          "video_list": null,
          "video_list_download": null,
          "width": 1242
        },
        "item_type": 1
      }
    ],
    "lottery_id": 110758,
    "name": "萌兔来袭",
    "physical_exchange": 0,
    "total_book_cnt": 502
  },
  "message": "0",
  "ttl": 1
}
</details>