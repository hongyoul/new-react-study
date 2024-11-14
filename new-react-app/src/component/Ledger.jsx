import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTransaction, deleteTransaction } from "../App";


const Ledger = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [transactionType, setTransactionType] = useState('income');
  
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);
  const totalAmount = useSelector((state) => state.transactions.totalAmount);

  console.log("Ledger 컴포넌트 렌더링: " + Ledger); // Ledger 컴포넌트 렌더링 확인
  console.log("Transactions 상태: ", transactions); // 상태 값 확인
  console.log("Total Amount 상태: ", totalAmount); // 총 금액 확인

  const handleAddTransaction = () => {

    console.log("handleAddTransaction 호출: " + handleAddTransaction ); 

    const amount = parseInt(inputAmount);
    if (!isNaN(amount)) {
      dispatch(addTransaction({ type: transactionType, amount }));
      setInputAmount('');
    }
  };

  const handleDeleteTransaction = (id) => {

    console.log("handleDeleteTransaction 호출: " + handleDeleteTransaction);

    dispatch(deleteTransaction(id));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="income"
            checked={transactionType === 'income'}
            onChange={(e) => setTransactionType(e.target.value)}
          />
          수입
        </label>
        <label>
          <input
            type="radio"
            value="expense"
            checked={transactionType === 'expense'}
            onChange={(e) => setTransactionType(e.target.value)}
          />
          지출
        </label>
        <br/>
        <input
          type="number"
          value={inputAmount}
          onChange={(e) => setInputAmount(e.target.value)}
          placeholder="금액 입력"
        />
        <button onClick={handleAddTransaction}>등록</button>
      </div>

      <h3>총금액: {totalAmount}</h3>
      
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            ({transaction.type === 'income' ? '수입' : '지출'}) {transaction.amount}
            <button onClick={() => handleDeleteTransaction(transaction.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ledger;