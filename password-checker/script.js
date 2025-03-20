  // Library Book Rental System


function calculateLateFee(daysLate) {
   let fine = 0;
   let status = "Returned";

   if (daysLate <= 0) {
       console.log("No fine. Book returned on time.");
   } else if (daysLate <= 3) {
       console.log("No fine. Book returned within 3 days.");
   } else if (daysLate <= 7) {
       fine = (daysLate - 3) * 2; 
       console.log(`Fine: $${fine}`);
   } else if (daysLate <= 30) {
       fine = (7 - 3) * 2 + (daysLate - 7) * 5; 
       console.log(`Fine: $${fine}`);
   } else {
       fine = 100; 
       status = "Lost";
       console.log(`Book marked as "${status}". Fine: $${fine}`);
   }

   return { fine, status };
}


const daysLate = 10; 
const result = calculateLateFee(daysLate);

console.log(`Days Late: ${daysLate}, Fine: $${result.fine}, Status: ${result.status}`);



