# 数据结构与算法之美——二分查找下

page1

主题：十个二分九个错？

通过上周的分享，二分查找貌似不难，也很容易理解，但是作者为什么会在这一节开篇就说这样的话？

page2

真实的二分和现实中要面对的二分

黑白，完美的水果
灰色，歪瓜裂枣

我们所知道的二分是非黑即白的二分，没有重复的元素，没有复杂的条件
现实世界中的二分是各种混乱的二分，需要斟酌和思考边界问题，相同元素问题，正反循环排序等

非黑即白的世界

下面就来看看作者提出的这几个歪瓜裂枣是个啥？

page3

首先要理解问题，理解问题是解决问题之母

查找第一个值等于给定值的元素？
查找最后一个值等于给定值的元素？

人肉判断下面的序列，判断完成后

为什么难，通过上面的示例时刻退出的条件是什么？

page4

首先要理解问题，理解问题是解决问题之母

查找第一个大于等于给定值的元素？
查找最后一个小于等于给定值的元素？

人肉判断下面的序列，判断完成后

为什么难，通过上面的示例时刻退出的条件是什么？

page5

二分查找要注意的地方，细节：
  终止条件
  区间上下界更新方法
  返回值选择

page6

快速定位 IP 归属地？

绘一个轴线图，说明落点问题

查看代码

page7

循环有序数组的查找？LeetCode 33 题