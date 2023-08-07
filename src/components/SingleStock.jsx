import '../styles/single-stock.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";

const API_KEY = '694e1015c577e6802d8f0e4f00ea92ef';
const API_BASE_URL = 'https://financialmodelingprep.com/api/v3/';
const INCOME_EXT = 'income-statement';


const SingleStock = () => {
  const stockName = useParams();
  // console.log(stockName)
  const [singleStockData, setSingleStockData] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const response = await axios.get(`${API_BASE_URL}${INCOME_EXT}/${stockName.id}?apikey=${API_KEY}`);
        console.log(response.data);
        setSingleStockData(response.data);
    }
    fetchData();
  }, [])
  return (
    <div className="stock-details">
      <a href='/' className='go-back'>
        &lt;
      </a>
      <h2 className='stock-header'>
        Stock name: {stockName.id}
      </h2>
        { !singleStockData && <p>Loading ...</p> }
        { singleStockData && singleStockData.map((stockData) => {
          return(
            <div key={stockData.date} className='stock-data-by-date'>
              <p className='stock-date'>
                Reporting date: {stockData.date}
              </p>
              <div className='stock-details'>
                <div>
                  <p>Calender Year: {stockData.calendarYear}</p>
                  <p>Cost & Expenses: {stockData.costAndExpenses}</p>
                  <p>Cost of Revenue: {stockData.costOfRevenue}</p>
                  <p>Reported Currency: {stockData.reportedCurrency}</p>

                  <p>Eps: {stockData.eps}</p>
                  <p>Gross Profile: {stockData.grossProfit}</p>
                  <p>Net Income: {stockData.netIncome}</p>
                  <p>Final Link :  
                    <a target='_blank' href={stockData.finalLink}>
                      Link
                    </a>
                  </p>

                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
};

export default SingleStock;