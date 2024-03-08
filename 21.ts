/* Think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items. */

let studentInfo: { name: string, rollNo: number, CurrentlyEnrolled: boolean } = {
    name: "Raahima",
    rollNo: 123,
    CurrentlyEnrolled: true
};

console.log(`Student name is ${studentInfo.name} having roll number ${studentInfo.rollNo} and currently enrolled status is ${studentInfo.CurrentlyEnrolled}`);