var removeVowels = function(s) {
    let vowels = /[aeiou]/g
    return s.replace(vowels, '');
};