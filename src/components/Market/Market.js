import React, {Component} from 'react';
import Order from '../Order';
import {
  createOrder,
  moveOrderToFarm
} from '../../actions/marketActions';
import './Market.css';


import {connect} from 'react-redux';
let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  render() {
    const {
      orders,
      createOrder,
      moveOrderToFarm
    } = this.props;
    return (
      <div className="market">
        <h2>Новые зказы в магазине</h2>

        <button className="new-orders__create-button"
          onClick={ createOrder }>
          Создать заказ
        </button>
        <button disabled={!orders.length}
          onClick={ () => { moveOrderToFarm(orders) }}
        >
          Отправить заказ на ферму
        </button>
        
        <div className="order-list">
          {!orders || !orders.length ? null :
            orders.map(item => 
            <Order
              key={ item.id }
              data={ item } />)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ market }) => ({
  orders: market.orders
});

const mapDispatchToProps = (dispatch) => ({
  createOrder() {
    dispatch(
      createOrder(
        getNewOrder()
      )
    );
  },
  moveOrderToFarm(orders) {
    dispatch(moveOrderToFarm(...orders.slice(-1)));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Market);
