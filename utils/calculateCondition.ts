// export const calculateDaysRemaining = (expirationYear, expirationMonth, expirationDay) => {
//     const currentDate = new Date();
//     const expirationDate = new Date(
//       parseInt(expirationYear),
//       parseInt(expirationMonth) - 1,
//       parseInt(expirationDay)
//     );
//     const timeDifference = expirationDate.getTime() - currentDate.getTime();
//     const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//     return daysRemaining;
//   };
