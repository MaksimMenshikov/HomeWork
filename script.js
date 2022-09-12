
const students = [
  {   id:10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
  },
  {   id:11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
  },
  {   id:12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
  },
  {   id:13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
  }
]
calculateStudentAverageMark(students[2]);
calculateGroupAverageMark(students);

function calculateStudentAverageMark(student){
  return student.marks.reduce((acc,item)=>acc+item)/student.marks.length;
  
}

function calculateGroupAverageMark(studentsArrays){
  const allMarksArray=studentsArrays.reduce((acc,item)=>acc.concat(item.marks),[]);
  return allMarksArray.reduce((acc,item)=>acc+item)/allMarksArray.length;
}