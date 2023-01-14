import './MenuItem.scss';

const MenuItem = ({ title, price, tags }) => (
  <div className='Special_Menu_item d-flex justify-content-center mb-3'>
    <div className='item_info px-4'>
      <p className='item_name'>{title}</p>
      <p className='item_size'>{tags.slice(0, 7)}</p>
    </div>
    <div className='item_separator'></div>
    <span className='price text-light px-4'>{price}</span>
  </div>
);

export default MenuItem;
