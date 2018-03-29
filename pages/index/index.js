//index.js
//获取应用实例

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      "../../images/1.jpg",
      "../../images/2.jpg",
      "../../images/3.jpg",
      "../../images/4.jpg"
    ],
    navs: []
  },
  
  onLoad:function(options){
    var page = this;
    var navs = this.loadNavData();
    page.setData({navs: navs});
  },

  navBtn: function(e) {
    console.log(e);
    var id = e.currentTarget.id;
   
    switch (id) {
        case "0":
            wx.navigateTo({
                url: '../index/map/map'
            })
            break
        case "1":
            wx.navigateTo({
                url: '../index/liebiao/liebiao'
            })
            break
        case "2":
            wx.navigateTo({
                url: '../part/cet/cet',
            })
            break
    }
    
  },

  loadNavData: function() {
    var navs = [];
    var nav0 = new Object();
    nav0.img = "../../images/map.png";
    nav0.name = '校园地图';
    navs[0] = nav0;

    var nav1 = new Object();
    nav1.img = '../../images/money.png';
    nav1.name = '校园卡充值';
    navs[1] = nav1;

    var nav2 = new Object();
    nav2.img = '../../images/report.png';
    nav2.name = '四六级成绩';
    navs[2] = nav2;

    var nav3 = new Object();
    nav3.img = '../../images/libarary.png';
    nav3.name = '图书馆';
    navs[3] = nav3;

    var nav4 = new Object();
    nav4.img = '../../images/exam.png';
    nav4.name = '考试成绩';
    navs[4] = nav4;

    return navs;
  }
})