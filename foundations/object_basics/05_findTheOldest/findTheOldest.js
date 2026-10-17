const findTheOldest = function(arr) {
    const oldest = arr.reduce((oldestPerson, currentPerson) => {
        let oldestDeathYear = oldestPerson.yearOfDeath;
        let currentDeathYear = currentPerson.yearOfDeath;

        if (oldestDeathYear === undefined) {
            oldestDeathYear = new Date().getFullYear();
        }

        if (currentDeathYear === undefined) {
            currentDeathYear = new Date().getFullYear();
        }

        const oldestAge = oldestDeathYear - oldestPerson.yearOfBirth;
        const currentAge = currentDeathYear - currentPerson.yearOfBirth;

        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
