function collectBankAccountInfo(){
    const name = prompt('Enter your full name')
    const accountNumber = prompt('Enter account number')
    const bankName = prompt('Enter bank name')
    
    console.log('Account name is:', name)
    console.log('Account number is:', accountNumber)
    console.log('bank name is:', bankName)
    
    return name + '' + accountNumber + '' + bankName
  
 }
 collectBankAccountInfo()