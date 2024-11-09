export const getCustomerName = (username, cutomerList) => {
  const customer = cutomerList.customer_list.find(
    (cust) => cust.username === username
  );
  return customer ? customer.name : username; // اگر نام کاربر وجود داشته باشد، آن را برگردانید، در غیر این صورت username را برگردانید
};
