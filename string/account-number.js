function formatAccountNu(accountNumber) {
    
    const accountStr = accountNumber.toString();
    
    if (accountStr.length < 4) {
        throw new Error('Account number must have at least 4 digits');
    }

    const firstTwo = accountStr.slice(0, 2);
    const lastTwo = accountStr.slice(-2);

    const middleAsterisks = '*'.repeat(accountStr.length - 4);

    return `${firstTwo}${middleAsterisks}${lastTwo}`;
}

const inputAccountNumber = '12345678987';
console.log(formatAccountNu(inputAccountNumber));