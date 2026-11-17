const {Builder,By}=require("selenium-webdriver");
const assert=require("node:assert/strict");
(async()=>{const driver=await new Builder().forBrowser("chrome").build();try{
await driver.get("http://localhost:5500");
assert.equal(await driver.findElement(By.id("welcome")).getText(),"Welcome to My Webpage!");
assert.ok((await driver.findElement(By.id("current-date")).getText()).length>0);
console.log("PASS: Welcome message and date displayed.");
}finally{await driver.quit();}})();
