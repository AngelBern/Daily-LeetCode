/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var len = word1.length > word2.length ? word1.length : word2.length;

    var res = "";
    for(let i = 0; i < len; i++)
    {
        if(word1.length >= i)
        {
            res += word1.charAt(i);
        }
        if(word2.length >= i)
        {
            res += word2.charAt(i);
        }
    }
    return res;
};