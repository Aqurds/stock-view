import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockSymbols } from "../store/stock/stockSlice";
import Header from "./Header";
import SingleStock from "./SingleStock";
import '../styles/stock-list.css';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

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
      <Header />
      <div className="search-wrapper">
        <FaSearch className="search-icon"/>
        <input 
          type='text' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-stock"
          placeholder="Search Stock. Ex: AAMC"
        />
      </div>
      <div className="stock-wrapper">
        { stockLoading && 
        <p className="stock-loading">
          Stock loading ...
        </p> 
        }
        { searchQuery ? (
           filteredStockSymbols && filteredStockSymbols.map((stock) => {
          return (
            <div className="single-stock">
              <a href={`/single-stock/${stock}`} key={stock}>
                <IoArrowForwardCircleOutline className="go-single-stock" />
              </a>
              <a href={`/single-stock/${stock}`} key={stock}>
                {stock}
              </a>
            </div>
          )
        })
        ) : (
          stockSymbols && stockSymbols.map((stock) => {
          return (
            <div className="single-stock">
              <a href={`/single-stock/${stock}`} key={stock}>
                <IoArrowForwardCircleOutline className="go-single-stock" />
              </a>
              <a href={`/single-stock/${stock}`} key={stock}>
                {stock}
              </a>
            </div>
          )
        })
        )}
      </div>
    </>
  )
};

export default StockList;