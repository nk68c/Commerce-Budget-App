using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Tester;

public partial class Play : System.Web.UI.Page
{
    static int userID;

    const int TRUE_FLAG = 1;

    protected void Page_Load(object sender, EventArgs e)
    {
       
    }

    protected void Page_PreRender()
    {
        if (!IsPostBack)
        {
            DataAbstract DA = new DataAbstract();
            

            if (Convert.ToInt32(Session["userID"]) != 0)
            {
                userID = Convert.ToInt32(Session["userID"]);
                DataSet userData = DA.returnUser(userID); //gets the user
                DataTable userTable = userData.Tables[0]; 
                object goal = userTable.Rows[0].Field<object>("GoalsNotifications");
                object budget = userTable.Rows[0].Field<object>("BudgetsNotifications");
                goal_notify.Checked = Convert.ToBoolean(goal);
                budget_notify.Checked = Convert.ToBoolean(budget);
                DataSet accountData = DA.returnAccounts(userID); //gets all accounts
                System.Data.DataTable accountsTable = accountData.Tables[0]; //table holding all account entries for the user
                object s = accountsTable.Rows[0].Field<object>("AcctNumber"); //sets the default account to the first of the user's accounts. LIKELY CHANGE LATER.
                if (Convert.ToInt64(Session["account"]) == 0) Session["account"] = Convert.ToInt64(s);                        //saves the first account as the default account during the session
            }
            else
            {
                Session["userID"] = 1;  //temporary solution for demo 3/19/2017 
                Session["account"] = 211111110;
                DataSet userData = DA.returnUser(userID); //gets the user
                DataTable userTable = userData.Tables[0];
                object goal = userTable.Rows[0].Field<object>("GoalsNotifications");
                object budget = userTable.Rows[0].Field<object>("BudgetsNotifications");
                object email = userTable.Rows[0].Field<object>("EmailNotifications");
                object text = userTable.Rows[0].Field<object>("TextNotifications");
                goal_notify.Checked = Convert.ToBoolean(goal);
                budget_notify.Checked = Convert.ToBoolean(budget);
                email_notifications.Checked = Convert.ToBoolean(email);
                text_notifications.Checked = Convert.ToBoolean(text);
            }

            
            
            DataTable accounts = DA.returnAccounts(userID).Tables[0];
            DropDownList DDL = acctSelect;

            DDL.Items.Insert(0, new ListItem("Select Account", "0"));
            DDL.DataSource = accounts;
            DDL.DataTextField = "AcctNumber";
            DDL.DataValueField = "AcctNumber";
            
            DDL.DataBind();

            ListItem LVI = DDL.Items.FindByValue(Convert.ToString(Session["account"]));
            if (LVI != null)
            {
                int index = DDL.Items.IndexOf(LVI);
                acctSelect.SelectedIndex = index;
            }
            currAcct.Text = "Current account: " + Session["account"].ToString();

        }
    }


    protected void btn_notify_update_Click(object sender, EventArgs e)
    {
        DataAbstract DA = new DataAbstract();
        int goal = 0, budget = 0, email = 0, text = 0;

        if (goal_notify.Checked)
        {
            goal = TRUE_FLAG;
        }

        if (budget_notify.Checked)
        {
            budget = TRUE_FLAG;
        }

        if (email_notifications.Checked)
        {
            email = TRUE_FLAG;
        }

        if (text_notifications.Checked)
        {
            text = TRUE_FLAG;
        }

        DA.updateNotifications(userID, goal, budget, email, text);
    }

    public void ribbonimageChoose(object sender, EventArgs e) //selects the current badge for your number of completed goals
    {
        Image x = (Image)sender;
        
        DataAbstract DA = new DataAbstract();
        int completed_goals = DA.returnCompleteGoalsCount(Convert.ToInt32(Session["userID"]));
        

        if (completed_goals == 0)
        {
            //show "no goals completed yet"
            
        }
        else if (completed_goals >= 1 && completed_goals < 3)
        {
            //show " One Goal Completed " , green ribbon image
            x.Attributes["src"] = "images/ribbon1.png";
        }
        else if (completed_goals >= 3 && completed_goals < 5)
        {
            //show " Three Goals Completed " , red ribbon image
            x.Attributes["src"] = "images/ribbon2.png";
        }
        else if (completed_goals >= 5 && completed_goals < 10)
        {
            //show " 5 Goals Completed " , blue ribbon image
            x.Attributes["src"] = "images/ribbon3.png";
        }
        else
        {
            //show " 10 Goals Completed " , gold ribbon image
            x.Attributes["src"] = "images/ribbon4.png";
        }
        sender = x;
    }

    public void label_text(object sender, EventArgs e) //sets the label for the current badge level
    {
        
        DataAbstract DA = new DataAbstract();
        int completed_goals = DA.returnCompleteGoalsCount(Convert.ToInt32(Session["userID"]));

        if (completed_goals == 0)
        {
            //show "no goals completed yet"
            Ribbon_Label.Text = "No goals completed";
        }
        else if (completed_goals >= 1 && completed_goals < 3)
        {
            //show " One Goal Completed " , green ribbon image
            Ribbon_Label.Text = "You have completed your first goal!";
        }
        else if (completed_goals >= 3 && completed_goals < 5)
        {
            //show " Three Goals Completed " , red ribbon image
            Ribbon_Label.Text = "You have completed 3 goals";
        }
        else if (completed_goals >= 5 && completed_goals < 10)
        {
            //show " 5 Goals Completed " , blue ribbon image
            Ribbon_Label.Text = "You have completed 5 goals";
        }
        else
        {
            //show " 10 Goals Completed " , gold ribbon image
            Ribbon_Label.Text = "You have completed 10 goals, great job!";
        }
        
    }



    public void changeAccount(object sender, EventArgs e)
    {


        
        Session["account"] = acctSelect.SelectedValue;
        
        
        Response.Redirect("Profile.aspx");

    }

    public void logoutClick(Object sender, EventArgs e)
    {
        Session["ViewState"] = null;
        Session["userID"] = null;
        Session["account"] = null;
        Response.Redirect("Login.aspx");
    }
}