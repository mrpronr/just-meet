browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({
    url: "http://meet.google.com/new"
  });
});
