import React, { useState } from 'react';
import './Transaction.css';
import '../../App.css';
import { useGlobalContext } from '../../context/GlobalContext';

function Transaction() {
  const { viewHistory } = useGlobalContext();
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc'); 
 console.log(viewHistory);
  const history = viewHistory();


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Apply filters based on filterType
  let filteredHistory = history.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.amount.toString().includes(search) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  if (filterType === 'income') {
    filteredHistory = filteredHistory.filter((item) => item.type === 'income');
  } else if (filterType === 'expense') {
    filteredHistory = filteredHistory.filter((item) => item.type === 'expense');
  }

  // Apply sorting based on sortOrder
  if (sortOrder === 'asc') {
    filteredHistory.sort((a, b) => a.amount - b.amount);
  } else {
    filteredHistory.sort((a, b) => b.amount - a.amount);
  }

  return (
    <div className='Inner_layout'>
      <div className='trans_history'>
        <h2>Transaction History</h2>
        <div className="filter-buttons">
          <button className={filterType === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All</button>
          <button className={filterType === 'income' ? 'active' : ''} onClick={() => handleFilterChange('income')}>Income</button>
          <button className={filterType === 'expense' ? 'active' : ''} onClick={() => handleFilterChange('expense')}>Expense</button>
        </div>
        <input 
          type="text" 
          placeholder="Search transactions..." 
          value={search} 
          onChange={handleSearchChange} 
          className="search-bar"
        />
        <button onClick={handleSortChange} className='sort'>{sortOrder === 'asc' ? ' Asc ↓' : ' Desc ↑'}</button>
        {filteredHistory.map((item) => {
          const { _id, title, amount, type } = item;
          return (
            <div key={_id} className="trans_history-item">
              <p style={{ color: type === 'expense' ? 'red' : 'var(--color-green)' }}>
                {title}
              </p>
              <p style={{ color: type === 'expense' ? 'red' : 'var(--color-green)' }}>
                {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Transaction;
