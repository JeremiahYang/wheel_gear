// pages/order.js
var aa = 0;
const app = getApp()
Page({
    data: {
        bg1: "mmm1",
        bg2: "mmm",
        bg3: "mmm",
        bg4: "mmm",
        bg5: "mmm",
        bg6: "mmm",
        bg7: "mmm",
        bg8: "mmm",
        bg9: "mmm",
        xm1: "nnn1",
        xm2: "nnn2",
        xm3: "nnn3",
        xm4: "nnn4",
        xm5: "nnn5",
        xm6: "nnn6",
        xm7: "nnn7",
        xm8: "nnn8",
        xm9: "nnn9",
        xm10: "nnn10",
        xm11: "nnn11",
        xm12: "nnn12",
        cc: "0",
        kk: "0",
        zj: 0,
        jg1: 33,
        hide: false


    },


    jzj: function(s) {
        var n = s.currentTarget.dataset.price;
        if (aa > 0)
            aa -= n;
        if (aa > 0) {
            this.setData({
                zj: aa,
                hide: true,
            })
        }
        if (aa == 0) {
            this.setData({
                zj: aa,
                hide: false
            })
        }

    },

    jz: function(s) {
        var n = s.currentTarget.dataset.price;
        aa += n;
        this.setData({
            zj: aa,
            hide: true,
        })
    },

    but: function(a) {
        var b = a.currentTarget.dataset.index;
        if (b == String(2)) {
            this.setData({
                bg1: "mmm",
                bg2: "mmm1",
                bg3: "mmm",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",
                cc: "557"
            })
        }
        if (b == String(3)) {

            this.setData({
                bg1: "mmm",
                bg2: "mmm",
                bg3: "mmm1",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",
                cc: "1108"
            })
        }
        if (b == String(4)) {

            this.setData({
                bg1: "mmm",
                bg2: "mmm",
                bg3: "mmm",
                bg4: "mmm1",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",
                cc: "1666"
            })
        }
        if (b == String(5)) {

            this.setData({
                bg1: "mmm",
                bg2: "mmm",
                bg3: "mmm",
                bg4: "mmm",
                bg5: "mmm1",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",

            })
        }
        if (b == String(6)) {

            this.setData({
                bg1: "mmm",
                bg2: "mmm",
                bg3: "mmm",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm1",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",
            })
        }
        if (b == String(7)) {

            this.setData({
                bg1: "mmm",
                bg2: "mmm",
                bg3: "mmm",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm1",
                bg8: "mmm",
                bg9: "mmm",
            })
        }
        if (b == String(8)) {

            this.setData({
                bg1: "mmm",
                bg2: "mmm",
                bg3: "mmm",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm1",
                bg9: "mmm",
            })
        }
        if (b == String(9)) {

            this.setData({
                bg1: "mmm",
                bg2: "mmm",
                bg3: "mmm",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm1",
            })
        }
        if (b == String(1)) {

            this.setData({
                bg1: "mmm1",
                bg2: "mmm",
                bg3: "mmm",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",
                cc: "0"
            })
        }

    },

    cc: function(e) {

        var c = parseInt(e.detail.scrollTop);
        if (c >= 0 && c < 556)
            this.setData({
                bg1: "mmm1",
                bg2: "mmm",
                bg3: "mmm",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",
            })
        if (c >= 557 && c < 1107)
            this.setData({
                bg1: "mmm",
                bg2: "mmm1",
                bg3: "mmm",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",
            })
        if (c >= 1108 && c < 1664)
            this.setData({
                bg1: "mmm",
                bg2: "mmm",
                bg3: "mmm1",
                bg4: "mmm",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",
            })
        if (c >= 1665)
            this.setData({
                bg1: "mmm",
                bg2: "mmm",
                bg3: "mmm",
                bg4: "mmm1",
                bg5: "mmm",
                bg6: "mmm",
                bg7: "mmm",
                bg8: "mmm",
                bg9: "mmm",
            })

        //获取滚动条当前位置的值
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度

        let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度

        this.setData({
            form: windowHeight * 750 / windowWidth - 120 + "rpx",
            scoll_heights: windowHeight * 750 / windowWidth + "rpx",
            scroll_height: windowHeight * 750 / windowWidth * 0.7 + "rpx",
            scroll_height_middle: windowHeight * 750 / windowWidth * 0.07 + "rpx",
            scroll_height_top: windowHeight * 750 / windowWidth * 0.23 + "rpx"
        })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {


    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    }


})