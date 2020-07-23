class Rate_limiter {
    constructor(rate, time_limit) {
        this.rate = rate
        this.time_limit = time_limit
        this.customer_count_array = []

        setInterval(() => {
            this.customer_count_array = []
        }, this.time_limit)
    }
    is_limit_valid(cust_id) {
        try {
            let matched = false
            
            for(let i=0;i<this.customer_count_array.length;i++){
                if (this.customer_count_array[i].id === cust_id) {
                    if (this.customer_count_array[i].count < this.rate) {
                        this.customer_count_array[i].count += 1
                        matched = true
                        return this.intiate_req(cust_id)
                        break
                    } else {
                        return false
                        //throw new Error("Exceeded request")
                    }
                }
            }
                
            if (!matched) {
                this.customer_count_array.push({ id: cust_id, count: 1 })
                return true
            }
        } catch (err) {
            throw err
        }
    }
    intiate_req(cust_id) {
        return true
    }
}
module.exports = Rate_limiter