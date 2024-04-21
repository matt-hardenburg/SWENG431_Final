function ValidLogin()
{
  var password, valid_email, BrowserItems, i;
  //The password cannot be converted to a script. Use Project Variables to save the password.
  password = "<input password here>";
  valid_email = "mzh5947@psu.edu";
  //Iterates through the specified browsers.
  BrowserItems = new Array(2);
  BrowserItems[0] = Browsers.Item("chrome");
  BrowserItems[1] = Browsers.Item("edge");
  for(i = 0; i < BrowserItems.length; i++)
  {
    BrowserItems[i].Run("https://sweng431final.rocket.chat/home");
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageHome.Wait();
    //Checks whether the 'contentText' property of the Aliases.browser.pageHome.headerLogin.panel7z4xxwvl9u7 object equals 'Login'.
    aqObject.CheckProperty(Aliases.browser.pageHome.headerLogin.panel7z4xxwvl9u7, "contentText", cmpEqual, "Login");
    //Clicks the 'textboxEmailOrUsername' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.Click();
    //Sets the text KeywordTests.ValidLogin.Variables.valid_email in the 'textboxEmailOrUsername' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.textboxEmailOrUsername.SetText(valid_email);
    //Clicks the 'passwordboxPassword' control.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.Click();
    //Sets the text KeywordTests.ValidLogin.Variables.password in the 'passwordboxPassword' text editor.
    Aliases.browser.pageHome.formLogin.fieldsetEmailOrUsername.label.passwordboxPassword.SetText(password);
    //Clicks the 'buttonLogin' button.
    Aliases.browser.pageHome.formLogin.footerLogin.buttonLogin.ClickButton();
    //Checks whether the 'contentText' property of the Aliases.browser.pageHome.sectionHome.textnodeWelcomeToSweng431final object equals 'Welcome to sweng431final'.
    aqObject.CheckProperty(Aliases.browser.pageHome.sectionHome.textnodeWelcomeToSweng431final, "contentText", cmpEqual, "Welcome to sweng431final");
    //Clicks the 'buttonUserMenu' button.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.ClickButton();
    //Clicks the 'panelLogout' control.
    Aliases.browser.pageHome.navNavigation.buttonUserMenu.panelLogout.Click();
    //Checks whether the 'contentText' property of the Aliases.browser.pageHome.headerLogin.panelZgd4uomwooc object equals 'Login'.
    aqObject.CheckProperty(Aliases.browser.pageHome.headerLogin.panelZgd4uomwooc, "contentText", cmpEqual, "Login");
    //Closes the 'BrowserWindow' window.
    Aliases.browser.BrowserWindow.Close();
  }
}