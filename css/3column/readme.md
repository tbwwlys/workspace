# 三列布局

-  PC端布局方案
    如何判断哪种设备？   window   BOM 
    www.taobao.com-> 301/302 200(HTTP 状态码)-> https://main.m.taobao.com/?sprefer=sypc00

- userAgent
    用户代理   包含了浏览器的信息
    www.taobao.com  
        iPhone  301  m.taobao.com  
    window.navigator  BOM  Browser Object Model 
        - 定位功能
        - userAgent  


-  三栏式布局   flex(PC 兼容性), float 
    语义化标签  header + footer + section + aside + article + main SEO
    中间优先加载并渲染