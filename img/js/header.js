$(function () {
  function Gogo (email, pwd) {    ////套用请忽略
    this.email = email
    this.pwd = pwd
  }

  ////套用请忽略
  Gogo.prototype = {   ////////套用请忽略

    //是否登录
    isLogin: function () {
      var getEmail = window.localStorage.getItem('email')
      var getPwd = window.localStorage.getItem('pwd')
      return getEmail === '000@163.com' && getPwd === '000000'
    },
    //公用头部
    totalHeader: function () {
      var totalHeader = `  <!--顶部-->
   <!--顶部-->
  <div class="nav-info">
    <ul class="nav-items">
      <li>
        <a href="javascript:void(0)">
          <span class="iconfont icon-qushuchakanshuxing2"></span>
          <span class="gerber">Online Gerber Viewer</span>
        </a>
      </li>
      <li>
        <a href="phone-display.html">
          <span class="iconfont icon-shouji1"></span>
          <span class="gerber">Mobile Website</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <span class="iconfont icon-Skype"></span>
        </a>
        <div class="skype-box">
          <div class="skype-link active">
            <a href="skype:live:service_7440?chat">
              Skype PC
            </a>
          </div>
          <div class="skype-link">
            <a href="https://web.skype.com/" target="_blank">
              Skype WEB
            </a>
          </div>
        </div>
      </li>
      <li><a href="mailto:service@pcbgogo.com">
        <span class="iconfont icon-iconfontcolor06"></span>
        <span class="mail-text">service@pcbgogo.com</span>
      </a>
      </li>
      <li class="language"><span><img src="img/images/England.png" alt="country-flag"></span>&nbsp;&nbsp;English
        <!--语言选择弹出层-->
        <ul class="language-box">
          <li onclick="window.open('index.html','_self')"><img src="img/images/England.png" alt="">&nbsp;&nbsp;English
          </li>
          <li onclick="window.open('https://www.pcbgogo.jp/','_blank')"><img src="img/images/Japan.png" alt="">&nbsp;&nbsp;Japanese
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="top-box">
    <!--左侧logo-->
    <h1 class="logo">
      <a href="index.html">
        PCBgogo
      </a>
    </h1>
    <!--nav-tips-->
    <img src="img/images/logo-tips.jpg" alt="logo tips" width="340" height="34" class="nav-tips">
    <!--日文-->
    <!--<img src="img/images/logo-tips_jp.jpg" alt="logo tips" width="336" height="34" class="nav-tips-jp">-->
    <!--nav-tips-->
    <!--右侧登录-->
    <div class="sign-box">
      <div class="sign-lists">
        <div class="sign-in"><a href="javascript:void(0)">Sign in</a></div>
        <div class="join"><a href="register-login.html">Join Free</a></div>
        <div class="joined">
          <i><img src="img/images/user.png" alt=""></i>
        </div>
        <div class="hi-in">
          <a href="javascript:void(0)">Hi! zhang测大街上公开了坚朗</a>
        </div>
        <!--信息列表-->
        <div class="person-info">
          <!--  未登录-->
          <div class="info">
            <div class="left-info">
              <div class="tips">
                New Customer?
              </div>
              <a class="join-free" href="register-login.html">
                Join Free
              </a>
            </div>
            <div class="right-info">
              <a class="login-in" href="javascript:void(0)">
                Sign in
              </a>
            </div>
          </div>
          <!--   已登录 -->
          <div class="info" style="display: none">
            <div class="left-info">
              <div class="tips">
                Email: <span>20**@163.com</span>
              </div>
              <a class="out-btn" href="javascript:void(0)">
                Sign Out
              </a>
            </div>
          </div>

          <div class="link-lists">
            <!-- 有数量添加   active 类名-->
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Account</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Orders list</span>
              </a>
            </div>
            <div class="item active">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Account Balance</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Discount coupon</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Reward points</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Delivery Address</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Forum</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--  购物车-->
      <div class="shopping-car">
        <!-- 有数量添加 active 或者你元素控制显示与隐藏-->
        <a href="javascript:void(0)" class="active">
          <span class="iconfont icon-gouwuche1"></span>
          <div class="of-cars">28</div>
        </a>
      </div>
      <!-- 广告-->
      <div class="ads-tips" style="display: none">
        New here ? Getting <span>$50</span> coupon
      </div>
    </div>
  </div>
  <!--导航-->
  <div class="nav">
    <div class="nav-box">
      <!--左侧列表-->
      <ul class="nav-lists js-nav-lists">
        <li><a href="index.html">Home</a></li>
        <li class="active">
          <a href="PCBPrototype.html">Instant Quote</a>
          <!-- 二级菜单-->
          <div class="child-parent">
            <div class="child-menu">
              <div class="item">
                <a class="title" href="PCBPrototype.html">
                  <span>PCB Prototype</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="PCBAssembly.html">
                  <span> PCB Assembly</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="../FPCInstantQuote.html">
                  <span> Flexible PCB / Rigid-Flex PCB</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="SMDStencil.html">
                  <span> SMD Stencil</span>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="smt-landing.html">PCB Assembly</a>
          <!-- 二级菜单-->
          <div class="child-parent">
            <div class="child-menu">
              <div class="item">
                <a class="title" href="assembly-list.html">
                  <span> test1 </span>
                </a>
                <!-- 三级菜单-->
                <div class="son-box">
                  <div class="child-link">
                    <div class="list">
                      <a href="assembly-list.html">
                        <span class="name">test1-1 </span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="assembly-list.html">
                        <span class="name">test1-2</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="assembly-list.html">
                        <span class="name">test1-3</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li><a href="advanced-pcb.html">Advanced PCB</a></li>
     
        <li>
          <a href="capabilities.html">Capabilities</a>
          <!-- 二级菜单-->
          <div class="child-parent">
            <div class="child-menu">
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span> Printed Circuit Boards </span>
                </a>
                <!-- 三级菜单-->
                <div class="son-box">
                  <div class="child-link">
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Printed Circuit Board Assembly Overview</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Aluminum PCB</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Rigid-Flex PCBs</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Metal core PCBs</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Printed Circuit Board Prototype</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Aluminum PCB</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Rigid-Flex PCBs</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Metal core PCBs</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span> SMT Stencil</span>
                </a>
                <!-- 三级菜单-->
                <div class="son-box">
                  <div class="child-link">
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Printed Circuit Board Assembly Overview</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="javascript:void(0)">

                        <span class="name">Rigid-Flex PCBs</span>
                      </a>
                    </div>
                    <div class="list">
                      <a href="javascript:void(0)">

                        <span class="name">Metal core PCBs</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span> SMD Stencil</span>
                </a>
                <!-- 三级菜单-->
                <div class="son-box">
                  <div class="child-link">
                    <div class="list">
                      <a href="javascript:void(0)">

                        <span class="name">Aluminum PCB3</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span> PCB Design-Aid &amp; Layout</span>
                </a>
                <!-- 三级菜单-->
                <div class="son-box">
                  <div class="child-link">
                    <div class="list">
                      <a href="javascript:void(0)">
                        <span class="name">Aluminum PCB5</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span>  生产周期</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span> 质量</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span> Other</span>
                </a>
              </div>
            </div>
          </div>
        </li>
         <li><a href="knowledge/knowledge-page.html">Knowledge Center</a></li>
        <li>
          <a href="javascript:void(0)">Feedback</a>
          <div class="child-parent">
            <div class="child-menu">
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span>Forum</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span>Feedback </span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="javascript:void(0)">
                  <span>Current Events</span>
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="contactUs.html">Contact Us</a>
          <div class="child-parent">
            <div class="child-menu">
              <div class="item">
                <a class="title" href="whyUs.html">
                  <span>  Why us  </span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="methodPayment.html">
                  <span>  Method of payment</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="Introduction.html">
                  <span> Introduction</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="privacyPolicy.html">
                  <span> Privacy policy</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="orderGuide.html">
                  <span> Order guide</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="shippingMethod.html">
                  <span>  Shipping method guide</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="qualityGurrantee.html">
                  <span> Quality gurrantee</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="gogoDelivery.html">
                  <span> PCBgogo delivery</span>
                </a>
              </div>
              <div class="item">
                <a class="title" href="contactUs.html">
                  <span>  Contact Us </span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>`
      return totalHeader
    },
    //url地址加密函数
    compileStr: function (code) {
      var c = String.fromCharCode(code.charCodeAt(0) + code.length)
      for (var i = 1; i < code.length; i++) {
        c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
      }
      return escape(c)
    },
    //公用底部
    totalFooter: function () {
      var totalFooter = ` <!--  赞助商-->
  <div class="sponsors">
    <div class="sponsors-box">
      <div class="item">
        <div class="name">Verified by</div>
        <img src="img/images/verified.png" alt="">
      </div>
      <div class="item">
        <div class="name">Delivery Services</div>
        <img src="img/images/delivery.png" alt="">
      </div>
      <div class="item"
           onclick="window.open('https://www.pcbgogo.com/Blog/PCBGOGO_Certificates_of_ISO9001_2015_QMS__UL__REACH__RoHS.html', '_blank')">
        <div class="name">Payment Methods</div>
        <img src="img/images/payments.png" alt="">
      </div>
    </div>
  </div>
  <!--二级列表-->
  <div class="links-type ">
    <div class="container_warp">
      <!--左侧表单-->
      <div class="send-from">
        <p>QUICK CONTACT</p>
        <form action="#" class="message-from">
          <input type="text" placeholder="Name" value="Name" onfocus="if(this.value==='Name')this.value=''"
                 onblur="if(this.value==='')this.value='Name'">
          <input type="text" placeholder="Email" value="Email"
                 onfocus="if(this.value==='Email')this.value=''"
                 onblur="if(this.value==='')this.value='Email'">
          <textarea type="text" class="message-input" placeholder="Message"
                    onfocus="if(this.value==='Message')this.value=''"
                    onblur="if(this.value==='')this.value='Message'"></textarea>
          <input type="button" class="btn-submit " value="Send Message">
        </form>
      </div>
      <!--右侧导航-->
      <div class="list-box">
       <ul class="links-title">
                    <li>
                        <p>CAPABILITIES</p>
                        <ul class="links-lists">
                            <li>
                                <h3><a href="/about-us.html">About Us</a></h3>
                            </li>
                            <li>
                                    <h3><a href="/Capabilities/Standard_PCB_Capabilities.html"> PCB Capabilities</a></h3>
                            </li>
                            <li>
                                    <h3><a href="/Capabilities/PCBA_Capabilties.html"> PCBA Capabilities</a></h3>
                            </li>
                            <li>
                                    <h3><a href="/Capabilities/PCB_Design_and_Layout.html"> PCB Layout Capabilities</a></h3>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <p>PCBGOGO SERVICE
</p>
                        <ul class="links-lists">
                            <li>
                                <h3><a href="/pcb-fabrication-quote.html">PCB Prototype </a></h3>
                            </li>
                            <li>
                                <h3><a href="/pcb-assembly.html">PCB Assembly</a></h3>
                            </li>
                            <li>
                                <h3><a href="/pcblayout.html"> PCB Layout </a></h3>
                            </li>
                            <li>
                                <h3><a href="/pcb-fabrication-quote.html">PCB Instant Quote</a></h3>
                            </li>
                            <!--<li>-->
                            <!--<a href="/网站地图">Site Map</a>-->
                            <!--</li>-->
                        </ul>
                    </li>
                    <li>
                        <p>CUSTOMER SUPPORT</p>
                        <ul class="links-lists">
                            <li>
                                <h3><a href="/forum.html">Blog</a></h3>
                            </li>
                            <li>
                                <h3><a href="/Feedback/">Feedback </a></h3>
                            </li>
                            <li>
                                <h3><a href="/Capabilities/Files_Requested_for_PCBA.html">Files Requested for PCBA </a></h3>
                            </li>
                            <li>
                                <h3><a href="/why.html">Why Us </a></h3>
                            </li>
                            <li>
                                <h3><a href="/privacy_policy.html">Privacy Policy </a></h3>
                            </li>
                            
                        </ul>
                    </li>
                    <li>
                        <p>ORDER HELP</p>
                        <ul class="links-lists">
                            <li>
                                <h3><a href="/orderguide.html">Order Guide </a></h3>
                            </li>
                            <li>
                                <h3><a href="/contact.html">Contact Us </a></h3>
                            </li>
                            <li>
                                <h3><a href="/member/login">Create an Account </a></h3>
                            </li>
                            <li>
                                <h3><a href="/quality_gurrantee.html">Quality Gurrantee </a></h3>
                            </li>
                            <li>
                                <h3><a href="/delivery.html">PCBGOGO Delivery</a></h3>
                            </li>
                        </ul>
                    </li>
                </ul>
        <div class="copyright-box">
          <div class="copyright-text">
            <div class="ban-quan">
              Copyright © 2020 PCBGOGO. All rights reserved. Shenzhen JDB Technology Co.,Ltd. Address: No. 15, Zhongxing Road, Kengzi Street, Pingshan District, Shenzhen, 518000, China.
            </div>
            <div class="link-way">
              <span>Whatsapp +8618665922549</span>

              <span> Mail service@pcbgogo.com</span>

              <span> Tel +86-755-33066136</span>
            </div>
          </div>

          <div class="share-box">
            <a target="_blank" href="https://twitter.com/PCBGOGOofficial"><img
              src="img/images/twitter.png" alt=""></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCNKfbfg7u7m8if4aRbfezyg"><img
              src="img/images/google.png" alt=""></a>
            <a target="_blank" href="https://www.facebook.com/Pcbgogo-1623727847885541/timeline/"><img
              src="img/images/facebook.png" alt=""></a>
            <a target="_blank"
               href="https://www.linkedin.com/company/13738760?trk=tyah&amp;trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A10159025%2Cidx%3A1-1-1%2CtarId%3A1442555194895%2Ctas%3Apcbgogo"><img
              src="img/images/instagram.png" alt=""></a>
            <a target="_blank" href="https://www.instagram.com/pcbgogo_official/?hl=en"><img
              src="img/images/Linkedln.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>`
      return totalFooter
    }
  }
  var gogo = new Gogo()
  $('.header').html('').html(gogo.totalHeader()) //动态更换头部
  $('.footer').html('').html(gogo.totalFooter()) //动态更换底部

  //登录检查  ////套用请忽略
  if (gogo.isLogin()) {
    $('.hi-in').show()
    $('.joined').show()
    $('.ads-tips').hide()
    $('.info').eq(0).hide()
    $('.info').eq(1).show()
  } else {
    $('.join').show()
    $('.sign-in').show()
    $('.ads-tips').show()
    $('.info').eq(1).hide()
    $('.info').eq(0).show()

  }

  //登录按钮  ////套用请忽略
  $('.login-in').click(function () {
    if (gogo.isLogin()) {
      $('.join').hide()
      $('.sign-in').hide()
      $('.hi-in').show()
      $('.joined').show()
    } else {
      var urlStr = window.location.pathname//获取之前的地址
      var splitIndex = urlStr.lastIndexOf('/')//截取位置
      var oldStr = urlStr.substr(splitIndex + 1)
      window.location.href = 'login.html?=' + gogo.compileStr(oldStr)//加密后的
    }
  })
  try {
    //二级导航吸顶
    if ($('.js-order-nav')) {
      var bannerTop = $('.banner-ul .name').offset().top
      var rightPriceTop = $('.js-content-r').offset().top
      $(window).scroll(function () {
        var navTop = $(document).scrollTop()
        if (navTop >= bannerTop) {
          $('.js-order-nav').addClass('active-nav')
        } else {
          $('.js-order-nav').removeClass('active-nav')
        }
        //点击取消广告推送
        $('.js-calculate').click(function () {
          $('.js-promote-box').hide()
        })
        // nowMove(rightPriceTop)  //跟随
      })
    }
  } catch (e) {

  }

  //nowMove函数
  // function nowMove (rightPriceTop) {
  //   var navTop = $(document).scrollTop()
  //   // var floatElement = $('.js-floating-element').height() //移动元素;
  //   // var getDibu = $('.footer').offset().top  //固定元素距离文档顶部距离;
  //   if (navTop >= rightPriceTop) {
  //     $('.js-floating-element').css({ position: 'fixed', top: 44 })
  //     // if ((getDibu - (navTop + floatElement) <= 50)) {
  //     //   $('.js-floating-element')[0].style.cssText = ''
  //     //   $('.js-floating-element').css({ position: 'absolute', bottom: 0 })
  //     // } else {
  //     //   $('.js-floating-element')[0].style.cssText = ''
  //     //   $('.js-floating-element').css({ position: 'fixed', top: 44 })
  //     // }
  //   } else {
  //     $('.js-floating-element').css({ position: 'relative', top: 0 })
  //   }
  //   //end if
  // }//end nowMove(函数);

  //退出登录  ////套用请忽略
  $('.out-btn').click(function () {
    window.localStorage.setItem('pwd', '')
    $(this).parent().hide()
    window.location.reload()
  })

  //实时消息信息列表
  $('.js-messages').mouseleave(function () {
    $('.js-message-list').stop().slideUp(600)
  })
  $('.js-messages').click(function () {
    $('.js-message-list').stop().slideDown(600)
  })
  $('.js-message-list').mouseleave(function () {
    $(this).stop().slideUp(600)
  })

  ////下单计价统一标题  套用忽略
  void function () {
    try {
      let href = ['Prototype', 'Assembly', 'FPCIns', 'SMD']
      const hrefName = window.location.pathname
      let hrefIndex = 0
      href.forEach((item, key) => {
        if (hrefName.indexOf(item) > -1) {
          hrefIndex = key
        }
        if (hrefName.indexOf('rigidflex') > -1) {
          hrefIndex = 2
        }
      })
      var orderNav = `
  <div class="container_warp">
    <!--  对应日文套用删除
  1.オンライン見積 2.データ入稿 3. データチェック
 4. お支払い 5. 生産 6. 運送  7. 受取＆検収
 -->
    <div class="guide-box">
      <div class="item">
        Online Quote
      </div>
      <div class="item">
        Upload Gerber File
      </div>
      <div class="item">
        Order review
      </div>
      <div class="item">
        Payment
      </div>
      <div class="item">
        Fabrication
      </div>
      <div class="item">
        Shipment
      </div>
      <div class="item">
        Confirm and Review
      </div>
    </div>
    <!--banner列表-->
    <div class="order-nav js-order-nav">
      <ul class="banner-ul">
        <li class="active">
          <a href="PCBPrototype.html" target="_blank">
            <div class="order-img">
              <img src="img/images/guide-img1.png" alt="" width="320" height="60">
            </div>
            <div class="name">PCB Prototype</div>
          </a>
        </li>
        <li>
          <a href="PCBAssembly.html" target="_blank">
            <div class="order-img">
              <img src="img/images/guide-img2.png" alt="" width="320" height="60">
            </div>
            <div class="name">
              PCB Assembly
            </div>

          </a>
        </li>
        <li>
          <a href="FPCInstantQuote.html" target="_blank">
            <div class="order-img">
              <img src="img/images/guide-img3.png" alt="" width="320" height="60">
            </div>
            <div class="name">
              FPC Instant Quote
            </div>
          </a>
        </li>
        <li>
          <a href="SMDStencil.html" target="_blank">
            <div class="order-img">
              <img src="img/images/guide-img4.png" alt="" width="320" height="60">
            </div>
            <div class="name">
              SMD Stencil
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
    `
      if (window.location.href.indexOf('index') < -1) {
        $('.banner-box').empty().append(orderNav)
      }
      $('.js-order-nav li').removeClass('active')
      $('.js-order-nav li').eq(hrefIndex).addClass('active')
    } catch (e) {

    }
  }()

})//end function
