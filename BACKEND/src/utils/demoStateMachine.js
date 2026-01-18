export const allowedTransitions = {
  BOOKED: ["ATTENDED", "NO_SHOW", "CANCELLED"],
  ATTENDED: ["INTERESTED", "NOT_INTERESTED"],
  INTERESTED: ["PAYMENT_PENDING"],
  PAYMENT_PENDING: ["CONVERTED", "DROPPED"],
};

export function isValidTransition(current, next) {
  return allowedTransitions[current]?.includes(next);
}
