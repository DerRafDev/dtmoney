import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

/*
    This could work but there is a Senior way that is better
interface TransactionInput {
    title: string;
    amount: number;
    type: string;
    category: string; 
}
*/
//this work like the interface, put is way better, will omit the id and createdAt
type TransactionInput = Omit<Transaction, 'id'| 'createdAt'>;
//i could use Pick instead of Omit, then you pick the atributes that you want
// type TransactionInput = Pick<Transaction, 'title'| 'amount' | 'pick' | 'category' >

interface TransactionsProviderProps {
    //this is for the TransactionsProvider to accept data from App.tsx
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (Transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, SetTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => SetTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        SetTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}