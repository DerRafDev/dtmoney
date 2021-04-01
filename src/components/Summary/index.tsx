import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() {

    const { transactions } = useTransactions();

    // this is for getting the transactions of the application
    const summary =  transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            //this is to get the value in deposit
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, { // this is for the value start as 0
        deposits: 0,
        withdraws: 0,
        total: 0,
    });

    return(
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="Income"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('en', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="Outcome"/>
                </header>
                <strong>
                    - 
                    {new Intl.NumberFormat('en', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.withdraws)}
                    </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('en', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}