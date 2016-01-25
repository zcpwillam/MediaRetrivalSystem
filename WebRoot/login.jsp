
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="s" uri="/struts-tags"  %>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>多媒体录入系统</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Charisma, a fully featured, responsive, HTML5, Bootstrap admin template.">
	<meta name="author" content="Muhammad Usman">
	
	<jsp:include page="WEB-INF/common/csslink.html" flush="true" />
	<jsp:include page="WEB-INF/common/scripts.html" flush="true" />
	<script>
	function clickRegister(){
        window.location.href="/RuleEditor/registerb.action";

    }
	</script>
</head>

<body>
		<div class="container-fluid">
		<div class="row-fluid">
		
			<div class="row-fluid">
				<div class="span12 center login-header">
					<h2>多媒体录入系统</h2>
				</div><!--/span-->
			</div><!--/row-->
				
			<div class="row-fluid">
				<div class="well span5 center login-box">
					<div class="alert alert-info">
						请输入用户名和密码
					</div>
					<form class="form-horizontal" action="login.action" method="post">
						<fieldset>
							<div class="input-prepend" title="用户名" data-rel="tooltip">
								<span class="add-on"><i class="icon-user"></i></span>
								<input autofocus class="input-large span10" name="logininfo.username" id="username" type="text"  />
							</div>
							<div class="clearfix"></div>

							<div class="input-prepend" title="密码" data-rel="tooltip">
								<span class="add-on"><i class="icon-lock"></i></span>
								<input class="input-large span10" name="logininfo.password" id="password" type="password"  />
							</div>
							<div class="clearfix"></div>

							<div class="input-prepend">
							<label class="remember" for="remember"><input type="checkbox" id="remember" />记住我</label>
							</div>
							<div class="clearfix"></div>

							<p class="center span5">
							<button type="submit" class="btn btn-primary" >登录</button>
							<input type="button" class="btn btn-primary" id="Register" value="注册" onclick="clickRegister()"/> 
							
							</p>
						</fieldset>
					</form>
				</div><!--/span-->
			</div><!--/row-->
				</div><!--/fluid-row-->
					<!-- description on -->
		<div class="row-fluid">
		<div class="box span5 center">
					<div class="box-header well" data-original-title="">
						<h2>说明</h2>
							<div class="box-icon">
							<a href="#" class="btn btn-minimize btn-round"><i class="icon-chevron-up"></i></a>							
						</div>
					</div>
				</div>
				</div>
		
	</div><!--/.fluid-container-->

		
</body>
</html>
