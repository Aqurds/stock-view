import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStockSymbols } from "../store/stock/stockSlice";
import SingleStock from "./SingleStock";
import '../styles/stock-list.css';

const StockList = () => {
  const stockSymbols = useSelector(state => state.stocks.stocks.slice(11500,12500));
  console.log(stockSymbols);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStockSymbols())
  }, [dispatch])
  return (
    <div className="stock-wrapper">
      { stockSymbols && stockSymbols.map((stock) => {
        return (
          <SingleStock key={stock} stock={stock} />
        )
      })}
    </div>
  )
};

export default StockList;