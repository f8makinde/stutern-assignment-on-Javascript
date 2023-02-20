// 3)Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
// The subjects for each class group are as follows:
// Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Arts Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics

// Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. 

function courseSubject(subject){
    if(subject === 'science'){
        return ['Physics', ' Chemistry', 'Biology', 'Technical Drawing '].join(', ')
    }
    else if(subject === 'socialScience'){
        return ['Accounting', 'Commerce', 'Marketing', 'Geography'].join(' ,')
    }
    else if (subject === 'arts'){
        return ['Government', 'Economics', 'Literature', 'History'].join(' ,')
    }
    else if (subject === 'general'){
        return ['English', 'Mathematics'].join(' ,')
    }
    else{
        return ['English', 'Mathematics'].join(' ,') 
    }
}
 console.log(courseSubject('good'));

 