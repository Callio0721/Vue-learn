## 主题装扮信息API

> https://api.bilibili.com/x/garb/v2/mall/suit/detail

*请求方式: GET*

**URL参数:**

| 参数名     | 类型  | 内容   | 必要性 | 备注 |
|---------|-----|------|----| ---- |
| buvid   | str | 设备唯一标识 | 不必要 |  |
| csrf    | str | 用户csrf | 不必要 |  |
| from    | str | 来源页面 | 不必要 |  |
| from_id | int | 来源页面id | 不必要 |  |
| item_id | int | 装扮id | 必要 |  |
| part    | str | ?分类  | 不必要 |  |

**JSON回复:**

根对象：

| 字段      | 类型  | 内容   | 备注              |
|---------|-----|------|-----------------|
| code    | num | 返回值  | `0`：成功<br />`-400`：错误 |
| message | str | 错误信息 |                 |
| ttl     | num | 1    |                     |
| data    | obj | 信息本体 |                |

`data` 对象：

| 字段    | 类型  | 内容     | 备注         |
|---------|-----|--------|------------|
| item_id | num | 装扮id   |            |
| name | str | 装扮名称   |            |
| group_id | num | 分组id   |            |
| group_name | str | 分组名称   |            |
| part_id | num | 分类id   |            |
| state | str | 状态     |            |
| properties | obj | 装扮具体属性 |            |
| current_activity | str | 当前活动   |            |
| next_activity | obj | 下一个活动  |            |
| current_sources | str |        | **作用尚不明确** |
| finish_sources | str |        | **作用尚不明确**   |
| sale_left_time | num |        | **作用尚不明确**           |
| sale_time_end | num |        | **作用尚不明确**           |
| sale_surplus | num | 商品剩余数量 |            |
| sale_count_desc | str | 促销销量说明 |            |
| total_count_desc | str | 总销量说明  |            |
| tag | str | 标签     |            |
| jump_link | str | 跳转链接   |            |
| sales_mode | num | 促销模式   |            |
| suit_items | obj | 装扮具体内容 |            |
| fan_user | obj | 装扮来源用户 |            |
| unlock_items | obj | 未解锁装扮  |            |
| activity_entrance | obj | 活动入口   |            |

`properties` 对象：

| 字段    | 类型  | 内容             | 备注                          |
|---------|-----|----------------|-----------------------------|
| desc | str | 说明             |                             |
| fan_desc | str | 用户说明           |                             |
| fan_id | str | 装扮id           | 获取到的数据，有时候是数字文本，有时候是普通文本    |
| fan_item_ids | str | 装扮id列表         |                             |
| fan_mid | str | 用户mid          |                             |
| fan_no_color | str |                | **为一串颜色16进制字符串，但作用尚不明确**    |
| fan_recommend_desc | str | 用户推荐说明         |                             |
| fan_recommend_jump_type | str | 跳转类型           |                             |
| fan_recommend_jump_value | str | 跳转的值           | 一般为该装扮所有者的个人空间链接            |
| fan_share_image | str |                |                             |
| gray_rule | str |                | **布尔型转换的字符串，作用尚不明确**          |
| gray_rule_type | str |                | **作用尚不明确**                  |
| image_cover | str | 图片封面链接         |                             |
| image_cover_color | str | 图片封面颜色         |                             |
| is_hide | str | 是否隐藏           | **布尔型转换的字符串，作用尚不明确**          |
| item_id_card | str | 动态卡片id         |                             |
| item_id_emoji | str | 表情包id          |                             |
| item_id_thumbup | str | 动态点赞特效id       |                             |
| open_platform_vip_discount | str | 是否开启平台VIP折扣    |                             |
| owner_uid | str | 装扮所有者的用户uid    |                             |
| rank_investor_show | str | ?显示投资者排名       | **布尔型转换的字符串，作用尚不明确**          |
| realname_auth | str |                | **布尔型转换的字符串，作用尚不明确**          |
| sale_bp_forever_raw | str |                |                             |
| sale_bp_pm_raw | str |                |                             |
| sale_buy_num_limit | str | 促销限制数量         |                             |
| sale_quantity | str | 促销质量           | 整数型转换的字符串，"10000"可能表示的是这张图的原画 |
| sale_quantity_limit | str | ?是否限制某些质量装扮的销售 | **布尔型转换的字符串，作用尚不明确**        |
| sale_region_ip_limit | str | 促销限制地区         |                             |
| sale_reserve_switch | str |                | **布尔型转换的字符串，作用尚不明确**          |
| sale_time_begin | str | 促销开始时间的时间戳     |                             |
| sale_type | str | 促销类型           |                             |
| suit_card_type | str | 装扮卡片类型         |                             |
| type | str | 类型             | **作用尚不明确**                  |

`suit_items` 对象（可能不全，会继续补充）：

| 字段    | 类型  | 内容     | 备注         |
|---------|-----|--------|------------|
| card | array | 动态卡片 |                             |
| emoji_package | array | 表情包    |                             |
| card_bg | array | 专属评论装扮 |                             |
| thumbup | array | 动态点赞特效 |                             |
| loading | array | 专属加载动画 |                             |
| play_icon | array | 专属进度条  |                             |
| skin | array | 专属个性主题 |                             |
| space_bg | array | 专属空间海报 |                             |

`suit_items` 中每个数组的对象：

**即上文中所列出的 `suit_items` 中的那些数组对象，对于这些数组，<br />它们其中的字段基本都是相同的，不同的地方会在后面继续说明。**

| 字段    | 类型  | 内容      | 备注                   |
|---------|-----|---------|----------------------|
| item_id | num | 装扮id    |                      |
| name | str | 装扮名称    |                      |
| state | str | 状态      |                      |
| tab_id | num | 分栏id    |                      |
| suit_item_id | num | 所属装扮的id |                      |
| properties | obj | 装扮具体属性  | **不同点主要集中在这个地方，下文将继续说明** |
| current_activity | str | 当前活动    |                      |
| next_activity | obj | 下一个活动   |                      |
| current_sources | str |         | **作用尚不明确**           |
| finish_sources | str |         | **作用尚不明确**           |
| sale_left_time | str |         | **作用尚不明确**           |
| sale_time_end | str |         | **作用尚不明确**           |
| sale_surplus | str | 商品剩余数量  |                      |
| items | str | 装扮的具体内容 |                      |

关于上述提到的 `properties` 对象中的共有字段：

| 字段    | 类型  | 内容   | 备注                   |
|---------|-----|------|----------------------|
| gray_rule | str |      | **布尔型转换的字符串，作用尚不明确**          |
| gray_rule_type | str |      | **作用尚不明确**                  |
| realname_auth | str |      | **布尔型转换的字符串，作用尚不明确**          |
| sale_type | str | 促销类型 |                             |
| image | str | 图片   |                             |
| image_preview_small | str | 预览图  |                             |

`emoji_package` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容    | 备注                   |
|---------|-----|-------|----------------------|
| addable | str |       | **布尔型转换的字符串，作用尚不明确**          |
| biz | str |       | **作用尚不明确**                  |
| is_symbol | str |       | **布尔型转换的字符串，作用尚不明确**          |
| permanent | str | 是否永久  |           |
| preview | str |       | **布尔型转换的字符串，作用尚不明确**          |
| recently_used | str |       | **布尔型转换的字符串，作用尚不明确**          |
| recommend | str | 是否推荐  |           |
| ref_mid | str |       |           |
| removable | str | 是否可移除 |           |
| setting_pannel_not_show | str |       | **布尔型转换的字符串，作用尚不明确**          |
| size | str | 尺寸    |           |
| sortable | str | 排序类型  |           |

`loading` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容         | 备注                   |
|---------|-----|------------|----------------------|
| loading_frame_url | str | 进度条动画的其中一帧 |  |
| loading_url | str | 进度条动画      |  |

`play_icon` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容          | 备注                   |
|---------|-----|-------------|----------------------|
| drag_left_png | str | 进度条向左拖动时的图片 |  |
| drag_right_png | str | 进度条向右拖动时的图片 |  |
| middle_png | str | 进度条暂停时的图片   |  |
| squared_image | str | 效果图         |  |
| static_icon_image | str | 静态图标        |  |

`skin` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容                  | 备注                   |
|---------|-----|---------------------|----------------------|
| head_bg | str | 首页顶部图片              |  |
| head_myself_mp4_play | str | 个人空间顶部视频动画的播放类型     |  |
| head_myself_squared_bg | str | 个人空间顶部图片            |  |
| head_tab_bg | str | 首页顶部标签栏背景图          |  |
| image_cover | str | 封面图                 |  |
| package_md5 | str | 装扮图包的md5值           |  |
| package_url | str | 装扮图包的压缩包链接          |  |
| skin_mode | str | 皮肤模式                |  |
| tail_bg | str | 首页底部图片              |  |
| tail_color | str | 首页底部颜色              |  |
| tail_color_selected | str | 首页底部被选中时的颜色         |  |
| tail_icon_ani | str | 首页底部是否播放动画          |  |
| tail_icon_ani_mode | str | 首页底部动画的播放类型         |  |
| tail_icon_channel | str | 首页底部“动态”按钮图片        |  |
| tail_icon_dynamic | str | 首页底部“发布动态”按钮图片      |  |
| tail_icon_main | str | 首页底部“首页”按钮图片        |  |
| tail_icon_mode | str | 首页底部图标模式            |  |
| tail_icon_myself | str | 首页底部“我的”按钮图片        |  |
| tail_icon_pub_btn_bg | str | 首页底部“发布动态”按钮图片      |  |
| tail_icon_selected_channel | str | 首页底部“动态”按钮被选中时的图片   |  |
| tail_icon_selected_dynamic | str | 首页底部“发布动态”按钮被选中时的图片 |  |
| tail_icon_selected_main | str | 首页底部“首页”按钮被选中时的图片   |  |
| tail_icon_selected_myself | str | 首页底部“我的”按钮被选中时的图片   |  |
| tail_icon_selected_pub_btn_bg | str | 首页底部“发布动态”按钮被选中时的图片 |  |
| tail_icon_selected_shop | str | 首页底部“会员购”按钮被选中时的图片  |  |
| tail_icon_shop | str | 首页底部“会员购”按钮图片       |  |

`space_bg` 数组中的对象中 `properties` 对象中的额外字段：

| 字段    | 类型  | 内容          | 备注                   |
|---------|-----|-------------|----------------------|
| image1_landscape | str | 第一张空间海报     |  |
| image1_portrait | str | 第一张空间海报（纵向） |  |

**如果是第二张图，则是`image2_xxx`，以此类推。**

**示例：**

```shell
curl -G 'https://api.bilibili.com/x/garb/v2/mall/suit/detail' \
     --data-urlencode 'buvid=xxx（非必须）' \
     --data-urlencode 'csrf=xxx（非必须）' \
     --data-urlencode 'item_id=42193' \
     --data-urlencode 'part=suit（非必须）'
```

<details>
<summary>查看响应示例:</summary>

```json
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "item_id":42193,
        "name":"装扮小姐姐·梦幻冬季",
        "group_id":69,
        "group_name":"装扮小姐姐·梦幻冬季",
        "part_id":6,
        "state":"active",
        "properties":{
            "desc":"扮扮糖集合啦！装扮小姐姐邀你共度梦幻冬季~",
            "fan_desc":"装扮小姐姐·梦幻冬季",
            "fan_id":"装扮小姐姐·梦幻冬季",
            "fan_item_ids":"42190,42124,42192,42191,42188,42189",
            "fan_mid":"647193094",
            "fan_no_color":"#3e52eb",
            "fan_recommend_desc":"扮扮糖集合啦！装扮小姐姐邀你共度梦幻冬季~",
            "fan_recommend_jump_type":"url",
            "fan_recommend_jump_value":"https://space.bilibili.com/647193094?spm_id_from=333.337.0.0",
            "fan_share_image":"https://i0.hdslb.com/bfs/garb/item/f9ad456fb74fc58896743eb393664e3c7622de0c.jpg",
            "gray_rule":"true",
            "gray_rule_type":"all",
            "image_cover":"https://i0.hdslb.com/bfs/garb/item/14072c2cb4f82c053d85dc92911da37583a17668.jpg",
            "image_cover_color":"#dcf0f9",
            "is_hide":"false",
            "item_id_card":"42123",
            "item_id_emoji":"42157",
            "item_id_thumbup":"42125",
            "open_platform_vip_discount":"true",
            "owner_uid":"647193094",
            "rank_investor_show":"false",
            "realname_auth":"false",
            "sale_bp_forever_raw":"5500",
            "sale_bp_pm_raw":"800",
            "sale_buy_num_limit":"100",
            "sale_quantity":"10000",
            "sale_quantity_limit":"true",
            "sale_region_ip_limit":"全球",
            "sale_reserve_switch":"false",
            "sale_time_begin":"1670410800",
            "sale_type":"pay",
            "suit_card_type":"big_img",
            "type":"ip"
        },
        "current_activity":null,
        "next_activity":{
            "type":"open_platform_vip_discount",
            "time_limit":true,
            "time_left":410175990,
            "tag":"大会员平台折扣",
            "price_bp_month":640,
            "price_bp_forever":4400,
            "type_month":"open_platform_vip_discount",
            "tag_month":"大会员平台折扣",
            "time_limit_month":true,
            "time_left_month":410175990
        },
        "current_sources":null,
        "finish_sources":null,
        "sale_left_time":-65301210,
        "sale_time_end":-1735712010,
        "sale_surplus":0,
        "sale_count_desc":"1万+",
        "total_count_desc":"",
        "tag":"粉丝套装已售罄",
        "jump_link":"",
        "sales_mode":0,
        "suit_items":{
            "card":[
                {
                    "item_id":42124,
                    "name":"装扮小姐姐梦幻冬季粉丝",
                    "state":"active",
                    "tab_id":35,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "hot":"false",
                        "image":"https://i0.hdslb.com/bfs/garb/item/3bebd46d5ac6eaa1d6c3f65854b184932fb6230b.png",
                        "image_preview_small":"https://i0.hdslb.com/bfs/garb/item/611fc0d3401623977f580f592747d721de330fc6.png",
                        "realname_auth":"false",
                        "sale_type":"other"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                },
                {
                    "item_id":42123,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":35,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "hot":"false",
                        "image":"https://i0.hdslb.com/bfs/garb/item/757320776561f6bf881b3c50bd59fc937cea3387.png",
                        "realname_auth":"false",
                        "sale_type":"other"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "card_bg":[
                {
                    "item_id":42189,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":44,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image":"https://i0.hdslb.com/bfs/garb/item/38cbcb481923f6a3d7e724a3837324a8ab0f602e.png",
                        "image_preview_small":"https://i0.hdslb.com/bfs/garb/item/c9621eedabdc728d728158aafab2e271f152561e.png",
                        "realname_auth":"false",
                        "sale_type":"suit"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "emoji_package":[
                {
                    "item_id":42157,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":8,
                    "suit_item_id":42193,
                    "properties":{
                        "addable":"true",
                        "biz":"dynamic,reply,watch_full",
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image":"https://i0.hdslb.com/bfs/garb/item/0dd53dc27d401cad0a3bfc07d91dba3af3a5d6d0.png",
                        "is_symbol":"false",
                        "item_ids":"42158,42159,42160,42161,42162,42163,42164,42165,42166,42167,42168,42169,42170,42171,42172,42173,42174,42175,42176,42177,42178,42179,42180,42181,42182,42183,42184,42185,42186,42187",
                        "permanent":"false",
                        "preview":"false",
                        "realname_auth":"false",
                        "recently_used":"false",
                        "recommend":"false",
                        "ref_mid":"0",
                        "removable":"true",
                        "sale_type":"pay",
                        "setting_pannel_not_show":"false",
                        "size":"L",
                        "sortable":"true"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":[
                        {
                            "item_id":42158,
                            "name":"[装扮小姐姐梦幻冬季_揉脸]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/e47ad8b1c16ebaa780e0574f360c67f4c45e6325.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42159,
                            "name":"[装扮小姐姐梦幻冬季_啾咪]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/098619d6f2859966157dc0da4d3a24ae7a690781.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42160,
                            "name":"[装扮小姐姐梦幻冬季_下雪了]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/08a64a396b710f8670096c5f380f2839f973d218.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42161,
                            "name":"[装扮小姐姐梦幻冬季_圣诞老人]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/e86122e145000e00362d635c6ebe8ac4260de7f6.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42162,
                            "name":"[装扮小姐姐梦幻冬季_多喝热水]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/59fb78d3801682c94b126abc0fc1f1b7603dee06.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42163,
                            "name":"[装扮小姐姐梦幻冬季_扔]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/d762bb454bb2f4fc3827167749b3d61597657b3b.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42164,
                            "name":"[装扮小姐姐梦幻冬季_生气]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/47fc00a0f13ebd61237c4617a1e5485d0647e7f5.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42165,
                            "name":"[装扮小姐姐梦幻冬季_贴贴]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/3a7580978ee11f033860af2435bcef6fa282ee64.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42166,
                            "name":"[装扮小姐姐梦幻冬季_没米了]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/55b3660d73951fb394c6f0594c9fdbeca4f39bea.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42167,
                            "name":"[装扮小姐姐梦幻冬季_冲鸭]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/cb7c2fbc6ab19d3462d44cabf10b87458650bf28.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42168,
                            "name":"[装扮小姐姐梦幻冬季_累了]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/884f721618392a0efe6686c2c61fddf04c6f2d73.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42169,
                            "name":"[装扮小姐姐梦幻冬季_斯密马赛]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/1bbe9b564ee17701a22e848287a5f7983fdfcb34.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42170,
                            "name":"[装扮小姐姐梦幻冬季_告辞]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/264c9ab6a2503013e79eecdb86118f057762bae5.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42171,
                            "name":"[装扮小姐姐梦幻冬季_吃我一拳]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/2f7b233826fa0d0729619bbf3dc2220b4c534b3f.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42172,
                            "name":"[装扮小姐姐梦幻冬季_乌拉]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/23dca67aed7565a4f3e21d8d9d5337125b34d399.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42173,
                            "name":"[装扮小姐姐梦幻冬季_委屈]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/cec0b3ade7249740cee45f98100275fa7cf7320a.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42174,
                            "name":"[装扮小姐姐梦幻冬季_溜冰]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/3704984c68c867820103795c4b5313fea0c097e9.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42175,
                            "name":"[装扮小姐姐梦幻冬季_好耶]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/621d4683d492901c814c64ca3c7bb880ae818779.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42176,
                            "name":"[装扮小姐姐梦幻冬季_硬撑罢了]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/b4d10356d0ac483b29c875518e0c539809468ba9.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42177,
                            "name":"[装扮小姐姐梦幻冬季_摸鱼]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/da7205f6a8e7213cca2a06e71c819850cae28977.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42178,
                            "name":"[装扮小姐姐梦幻冬季_注意保暖]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/170df6f81c3f42defbc07192d19de02525b14348.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42179,
                            "name":"[装扮小姐姐梦幻冬季_抽我]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/45541e4471e57e59b4aa6b7bcc43e800e3cbde85.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42180,
                            "name":"[装扮小姐姐梦幻冬季_疑问]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/0d07fd66d3888ea55aa98fa8d520a6e759596e2b.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42181,
                            "name":"[装扮小姐姐梦幻冬季_抱抱]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/44481b886560e9e1300781ad8a1a4d1dfbbfd6fe.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42182,
                            "name":"[装扮小姐姐梦幻冬季_烤红薯]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/828555bbfa4dd8cadb9fdfa5868d3101c637945b.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42183,
                            "name":"[装扮小姐姐梦幻冬季_Power!]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/e4744b70edd5a271dcb6f1b1c62fa32dfa92c9fb.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42184,
                            "name":"[装扮小姐姐梦幻冬季_堆雪人]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/9407cb861173253f1a1206e3bda7497aebfd98ec.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42185,
                            "name":"[装扮小姐姐梦幻冬季_好的]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/d73bccf93a20c6eedeb81d975eba99ebc048a88e.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42186,
                            "name":"[装扮小姐姐梦幻冬季_滑雪]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/36af70fea3fc1636de990597c1a929fecba412db.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        },
                        {
                            "item_id":42187,
                            "name":"[装扮小姐姐梦幻冬季_吃火锅]",
                            "state":"active",
                            "tab_id":7,
                            "suit_item_id":0,
                            "properties":{
                                "associate":"false",
                                "gray_rule":"true",
                                "gray_rule_type":"all",
                                "image":"https://i0.hdslb.com/bfs/garb/item/bc234259d7971bd6255f9c464597285582e7ff82.png",
                                "is_symbol":"false",
                                "ref_mid":"0",
                                "sale_type":"pay"
                            },
                            "current_activity":null,
                            "next_activity":null,
                            "current_sources":null,
                            "finish_sources":null,
                            "sale_left_time":-1735712010,
                            "sale_time_end":-1735712010,
                            "sale_surplus":0
                        }
                    ]
                }
            ],
            "loading":[
                {
                    "item_id":42191,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":54,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image_preview_small":"https://i0.hdslb.com/bfs/garb/item/32377c9cb1167e1e251c467f6a56ca2b59f130b0.png",
                        "loading_frame_url":"https://i0.hdslb.com/bfs/garb/item/f2121039298817318e9a10ef25cd802ef7a546f0.png",
                        "loading_url":"https://i0.hdslb.com/bfs/garb/item/e5ba77a4c2d21809e5f2e407e7bf03a7df635a2c.webp",
                        "realname_auth":"false",
                        "ver":"1670384406"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "play_icon":[
                {
                    "item_id":42192,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":56,
                    "suit_item_id":42193,
                    "properties":{
                        "drag_left_png":"https://i0.hdslb.com/bfs/garb/item/933cdf41a554ce65b2bac7cc2af578c065a01ff8.png",
                        "drag_right_png":"https://i0.hdslb.com/bfs/garb/item/1632ab1d853694d61fe170710b447f6bd9c9152b.png",
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "middle_png":"https://i0.hdslb.com/bfs/garb/item/4e1eaa52e65da8e14bce321e7abab9e9a3a28b30.png",
                        "realname_auth":"false",
                        "squared_image":"https://i0.hdslb.com/bfs/garb/item/ca4d76d7e8384b18354709ac7e3a422a900f7e07.png",
                        "static_icon_image":"https://i0.hdslb.com/bfs/garb/item/a98ffc9a8871ded890959c22916f38aba61521fc.png",
                        "ver":"1670384416"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "skin":[
                {
                    "item_id":42190,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":45,
                    "suit_item_id":42193,
                    "properties":{
                        "color":"#ffffff",
                        "color_mode":"dark",
                        "color_second_page":"#5d85c0",
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "head_bg":"https://i0.hdslb.com/bfs/garb/item/6c74dac067a429029befc787572b5b7bc83f50a1.jpg",
                        "head_myself_mp4_play":"once",
                        "head_myself_squared_bg":"https://i0.hdslb.com/bfs/garb/item/8cff6c83023c9523669e89fc28e1cd7600f196ff.jpg",
                        "head_tab_bg":"https://i0.hdslb.com/bfs/garb/item/1fe3d1b486ab50d6ffdf30b29bc063818ecde544.jpg",
                        "image_cover":"https://i0.hdslb.com/bfs/garb/item/14072c2cb4f82c053d85dc92911da37583a17668.jpg",
                        "image_preview":"https://i0.hdslb.com/bfs/garb/item/14072c2cb4f82c053d85dc92911da37583a17668.jpg",
                        "package_md5":"4ed60db32789eb79c3e96dc8d6a23ebb",
                        "package_url":"https://i0.hdslb.com/bfs/garb/zip/b3c95365b791bc58fd56bba7c14b43377d7af82d.zip",
                        "realname_auth":"false",
                        "skin_mode":"normal",
                        "tail_bg":"https://i0.hdslb.com/bfs/garb/item/fda401903a377d79afd576f9ba921c83091e6943.png",
                        "tail_color":"#f6f1fd",
                        "tail_color_selected":"#5af1ff",
                        "tail_icon_ani":"true",
                        "tail_icon_ani_mode":"once",
                        "tail_icon_channel":"https://i0.hdslb.com/bfs/garb/item/504a27e5227f30741e35b5817079974335f13d29.png",
                        "tail_icon_dynamic":"https://i0.hdslb.com/bfs/garb/item/4e0ef0c9540277694087f0aca8aca86b87dc9331.png",
                        "tail_icon_main":"https://i0.hdslb.com/bfs/garb/item/2a1a97c098bf0d2374a141d8da7fad1e0d1cee24.png",
                        "tail_icon_mode":"img",
                        "tail_icon_myself":"https://i0.hdslb.com/bfs/garb/item/20050ddbc0265828e42f068b74b8f5d947f8b7b8.png",
                        "tail_icon_pub_btn_bg":"https://i0.hdslb.com/bfs/garb/item/4e0ef0c9540277694087f0aca8aca86b87dc9331.png",
                        "tail_icon_selected_channel":"https://i0.hdslb.com/bfs/garb/item/d14d87016fa2e995917f40148239bc1fa5961ec5.png",
                        "tail_icon_selected_dynamic":"https://i0.hdslb.com/bfs/garb/item/1b0fb973534600990ad48058eff901643fe7e9fc.png",
                        "tail_icon_selected_main":"https://i0.hdslb.com/bfs/garb/item/ce1272d036f196ea90e08a433d0003246822aabf.png",
                        "tail_icon_selected_myself":"https://i0.hdslb.com/bfs/garb/item/a7bbb67de4f22c105529e57b2a1b27737fb6d9df.png",
                        "tail_icon_selected_pub_btn_bg":"https://i0.hdslb.com/bfs/garb/item/1b0fb973534600990ad48058eff901643fe7e9fc.png",
                        "tail_icon_selected_shop":"https://i0.hdslb.com/bfs/garb/item/e1622e9643b6ec2186e9f88ee6251334a842e3d0.png",
                        "tail_icon_shop":"https://i0.hdslb.com/bfs/garb/item/a2eaa41ae4aba160b8b8a9cdc7bc98fd47f2720d.png",
                        "ver":"1670384396"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "space_bg":[
                {
                    "item_id":42188,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":37,
                    "suit_item_id":42193,
                    "properties":{
                        "fan_no_color":"#3e52eb",
                        "fan_no_image":"https://i0.hdslb.com/bfs/garb/item/d4888365d80401c72fc34bcc1697c36eb2477a97.png",
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image1_landscape":"https://i0.hdslb.com/bfs/garb/item/971519888f96d2e3cd88e55cb2360ac087f1dde7.png",
                        "image1_portrait":"https://i0.hdslb.com/bfs/garb/item/78fb9e4a63a17854c7df1e3b1f5f9f48df723e2c.jpg",
                        "image2_landscape":"https://i0.hdslb.com/bfs/garb/item/90a99f2615ba34596b05cd2a268490cf0072f1e7.png",
                        "image2_portrait":"https://i0.hdslb.com/bfs/garb/item/11d1a96097ebe357c47277f6c0397a0323c316a5.jpg",
                        "image3_landscape":"https://i0.hdslb.com/bfs/garb/item/3d2e029d2f6d8c3a425377af5be47a4c8bf2d102.jpg",
                        "image3_portrait":"https://i0.hdslb.com/bfs/garb/item/3d1495d80211c07ab6773f7aa1d6cb198940907d.jpg",
                        "realname_auth":"false"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ],
            "thumbup":[
                {
                    "item_id":42125,
                    "name":"装扮小姐姐梦幻冬季",
                    "state":"active",
                    "tab_id":36,
                    "suit_item_id":42193,
                    "properties":{
                        "gray_rule":"true",
                        "gray_rule_type":"all",
                        "image_ani":"https://i0.hdslb.com/bfs/garb/item/6a2ae0534879d765087c284c745b3e88340a7371.bin",
                        "image_ani_cut":"https://i0.hdslb.com/bfs/garb/item/6a2ae0534879d765087c284c745b3e88340a7371.bin",
                        "image_preview":"https://i0.hdslb.com/bfs/garb/item/0cbe14efc8d5397bb6edbd4adae5dcf0ce307c15.png",
                        "realname_auth":"false"
                    },
                    "current_activity":null,
                    "next_activity":null,
                    "current_sources":null,
                    "finish_sources":null,
                    "sale_left_time":-1735712010,
                    "sale_time_end":-1735712010,
                    "sale_surplus":0,
                    "items":null
                }
            ]
        },
        "fan_user":{
            "mid":647193094,
            "nickname":"装扮小姐姐",
            "avatar":"https://i1.hdslb.com/bfs/baselabs/523830e526a81001e4c3dcec9f317623a4f1dd2e.png"
        },
        "unlock_items":null,
        "activity_entrance":{
            "id":0,
            "item_id":0,
            "title":"",
            "image_cover":"",
            "jump_link":""
        }
    }
}
```

</details>
