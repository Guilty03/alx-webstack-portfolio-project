import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext();

    useEffect(() => {
        getIncomes();
        getExpenses();
    }, []);

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <h2>Recent History</h2>
                        <div className="history-list">
                            {expenses.map((expense) => (
                                <div key={expense._id} className="history-item expense">
                                    <p className="date">{expense.date}</p>
                                    <p className="type">Expense</p>
                                    <p className="amount">{dollar} {expense.amount}</p>
                                </div>
                            ))}
                            {incomes.map((income) => (
                                <div key={income._id} className="history-item income">
                                    <p className="date">{income.date}</p>
                                    <p className="type">Income</p>
                                    <p className="amount">{dollar} {income.amount}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    );
}

const DashboardStyled = styled.div`
    .stats-con {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        @media(min-width: 768px) {
            grid-template-columns: 3fr 1fr;
        }
        .chart-con {
            height: 400px;
            .amount-con {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 1rem;
                margin-top: 2rem;
                .income, .expense, .balance {
                    background: #f0f0f0;
                    border-radius: 10px;
                    padding: 1rem;
                    text-align: center;
                    h2 {
                        margin-bottom: 1rem;
                    }
                    p {
                        font-size: 2rem;
                        font-weight: 700;
                    }
                }
                .balance p {
                    color: green;
                }
            }
        }
        .history-con {
            h2 {
                margin: 1rem 0;
            }
            .history-list {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
                .history-item {
                    background: #f0f0f0;
                    border-radius: 10px;
                    padding: 1rem;
                    text-align: center;
                    p {
                        margin: 0.5rem 0;
                        &.date {
                            font-size: 0.9rem;
                            color: #888;
                        }
                        &.type {
                            font-size: 1.1rem;
                            color: #555;
                        }
                        &.amount {
                            font-size: 1.5rem;
                            color: #222;
                        }
                    }
                }
                .expense {
                    background: #ffdddd;
                }
                .income {
                    background: #ddffdd;
                }
            }
        }
    }
`;

export default Dashboard;