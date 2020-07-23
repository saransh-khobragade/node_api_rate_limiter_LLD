const expect = require('chai').expect;
const Rate_limiter = require('../rate_limter');

const test_config = {
    rate: 3,
    time_out: 1000
}

describe('rate_limiter unit test', () => {
    
    it('positive test', () => {
        const rate_limiter = new Rate_limiter(test_config.rate, test_config.time_out)

        expect(rate_limiter.is_limit_valid(1)).to.be.true
        expect(rate_limiter.is_limit_valid(1)).to.be.true
        expect(rate_limiter.is_limit_valid(1)).to.be.true

        //checking after time
        setTimeout(()=>{
            console.log(rate_limiter.is_limit_valid(1))
            console.log(rate_limiter.is_limit_valid(1))
            console.log(rate_limiter.is_limit_valid(1))
        },2000)
    });

    it('negative test', () => {
        
        const rate_limiter = new Rate_limiter(test_config.rate,test_config.time_out)
        expect(rate_limiter.is_limit_valid(1)).to.be.true
        expect(rate_limiter.is_limit_valid(1)).to.be.true
        expect(rate_limiter.is_limit_valid(1)).to.be.true
        expect(rate_limiter.is_limit_valid(1)).to.be.false

    });
});
