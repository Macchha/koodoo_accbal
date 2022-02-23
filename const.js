const accountBalanceHistory = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 200 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 400 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 600 },
      },
    }
  ]

module.exports.accountBalanceHistory = accountBalanceHistory;