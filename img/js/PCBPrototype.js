$(function () {

  // 右侧点击下单按钮
  $('.js-calculate').click(function () {
    $(this).hide()//隐藏计算按钮
    $('.js-main-price').show()
    $('.js-price-ul').show()
    $('.js-proto').show()
    //下单列表
    $('.pricing-list').show()
    $('.active-price').show()
  })
  //右侧下单物流选择
  $('.js-build-box div').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
  })

//    左侧下单计价
  //所有项
  $('.item-right .list').click(function () {
    if ($(this).hasClass('disabled')) {
      return false
    }
    $(this).addClass('active-list').siblings('.list').removeClass('active-list')
  })
  // $('.inch-open').hide();
  $('.submin').click(function () {
    $('.inch-open').hide()
  })

  $('.inch-box').hover(function () {
    $('.inch-open').show()
  }, function () {
    $('.inch-open').hide()
  })

//    第4项Quantity (single)
  $('.show-nums').hover(function () {
    $('.board-nums').show()
    //固定参数
    $('.js-boardnumber>li').click(function () {
      $('.js-num-value').val($.trim($(this).html()))
      $('.js-other-input').val('')
      $('.board-nums').hide()
    })
  }, function () {
    $('.board-nums').hide()
  })
  //    自定义参数
  $('.js-confirm').click(function () {
    var aValue = $.trim($('.js-other-input').val())
    $('.js-num-value').val(aValue)
    $('.board-nums').hide()
    $('.js-other-input').val('')
  })
  $('.js-cancel').click(function () {
    $('.board-nums').hide()
    $('.js-other-input').val('')
  })

//    第5项隐藏元素
//    5.1
  $('.js-dropdown1').hover(function () {
    $(this).children('.js-dropdown-ul1').show()
    $('.js-dropdown-ul1>li').click(function () {
      $('.js-dropdown-input1').val($.trim($(this).html()))
      $('.js-dropdown-ul1').hide()
    })
  }, function () {
    $(this).children('.js-dropdown-ul1').hide()
  })
  //5.2
  $('.js-dropdown2').hover(function () {
    $(this).children('.js-dropdown-ul2').show()
    $('.js-dropdown-ul2>li').click(function () {
      $('.js-dropdown-input2').val($.trim($(this).html()))
      $('.js-dropdown-ul2').hide()
    })
  }, function () {
    $(this).children('.js-dropdown-ul2').hide()
  })
//    5.3
  $('.js-dropdown3').hover(function () {
    $(this).children('.js-dropdown-ul3').show()
    $('.js-dropdown-ul3>li').click(function () {
      $('.js-dropdown-input3').val($.trim($(this).html()))
      $('.js-dropdown-ul3').hide()
    })
  }, function () {
    $(this).children('.js-dropdown-ul3').hide()
  })

//    第一项
  $('.js-type>.list').click(function () {
    if ($(this).attr('data-value') == 0) {
      $('.js-process').hide()
      $('.js-rails').hide()
    }
    if ($(this).attr('data-value') == 1) {
      $('.js-process').show()
      $('.js-rails').hide()
    }
    if ($(this).attr('data-value') == 2) {
      $('.js-process').show()
      $('.js-rails').show()
    }
  })

//    layers事件
  $('.js-layer-box>.list').click(function () {
    var aData = $(this).attr('data-value')
    if (aData == 1) {
      $('.js-solder-mask').show()
      $('.js-inner').hide()
    } else {
      $('.js-solder-mask').hide()
    }
    if (aData == 2) {
      $('.js-inner').hide()
    } else {
      $('.js-inner').show()
    }
    if (aData == 2 && $('.js-material>.list').eq(1).hasClass('active-list')) {
      $('.js-mcpcb').show()
    } else {
      $('.js-mcpcb').hide()
    }
    if (aData == 4) {
      $('.in-box .getInput-box').css({ display: 'none' })
      $('.in-box .getInput-box').eq(4).prevAll().css({ display: 'block' })
      $('.js-open-mask').show()
    }
    if (aData == 6) {
      $('.in-box .getInput-box').css({ display: 'none' })
      $('.in-box .getInput-box').eq(6).prevAll().css({ display: 'block' })
      $('.js-open-mask').show()
    }
    if (aData == 8) {
      $('.in-box .getInput-box').css({ display: 'block' })
      $('.js-open-mask').show()
    }
  })
//关闭弹窗事件
  $('.js-close-box').click(function () {
    $('.js-open-mask').hide()
  })

//    js-material  材料类型
  $('.js-material>.list').click(function () {
      //不可选退出
      if ($(this).hasClass('disabled')) {
        return
      }
      var aData = $(this).attr('data-value')
      if (aData.indexOf('Aluminum') > -1) {
        $('.js-mcpcb').show() //mc-pcb 显示
        $('.js-fr4Tg').show() //FR4-tg 显示
        $('.js-rogers').hide() //rogers 隐藏
        $('.js-rogers-ness1').hide()
        $('.js-rogers-ness2').hide()
        $('.js-thickness').show()
      } else if (aData.indexOf('Rogers') > -1) {
        $('.js-rogers').show()
        $('.js-fr4Tg').hide()
        $('.js-mcpcb').hide()
        $('.js-rogers-ness1').show()
        $('.js-thickness').hide()
      } else {
        $('.js-mcpcb').hide()
        $('.js-rogers').hide()
        $('.js-fr4Tg').show()
        $('.js-rogers-ness1').hide()
        $('.js-rogers-ness2').hide()
        $('.js-thickness').show()
      }
    }
  )

  $('.js-rogers .list').click(function () {
    var tempData = $(this).html().trim()
    if (tempData.indexOf('4003') > -1) {
      $('.js-rogers-ness1').show()
      $('.js-rogers-ness2').hide()
    } else {
      $('.js-rogers-ness1').hide()
      $('.js-rogers-ness2').show()
    }
  })

//    js-gold
  $('.js-gold>.list').click(function () {
    if ($(this).attr('data-value') == 0) {
      $('.js-bevel').show()
      $('.js-add-surface').show()
      $('.js-auni-nickel').show()
      $('.js-auni-nicke2').hide()

    } else {
      $('.js-bevel').hide()
      $('.js-add-surface').hide()
      $('.js-auni-nickel').hide()
      $('.js-auni-nicke2').hide()
    }
  })

  //js-add-surface
  $('.js-add-surface>.list').click(function () {
    var tempValue = $(this).attr('data-value')
    if (tempValue === 'Immersion gold(ENIG)') {
      $('.js-immersion-gold').show()
    } else {
      $('.js-immersion-gold').hide()
    }
    if (tempValue === 'Hard Gold') {
      $('.js-auni-nickel').show()
    } else {
      $('.js-auni-nickel').hide()
    }
    if (tempValue === 'ENEPIG') {
      $('.js-auni-nickel').hide()
      $('.js-auni-nicke2').show()
    } else {
      $('.js-auni-nicke2').hide()
      $('.js-auni-nickel').show()
    }

  })

//    js-finish
  $('.js-finish>.list').click(function () {
    var aValue = $(this).attr('data-value')
    if (aValue === 'Immersion gold(ENIG)') {
      $('.js-immersion-gold2').show()
    } else {
      $('.js-immersion-gold2').hide()
    }
    if (aValue === 'Immersion gold(ENIG)' || aValue === 'Hard Gold' || aValue === 'Immersion silver(Ag)') {
      $('.js-surface').show()
    } else {
      $('.js-surface').hide()
    }

    if (aValue === 'ENEPIG') {
      $('.js-auni-nicke2').show()
    } else {
      $('.js-auni-nicke2').hide()
    }
  })

  /*Additional Options 模块的js开始*/
  //Peelable Soldermask
  $('.js-below1').hover(function () {
    $('.js-peelable').show()
    $('.js-peelable >li').click(function () {
      $('.js-peelable-value').val($(this).html())
      $(this).parent().hide()
    })
  }, function () {
    $('.js-peelable').hide()
  })
  //UL Marking
  $('.js-below2').hover(function () {
    $('.js-marking').show()
    $('.js-marking >li').click(function () {
      $('.js-marking-value').val($(this).html())
      $(this).parent().hide()
    })
  }, function () {
    $('.js-marking').hide()
  })
  // < !--多项选择列表-- >
  $('.options-item .list').click(function () {
    $(this).toggleClass('active-list')
  })
  //主体内容显示与隐藏
  $('.js-additional').click(function () {
    $('.js-options-content').toggleClass('show-content')
    if ($('.js-options-content').hasClass('show-content')) {
      $('.js-add').html('-')
    } else {
      $('.js-add').html('+')
    }
  })
  /*Additional Options 模块的js结束*/

//stencil模块js开始
//    顶部切换
  $('.js-stencil-top').click(function () {
    $(this).toggleClass('active-top')
    if ($(this).hasClass('active-top')) {
      $('.js-assembly-top').removeClass('active-top')
      $('.js-assembly-content').removeClass('show-assembly')
    }//关闭js-assembly盒子
    $('.js-stencil-content').toggleClass('show-stencil')
  })
  //第一项
  $('.js-framework .list').click(function () {
    var frameIndex = $(this).index()
    $('.js-size-input').val('')
    $('.item-right .js-valid-size').eq(frameIndex).show().siblings('.js-valid-size').hide()
  })
//    第二项   鼠标进入显示下拉菜单
  $('.js-valid-size').hover(function () {
    $('.js-size-list').show()
    $('.js-size-list>li').click(function () {
      $('.js-size-input').val($.trim($(this).html()))
      $(this).parent().hide()
    })
  }, function () {
    $('.js-size-list').hide()
  })

//    第三项
  $('.js-side >.list').click(function () {
    return $(this).index() == 3 ? $('.js-pieces').val(2) : $('.js-pieces').val(1)
  })
//stencil模块js结束

  //assembly模块js开始
  $('.js-assembly-top').click(function () {
    $(this).toggleClass('active-top')
    if ($(this).hasClass('active-top')) {
      $('.js-stencil-top').removeClass('active-top')
      $('.js-stencil-content').removeClass('show-stencil')
    }//关闭js-stencil的盒子
    $('.js-assembly-content').toggleClass('show-assembly')
  })
  //材料切换
  $('.js-purchasing .purchasing').click(function () {
    $(this).addClass('active').siblings('.purchasing').removeClass('active')
  })
  //assembly模块js结束

})//end function
