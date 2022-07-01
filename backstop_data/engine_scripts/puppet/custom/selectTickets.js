module.exports = async page => { //ecma script 7 
    await page.select("#ticket-quantity", "3")
}