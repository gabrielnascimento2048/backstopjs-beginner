module.exports = async page => { //ecma script 7 using OnreadyScript with select 
    await page.select("#ticket-quantity", "3")
}