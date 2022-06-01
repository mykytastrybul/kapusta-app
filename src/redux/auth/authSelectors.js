const getToken = state => state.auth.token;
const getBalance = state => state.auth.user.balance;
const getTransactions = state => state.auth.user.transactions;

const authSelectors = {
  getToken,
  getBalance,
  getTransactions,
};

export default authSelectors;
