var const_callback_list="login_success";(function(){var b="https://passport.baidu.com";var c="http://app.baidu.com";if(!window[const_callback_list]){window[const_callback_list]=[]}window.baiduLogin=window.baiduLogin||(function(){var g;var e=function(h){g=h};var f={tangram:(!baidu||!baidu.version||(baidu.version.indexOf("2.")!==0)),cache:true,apiOpt:{product:"app",staticPage:"http://app.baidu.com/static/06241840/appweb/scripts/popup_login/v3Jump.html",memberPass:true,u:"http://www.baidu.com"},forgetLink:"http://baidu.com/?1",registerLink:"http://baidu.com/?2",authsite:["tsina","renren","tqq"],onSubmitStart:function(h){},onLoginSuccess:function(o){o.returnValue=false;var n=o.rsp.data;var k={};k.username=decodeURIComponent(decodeURIComponent(n.userName));k.mail=decodeURIComponent(decodeURIComponent(n.mail));k.phonenumber=decodeURIComponent(decodeURIComponent(n.userName));var j=baidu.g("passInfo");window[const_callback_list].push(function(i){var q=i.username||i.mail||i.phonenumber;try{window.isLogin=true;window.bdUser=i.username;window.bdEmail=i.mail;window.bdPhonenumber=i.bdPhonenumber}catch(p){}if(j){j.innerHTML='<li><a href="https://passport.baidu.com/center" target="_blank"><b>'+q+'</b></a></li><li>|</li><li><a href="http://www.baidu.com" target="_blank">百度首页</a></li><li>|</li><li><a href="https://passport.baidu.com/?logout&tpl=app">退出</a></li>'}});if(g){g.call(window,k);g=null}for(var l=0,h=window[const_callback_list].length;l<h;l++){var m=window[const_callback_list][l];try{m.call(window,k)}catch(o){}}baiduLogin.instance.hide()}};var d=passport.pop.init(f);return{setCallback:e,instance:d}})();var a=baidu.g("lb");if(a){baidu.on(a,"click",function(d){loginCallback=null;baiduLogin.instance.show();baidu.event.preventDefault(d)})}window._invoke_login=function(d){baiduLogin.setCallback(d);baiduLogin.instance.show()};window.bdUsername=(function(){var d;var e=function(g){d=g};var f=function(h,g){g.username=decodeURIComponent(decodeURIComponent(g.username));g.mail=decodeURIComponent(decodeURIComponent(g.mail));g.phonenumber=decodeURIComponent(decodeURIComponent(g.phonenumber));if(d){d.call(window,h,g);d=null}try{isLogin=true;bdUser=g.username}catch(i){}if(bdUsername.renderStatus!="success"){bdUsername.renderStatus="success";bdUsername.box.update({height:200,contentText:'<div class="bdusername-tip-content"><span class="success"></span>您已成功填写用户名，请继续操作。<input type="button" id="pass_fillinusername_button" class="pass_fillinusername_button" value="确定" /></div>'});baidu.on("pass_fillinusername_button","click",function(j){bdUsername.box.close()});baidu.on("pass_fillinusername_button","mouseover",function(j){baidu.dom.addClass("pass_fillinusername_button","pass_fillinusername_button_hover")});baidu.on("pass_fillinusername_button","mouseout",function(j){baidu.dom.removeClass("pass_fillinusername_button","pass_fillinusername_button_hover")})}bdUsername.box.open()};return{setCallback:e,success:f}})();bdUsername.box=new baidu.ui.Dialog({classPrefix:"bdUsername",height:200,width:465,zIndex:10000,modal:true,autoRender:true,resizable:false,autoOpen:false,draggable:false,coverable:true,autoDispose:false});bdUsername.renderStatus="";window._invoke_username=function(d){if(bdUsername.renderStatus!="username"){bdUsername.renderStatus="username";bdUsername.box.update({height:200,contentText:'<iframe id="popUsernameIframe" name="popUsernameIframe" width="100%" height="100%" src="http://app.baidu.com/static/appweb/scripts/popup_login/fillinusername.html" scrolling="no" frameborder="0"></iframe>'})}bdUsername.setCallback(d);bdUsername.box.open()}})();