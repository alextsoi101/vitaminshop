import React from 'react';
import AccountOrderCard from '../cards/AccountOrderCard';
import OrderedProductCard from '../cards/OrderedProductCard';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';

const AccountOrders = () => {

  const userOrders = useSelector(state => state.order.userOrders);

  return (
    <div className="accountorders">

    <h3>Your orders</h3>

      <div className="orders-list">

        { userOrders.length === 0 && 
          <div className="no-orders">No order has been made yet.</div>
        }

        {
          userOrders.map(order => 
            <div 
              key={order.id}
              className="accorion-wrapper"
            >
              <Accordion
                sx={{boxShadow: 'none'}}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  expandIcon={<ExpandMoreIcon />}
                  id="panel1a-header"
                >
                  <AccountOrderCard 
                    id={order.id}
                    date={order.createdAt}
                    total={order.total}
                  />
                </AccordionSummary>

                <AccordionDetails>
                  {
                    order.orderedProducts.map(orderedProduct => 
                      <OrderedProductCard 
                        key={orderedProduct.id}
                        name={orderedProduct.product.name}
                        image={orderedProduct.product.images[0]}
                        size={orderedProduct.selectedSize}
                        count={orderedProduct.count}
                        price={orderedProduct.price}
                        totalPrice={orderedProduct.totalPrice}
                      />
                    ) 
                  }
                </AccordionDetails>
              </Accordion>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default AccountOrders;