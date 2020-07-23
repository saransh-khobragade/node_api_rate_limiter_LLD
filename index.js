const Rate_limiter = require('./rate_limter')

const rate_limiter = new Rate_limiter(3,1000)

console.log(rate_limiter.is_limit_valid(1))
console.log(rate_limiter.is_limit_valid(2))
console.log(rate_limiter.is_limit_valid(3))


console.log(rate_limiter.is_limit_valid(1))
console.log(rate_limiter.is_limit_valid(1))
console.log(rate_limiter.is_limit_valid(1))
console.log(rate_limiter.is_limit_valid(1))

