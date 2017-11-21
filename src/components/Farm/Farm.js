import React from 'react';
import { connect } from 'react-redux';
import Order from '../Order/';
import { moveOrderToCustomer } from '../../actions/farmActions';
import './Farm.css';

class Farm extends React.Component {
    render() {
        const {
            orders,
            moveOrderToCustomer
        } = this.props;
        return (
            <div className="farm">
                <h2>Производство на ферме</h2>
                <button disabled={!orders.length}
                    onClick={ () => { moveOrderToCustomer(orders) } }>
                        Отправить урожай на ферму
                </button>

                <div>
                    {!orders || !orders.length ? null :
                        orders.map(item => 
                            <Order
                                key={item.id}
                                data={item} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ farm }) => ({
    orders: farm.orders
});

const mapDispatchesToProps = (dispatch) => ({
    moveOrderToCustomer(orders) {
        dispatch(
            moveOrderToCustomer(...orders.slice(-1))
        );
    }
});

export default connect(
    mapStateToProps,
    mapDispatchesToProps
)(Farm);