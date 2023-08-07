import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockSymbols } from "../store/stock/stockSlice";
import SingleStock from "./SingleStock";
import '../styles/stock-list.css';

const StockList = () => {
  const stockSymbols = useSelector(state => state.stocks.stocks.slice(11500,12500));
  const stockLoading = useSelector(state => state.stocks.loading);
  console.log(stockSymbols);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStockSymbols())
  }, [dispatch])
  return (
    <div className="stock-wrapper">
      { stockLoading && 
      <p>
        Stock loading ...
      </p> 
      }
      { stockSymbols && stockSymbols.map((stock) => {
        return (
          <a className="single-stock" href={`/single-stock/${stock}`} key={stock}>
           {stock}
          </a>
        )
      })}
    </div>
  )
};

export default StockList;