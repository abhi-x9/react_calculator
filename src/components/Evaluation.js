
export const evaluation = ({ current, previous, operation }) => {
  const prev = parseFloat(previous);
  const curnt = parseFloat(current);

  if(isNaN(prev) || isNaN(curnt)) return ""

  let result = "";

  switch (operation) {
    default:
      result = "";
      break;

    case "+":
      result = prev + curnt;
      break;
    case "-":
      result = prev - curnt;
      break;
    case "*":
      result = prev * curnt;
      break;
    case "/":
      result = prev / curnt;
      break;

  }
  return result.toString();
};