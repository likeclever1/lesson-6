import React from 'react';
import PropTypes from 'prop-types';
import './Order.css';

const Order = ({ data }) => (
    <div className="order">
        <div className="order__upper">
            <div className="p--order">
                Название: { data.name }
            </div>
            <div className="p--order">
                Цена: { data.price }
            </div>
        </div>
        <div className="order__lower">
            <div className="p--order">
                Создан: { data.createdAt.toString() }
            </div>
        </div>
        
    </div>
);

Order.propTypes = {
    data: PropTypes.object
};

export default Order;

