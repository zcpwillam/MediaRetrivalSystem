<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8" %>
<%@ taglib prefix="s" uri="/struts-tags"  %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  
    
    <title>注册</title>
    
	<jsp:include page="WEB-INF/common/csslink.html" flush="true" />
	<jsp:include page="WEB-INF/common/scripts.html" flush="true" />


  </head>
  
  <body>
		<div class="navbar">
		<div class="navbar-inner">
			<div class="container-fluid">
				<a class="btn btn-navbar" data-toggle="collapse" data-target=".top-nav.nav-collapse,.sidebar-nav.nav-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</a>
				<a class="brand" href="personalwork.action">  <span>多媒体信息检索系统</span></a>
				
				
			</div>
		</div>
	</div>

<div class="row-fluid">

		<div class="box span5 center">
		<div class="box-content" style="border-color:#fff; border-style:solid;">
				<div sytle="margin: 0 100px; width:800px; border-color:#077; border-style:solid">
				<div>
					<h3 sytle="text-align:center;">用户注册</h3>
				</div>
				<form class="form-horizontal" id="registeInfo" action="register.action" method="post">
					<fieldset>
					  <div class="control-group">
						<label class="control-label center" for="focusedInput">用户名</label>
						<div class="controls">
						  <input class="input-xlarge focused" id="userinfo.username" style="float:left;" name="userinfo.username" value="" type="text">

						  <span class="state1" id="namelabel" style="float:left;">请填入用户名（必填）</span>

						</div>
					  </div>
					  <div class="control-group">
						<label class="control-label" for="focusedInput">密码</label>
						<div class="controls">
						  <input class="input-xlarge focused" id="userinfo.password" style="float:left;" name="userinfo.password" value="" type="password">
						  <span class="state1" id="oripasswordlabel" style="float:left;">请填写密码（必填）</span>
						</div>
					  </div>
					  <div class="control-group">
						<label class="control-label" for="focusedInput">真实姓名</label>
						<div class="controls">
						  <input class="input-xlarge focused" id="userinfo.name" style="float:left;" name="userinfo.name" value="" type="text">
						  <span class="state1" style="float:left;">请填写真实姓名（必填）</span>
						</div>
					  </div>
					  
					  <div class="form-actions">

						<!-- <button type="button" class="btn btn-primary">确定</button> 
						<input tyep="button" class="btn btn-primary" value="确定" onclick="submitR()"/>-->

						<button type="submit" class="btn btn-primary">确定</button>						
						<button class="btn">重置</button>
					  </div>
					</fieldset>
				  </form>
				  </div>
			</div>
			</div>


	
	

</div><div style="display: none;" id="cboxOverlay"></div><div style="display: none; padding-bottom: 57px; padding-right: 28px;" class="" id="colorbox"><div id="cboxWrapper"><div><div style="float: left;" id="cboxTopLeft"></div><div style="float: left;" id="cboxTopCenter"></div><div style="float: left;" id="cboxTopRight"></div></div><div style="clear: left;"><div style="float: left;" id="cboxMiddleLeft"></div><div style="float: left;" id="cboxContent"><div style="width: 0px; height: 0px; overflow: hidden; float: left;" id="cboxLoadedContent"></div><div style="float: left;" id="cboxLoadingOverlay"></div><div style="float: left;" id="cboxLoadingGraphic"></div><div style="float: left;" id="cboxTitle"></div><div style="float: left;" id="cboxCurrent"></div><div style="float: left;" id="cboxNext"></div><div style="float: left;" id="cboxPrevious"></div><div style="float: left;" id="cboxSlideshow"></div><div style="float: left;" id="cboxClose"></div></div><div style="float: left;" id="cboxMiddleRight"></div></div><div style="clear: left;"><div style="float: left;" id="cboxBottomLeft"></div><div style="float: left;" id="cboxBottomCenter"></div><div style="float: left;" id="cboxBottomRight"></div></div></div><div style="position: absolute; width: 9999px; visibility: hidden; display: none;"></div></div><div style="display: none; position: absolute; z-index: 500;" id="jqContextMenu"></div><div style="background-color: rgb(0, 0, 0); position: absolute; opacity: 0.2; z-index: 499; display: none;"></div></body>
</html>
