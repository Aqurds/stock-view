import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockSymbols } from "../store/stock/stockSlice";
import SingleStock from "./SingleStock";
import '../styles/stock-list.css';

const StockList = () => {
  const stockSymbols = useSelector(state => state.stocks.stocks.slice(11500,11600));
  const stockLoading = useSelector(state => state.stocks.loading);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStockSymbols, setFilteredStockSymbols] = useState([])

  useEffect(() => {
    dispatch(fetchStockSymbols())
  }, [])

  useEffect(() => {
    const newStockSymbols = stockSymbols.filter((stock) => {
      return stock.includes(searchQuery.trim().toUpperCase())
    })
    setFilteredStockSymbols(newStockSymbols)
  }, [searchQuery])

  return (
    <>
      <input 
        type='text' 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="stock-wrapper">
        { stockLoading && 
        <p>
          Stock loading ...
        </p> 
        }
        { searchQuery ? (
           filteredStockSymbols && filteredStockSymbols.map((stock) => {
          return (
            <a className="single-stock" href={`/single-stock/${stock}`} key={stock}>
            {stock}
            </a>
          )
        })
        ) : (
          stockSymbols && stockSymbols.map((stock) => {
          return (
            <a className="single-stock" href={`/single-stock/${stock}`} key={stock}>
            {stock}
            </a>
          )
        })
        )}
      </div>
    </>
  )
};

export default StockList;