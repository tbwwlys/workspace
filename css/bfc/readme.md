# css 必考题BFC
block formating context
    Block 占据一行
Flex Formating Context
    我们看到的页面 
    - 文档流
        正常文档流
        脱离文档流
            none
            position 不为static 
            float
            父元素 拿不到 子元素的高度
            弹性布局 子元素在一行显示， float 在一行显示
- 在正常文档流中
    float 会让元素， 离开文档流
    父元素， 不能知晓子元素的大小
    更严重的问题是？文档流出问题，下面的盒子会盖到float元素
    一定要让父元素拿到高度
    在正常文档流中可以开启新的BFC  css 魔法就上演了
    HTML是最大的BFC由浏览器自动创建给予
    - 在BFC环境中，父元素会将浮动元素参与计算，
    - 创建BFC的方法
        - overflow : hidden;
        - display: inline-block
        - position : absolute fixed
    - 在同一个BFC里 ，垂直方向的距离，由 margin决定
        相邻的  