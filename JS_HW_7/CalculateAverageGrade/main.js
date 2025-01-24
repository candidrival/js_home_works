function calculateAverageGrade(students) {
    if (students.length === 0) {
        return 0;
    }

    const totalGrade = students.reduce((sum, student) => sum + student.averageGrade, 0);
    return totalGrade / students.length;
}


const students = [
    { name: "Maksym", age: 20, averageGrade: 85 },
    { name: "Ann", age: 22, averageGrade: 90 },
    { name: "Ivan", age: 21, averageGrade: 78 },
];

const averageGrade = calculateAverageGrade(students);
console.log("Avarage grade:", averageGrade);