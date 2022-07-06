const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLang: function(obj) {
        const {age} = obj;
        const {languages} = obj.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang){
            str += `${lang.toUpperCase()}`;
        });

        return(str);
    }
};

personalPlanPeter.showAgeAndLang(personalPlanPeter);

function showExperience(obj) {
    const {exp} = obj.skills;
    return(exp);
}

showExperience(personalPlanPeter);

function showProgrammingLangs(obj) {
    let str = '';
    const {programmingLangs} = obj.skils;
    for( let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        return(str);
    }    
}
