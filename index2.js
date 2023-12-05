// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];

function avg(score1, score2, score3, score4){
    avg = (score1 + score2) / (score3 + score4);
    return avg
 }
 
 avg(47, 150, 50, 150)
//  console.log(avg1)
 
 function avgtwo(score1, score2, score3, score4){
     avgtwo = (score1 + score2) / (score3 + score4);
     return avgtwo
  }
  
  avgtwo(39, 125, 50, 150)
//   console.log(avg2)

let stud1Score1 = 47 / 50;
let stud1Score2 = 150 / 150;
  
let stud2Score1 = 39 / 50;
let stud2Score2 = (140 - 15) / 150;

  function getLearnerData(student, avg, sub) {
const studentsAvg = [
        {
            student: '125',
            avg: avg1,
            sub:`1: ${stud1Score1score1}, 2: ${score2}`,
        },
        {
            studentID: '132',
            avg: avg2,
            sub:`1: ${stud2Score1score1}, 2: ${stud2Score2score2}`,
        },
    ];
    return studentAvg;
  }
// function did not work not returning as an array of objects
  console.log(getLearnerData)

let newArr = []
  
const uniqueLearnerID = [...new Set(LearnerSubmissions.map(item => item.learner_id))]; // [ collecting each learner ID]
    console.log(uniqueLearnerID)

// newArr.push(uniqueLearnerID)
// console.log(newArr)

let studentObj1 = {
    id: uniqueLearnerID[0],
    average: avg,
    sub: `1: ${stud1Score1}, 2: ${stud1Score2}`,
}
let studentObj2 = {
    id: uniqueLearnerID[1],
    average: avgtwo,
    sub: `1: ${stud2Score1}, 2: ${stud2Score2}`,

}



newArr.push(studentObj1, studentObj2)
console.log(newArr)

