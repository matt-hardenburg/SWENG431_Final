function InvalidLogin()
{
  //Iterates through the specified browsers.
  var BrowserItems, i;
  BrowserItems = new Array(2);
  BrowserItems[0] = Browsers.Item("chrome");
  BrowserItems[1] = Browsers.Item("edge");
  for(i = 0; i < BrowserItems.length; i++)
  {
    BrowserItems[i].Run("https://sweng431final.rocket.chat/home");
    Project.Variables.Var1.Iterator.Reset();
    for(; !Project.Variables.Var1.Iterator.IsEOF();)
    {
      //Maximizes the specified Window object.
      Aliases.browser.BrowserWindow.Maximize();
      //Clicks the 'textboxEmailOrUsername' control.
      Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
      //Sets the text KeywordTests.InvalidLogin.Variables.Var1("email") in the 'textboxEmailOrUsername' text editor.
      Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText(Project.Variables.Var1.Iterator.Value("email"));
      //Clicks the 'passwordboxPassword' control.
      Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Click();
      //Sets the text KeywordTests.InvalidLogin.Variables.Var1("password") in the 'passwordboxPassword' text editor.
      Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(Project.Variables.Var1.Iterator.Value("password"));
      //Clicks the 'buttonLogin' button.
      Aliases.browser.pageHome.formLogin.footerLogin.buttonLogin.ClickButton();
      //Invalid user/pass equals  'User not found or incorrect password'.
      aqObject.CheckProperty(Aliases.browser.pageHome.formLogin.fieldsetGroup.sectionOtvcg1at7f8Error.panelUserNotFoundOrIncorrect, "contentText", cmpEqual, "User not found or incorrect password");
      Project.Variables.Var1.Iterator.Next();
    }
    //Closes the 'BrowserWindow' window.
    Aliases.browser.BrowserWindow.Close();
  }
}