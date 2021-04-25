// LC 811, Subdomain Visit Count
// https://leetcode.com/problems/subdomain-visit-count/

/**
 * param {string[]} cpdomains
 * return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    // object to hold the domains and counts
    let subdomainCounter = {}
    // parse the input
    // split on space, then split on period
    cpdomains.forEach((countpair) => {
        // split on space to get [count, domain]
        let newArr = countpair.split(' ')
        // pop front to get count
        let count = parseInt(newArr.shift())
        // split the domains by period
        let subdomains = newArr[0].split('.')
        // push the domains into an object and add the count
        while (subdomains.length > 0) {
            // add subdomain to counter obj and add count
            let subdomain = subdomains.join('.')
            subdomainCounter[subdomain] ? subdomainCounter[subdomain] += count : subdomainCounter[subdomain] = count
            // pop front element and continue
            subdomains.shift()
        }
    }) // end main loop
    // create return array
    let retArr = []
    for (let [key, value] of Object.entries(subdomainCounter)) {
        retArr.push(`${value} ${key}`)
    }
    return retArr
};