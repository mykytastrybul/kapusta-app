const getToken = state => state.auth.token;
const getBalance = state => state.auth.user.balance;
const getTransactions = state => state.auth.user.transactions;
const getIsAuth = state => Boolean(state.auth.token);
const getError = state => state.auth.error;

const authSelectors = {
  getToken,
  getBalance,
  getTransactions,
  getIsAuth,
  getError,
};

export default authSelectors;
