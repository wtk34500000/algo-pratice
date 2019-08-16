/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const emailArr = emails.map(mail => standizedEmail(mail))

    return [...new Set(emailArr)].length
};


const standizedEmail = (email) => {
    const [localName, domainName] = email.split("@")
    const standardLocalName = localName.replace(/\+.*|\./g, "")
    return standardLocalName + "@" + domainName
}