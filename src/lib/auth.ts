// OTP generation
function generateOTP(length) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}

// OTP validation
function validateOTP(otp, userInput) {
    return otp === userInput;
}

// Store OTP in memory or database (example with a simple object)
const otpStorage = {};

function storeOTP(userId, otp) {
    otpStorage[userId] = otp;
}

function retrieveOTP(userId) {
    return otpStorage[userId];
}

// Example usage
const otp = generateOTP(6);
const userId = 'user123';
storeOTP(userId, otp);

console.log(`Generated OTP for user ${userId}: ${otp}`);