function EmptyLogin()
{
  //Iterates through the specified browsers.
  var BrowserItems, i;
  BrowserItems = new Array(2);
  BrowserItems[0] = Browsers.Item("chrome");
  BrowserItems[1] = Browsers.Item("edge");
  for(i = 0; i < BrowserItems.length; i++)
  {
    BrowserItems[i].Run("https://sweng431final.rocket.chat/home");
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
    //Clicks the 'buttonLogin' button.
    Aliases.browser.pageHome.formLogin.footerLogin.buttonLogin.ClickButton();
    //Empty email object equals 'This field is required'.
    aqObject.CheckProperty(Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textnode1wtz51pcnrpError, "contentText", cmpEqual, "This field is required");
    //Empty password object equals 'This field is required'.
    aqObject.CheckProperty(Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textnodeAvoms3d7cosError, "contentText", cmpEqual, "This field is required");
    //Clicks the 'textboxEmailOrUsername' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
    //Enters text in the text box.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText("mzh5947@psu.edu");
    //Clicks the 'buttonLogin' button.
    Aliases.browser.pageHome.formLogin.footerLogin.buttonLogin.ClickButton();
    //Missing password popup object equals 'Password
    //*
    //
    //This field is required
    //Forgot your password?'.
    aqObject.CheckProperty(Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.panelPassword, "contentText", cmpEqual, "Password\n*\n\nThis field is required\nForgot your password?");
    //Clicks the 'textboxEmailOrUsername' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
    //Sets the text '' in the 'textboxEmailOrUsername' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText("");
    //Clicks the 'passwordboxPassword' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Click();
    //Sets the text Project.Variables.Password4 in the 'passwordboxPassword' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.Password4);
    //Clicks the 'buttonLogin' button.
    Aliases.browser.pageHome.formLogin.footerLogin.buttonLogin.ClickButton();
    //Missing email popup object equals 'Email or username
    //*
    //This field is required
    //Password
    //*
    //
    //Forgot your password?'.
    aqObject.CheckProperty(Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername, "contentText", cmpEqual, "Email or username\n*\nThis field is required\nPassword\n*\n\nForgot your password?");
    //Closes the 'BrowserWindow' window.
    Aliases.browser.BrowserWindow.Close();
  }
}