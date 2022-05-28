const getToken = state => state.auth.token;
const getBalance = state => state.auth.user.balance;

const authSelectors = {
  getToken,
  getBalance,
};

export default authSelectors;
