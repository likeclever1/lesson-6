import React from 'react';
import { connect } from 'react-redux';

class Budget extends React.Component {
    render() {
        const {
            profit,
            marketExpanse,
            farmExpanse,
            deliveryExpanse
        } = this.props;

        const total = profit - marketExpanse - farmExpanse - deliveryExpanse;

        return (
            <div className="budget">
                <h2>Бюджет</h2>
                <p>
                    Всего получено денег: { profit }
                </p>
                <p>
                    Расходы продавцов: { marketExpanse }
                </p>
                <p>
                    Расходы на ферме: { farmExpanse }
                </p>
                <p>
                    Расходы на доставку: { deliveryExpanse }
                </p>
                <p>
                    Итого: { total }
                </p>
            </div>
        )
    }
}

const mapStateToProps = ({ budget }) => ({
    profit: budget.profit,
    marketExpanse: budget.marketExpanse,
    farmExpanse: budget.farmExpanse,
    deliveryExpanse: budget.deliveryExpanse
});

export default connect(
    mapStateToProps,
    null
)(Budget);