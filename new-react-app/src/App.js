import './App.css';
import { Provider } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

import Ledger from './component/Ledger';

export const Count = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [],
    totalAmount: 0,
  },
  reducers: {
    addTransaction: (state, action) => {
      const newTransaction = {
        id: Date.now(),
        type: action.payload.type,
        amount: action.payload.amount,
      };
      state.transactions.push(newTransaction);

      // 총 금액 계산
      state.totalAmount += newTransaction.type === 'income' ? newTransaction.amount : -newTransaction.amount;
    },
    deleteTransaction: (state, action) => {
      const transaction = state.transactions.find((t) => t.id === action.payload);
      if (transaction) {
        state.totalAmount += transaction.type === 'income' ? -transaction.amount : transaction.amount;
        state.transactions = state.transactions.filter((t) => t.id !== action.payload);
      }
    },
  },
});

// Count 슬라이스의 액션을 export
export const { addTransaction, deleteTransaction } = Count.actions;

const store = configureStore({
  reducer: {
    transactions: Count.reducer,
  },
});

function App() {
  console.log("App 컴포넌트 렌더링" + App);
  return (
    <div>
      <h3>가계부</h3>
      <Provider store={store}>
        <Ledger></Ledger>
      </Provider>
    </div>
  );
}

export default App;

