<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Profile.aspx.cs" Inherits="Play" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Commerce App - Profile</title>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="css/styles.css" rel="stylesheet"/>
	<link href="css/fonts.css" rel="stylesheet"/>
</head>
<body>
        <form id="form1" runat="server">
         <div id="container" class="container">
				<asp:ScriptManager ID="ScriptManager1" runat="server" EnablePageMethods="true"></asp:ScriptManager>
				<!-- header -->
				<div id="header" class="col-xs-12">
				    <div class ="textLeft col-xs-4">
					    <h4>Commerce</h4>
					</div>
                    <div class="textCenter col-xs-4">
                        <h4>Your Profile</h4>
                    </div>
					<div class="textRight col-xs-4">
					    <asp:Button ID="logOutButton" onClick="logoutClick" CssClass="aspButton" style="background-color: #e1e1e1; color: #006847;" runat="server" Text="Logout" />
					</div>
				</div>
                <!-- Page Content -->
                <div id="pageContent" class="row">
                    <div id="mobileNavTop" class="col-xs-12">
                        <div id="summary_m" class="navBtn"><h3>Summary</h3></div>
                        <div id="budget_m" class="navBtn"><h3>Budget</h3></div>
                        <div id="goals_m" class="navBtn"><h3>Goals</h3></div>
                        <div id="wallet_m" class="navBtn"><h3>Wallet</h3></div>
                        <div id="profile_m" class="navBtn"><h3>Profile</h3></div>
                    </div>
                    <div id="navigation" class="col-xs-2">
                        <div id="summary" class="navBtn"><h3>Summary</h3></div>
                        <div id="budget" class="navBtn"><h3>Budget</h3></div>
                        <div id="goals" class="navBtn"><h3>Goals</h3></div>
                        <div id="wallet" class="navBtn"><h3>Wallet</h3></div>
                        <div id="profile" class="navBtn"><h3>Profile</h3></div>
                        <div id="help" class="navBtn"><h3>Help</h3></div>
                    </div>
                    <div id="content" class="col-xs-10">
                        <div id="contentHeader" class="col-xs-12">
                            <div class="col-xs-10 textLeft">
                                <h4><b>View your profile and achievements.</b></h4>
                            </div>
                            <div class="col-xs-2 textRight">
                            </div>
                        </div>
                        <div class="col-xs-12 tabWrapper">
                            <div id="profileTab" class="col-xs-2 tab">Profile</div>
                            <div id="achievementsTab" class="col-xs-2 tab">Achievements</div>
                            <div id="settingsTab" class="col-xs-2 tab">Settings</div>
                            <div class="col-xs-2"></div>
                            <div class="col-xs-2"></div>
                        </div>

                        <div id="profileContent" class="col-xs-12">
                            <h3>Profile</h3>
                            
                            <asp:Label ID="currAcct" runat="server" Text=""></asp:Label> <br />
                            <asp:DropDownList ID="acctSelect"  runat="Server"  AppendDataBoundItems="false" > </asp:DropDownList>
                            <asp:Button ID="selectButton" OnClick="changeAccount" runat="server" Text="Change"> </asp:Button>
                        </div>


                        <div id="achievementsContent" style="display: none;">
                            <div class="col-xs-3">
                                <div class="col-xs-12">  
                                    <asp:Image ID="Ribbon"  OnPreRender="ribbonimageChoose"  runat="server"  Width="150" Height="200" />
                                </div>
                                <div class="col-xs-12 textCenter">
                                    <asp:Label ID="Ribbon_Label" Text="Goals rewards" runat="server" OnPreRender="label_text"></asp:Label>
                                </div>
                            </div>
                            <div class="col-xs-3"></div>
                            <div class="col-xs-3"></div>
                            <div class="col-xs-3"></div>
                        </div>
                        
                        <div id="settingsContent" style="display: none;">
                            <div>
                                <asp:Label ID="goal_notify_label" runat="server" Text="Receive Goal Notifications:"></asp:Label>
                                <asp:CheckBox ID="goal_notify" runat="server" />
                            </div>
                            <div>
                                <asp:Label ID="budget_notify_label" runat="server" Text="Receive Budget Notifications:"></asp:Label>
                                <asp:CheckBox ID="budget_notify" runat="server" />
                            </div>
                            <div>
                                <asp:Label ID="email_notifications_label" runat="server" Text="Receive Notifications via Email:"></asp:Label>
                                <asp:CheckBox ID="email_notifications" runat="server" />
                            </div>
                            <div>
                                <asp:Label ID="text_notifications_label" runat="server" Text="Receive Notifications via Text:"></asp:Label>
                                <asp:CheckBox ID="text_notifications" runat="server" />
                            </div>
                            <asp:Button ID="btn_notify_update" runat="server" Text="Update" OnClick="btn_notify_update_Click" />
                        </div>
                        <div class="col-xs-12 textRight">
                            <div class="col-xs-10">
                            </div>
						    <div id="desktopMode" class="col-xs-2">Desktop Mode</div>
					    </div>
                    </div>
                    <div id="mobileNavBottom" class="col-xs-12">
                        <div id="help_m" class="navBtn"><h3>Help</h3></div>
                    </div>
                </div>
        </div>
		</form>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>-->
	<script src="bootstrap/js/jquery-3.1.1.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="bootstrap/js/bootstrap.min.js"></script>
    <script src="js/profile.js"></script>
</body>
</html>
