function obscure(ccNumber) {
    if (ccNumber.length < 12 || ccNumber.length > 16) {
        return "Invalid Credit Card";
    }
    
    const visibleDigits = ccNumber.slice(-4);
    const hiddenDigits = '*'.repeat(ccNumber.length - 4);
    
    return hiddenDigits + visibleDigits;
}

module.exports = obscure;