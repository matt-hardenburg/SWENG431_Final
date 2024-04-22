function CreateUserTestHarness()
{
  //Iterates through the specified browsers.
  var BrowserItems, i;
  BrowserItems = new Array(2);
  BrowserItems[0] = Browsers.Item("chrome");
  BrowserItems[1] = Browsers.Item("edge");
  for(i = 0; i < BrowserItems.length; i++)
  {
    BrowserItems[i].Run();
    //Runs a keyword test.
    KeywordTests.EmptyUser.Run();
    //Runs a keyword test.
    KeywordTests.ValidUser.Run();
    //Runs a keyword test.
    KeywordTests.ExistingUser.Run();
  }
}