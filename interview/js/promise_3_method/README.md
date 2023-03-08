- 任务流Promise 序列
    [upload(),upload(),upload(),upload()]
    - 随机定时器值， 任务完成时间和索引没有关系
    - 一半成功一半失败
    - setTimeout 第三个参数会在定时器到达时触发
    - Promise.all 
        全部执行通过才认为是成功，否则认为是失败；
        有失败的并不会停下来
        - 并发
    - Promise.rase
        - 第一个完成的 result
        - 并且所有的都会运行
