"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount; 



class Bank{
     /**
     * Constructor for creating a new Account object
     * 
     */
      constructor(){
        this._accounts =[];   
    }
    static nextNumber = 1;
    /**
     * 
     * @returns 
     */
    addAccount(){
        const newAccount = new Account(Bank.nextNumber++);
        this._accounts.push(newAccount);
        return this._accounts.length;
    }
   /**
    * 
    * @param {number} interest 
    * @returns 
    */
    addSavingsAccount(interest){
        const newSaving = new SavingsAccount(Bank.nextNumber++,interest);
        this._accounts.push(newSaving);
        return this._accounts.length;
    }
    /**
     * 
     * @param {Number} overDraft 
     * @returns {Number} 
     */
    addCheckingAccount(overDraft){
        const newChecking = new CheckingAccount(Bank.nextNumber++,overDraft);
        this._accounts.push(newChecking);
        return this._accounts;
    }

    closeAccount(number){
       const index = this._accounts.findIndex(customer => customer.getNumber()===number);
       if(index > -1){
           this._accounts.splice(index,1);
       }       
    }
    accountReport(){
        return this._accounts.join("\n");
    }

     endOfMonth(){
        let result = ""
        for(const accounts of this._accounts){
             result+= accounts.endOfMonth()+ "\n";
        }
        return result;
     } 
}





/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// exports.Bank = Bank;










/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.Bank = Bank;