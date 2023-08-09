import '../styles/single-stock.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import Header from './Header';
import { IoChevronBack } from 'react-icons/io5'

const API_KEY = '694e1015c577e6802d8f0e4f00ea92ef';
const API_BASE_URL = 'https://financialmodelingprep.com/api/v3/';
const INCOME_EXT = 'income-statement';


const SingleStock = () => {
  const stockName = useParams();
  // console.log(stockName)
  const [singleStockData, setSingleStockData] = useState(null);
  const [apiErrorMessage, setApiErrorMessage] = useState('');
  const [dataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${API_BASE_URL}${INCOME_EXT}/${stockName.id}?apikey=${API_KEY}`);
        console.log(response.data);
        setSingleStockData(response.data);
        setApiErrorMessage('');
        setDataLoading(false);
      } catch (error) {
        console.log(error.response.data['Error Message'])
        setApiErrorMessage(error.response.data['Error Message'])
        setDataLoading(false);
      }
    }
    fetchData();
  }, [])
  return (
    <div className="stock-details">
      <a href='/' className='go-back'>
        <IoChevronBack className='go-back-icon'/>
      </a>
      <Header />
      <h2 className='stock-header'>
        Stock name: <br/>
        <span className='stock-name'>{stockName.id}</span>
      </h2>
        { dataLoading && <p className='stock-loading'>Loading ...</p> }
        { apiErrorMessage && <p className='stock-loading'>{apiErrorMessage}<br/>Please go back and check another stock. Sorry for the inconvenience!</p> }
        { singleStockData && singleStockData.map((stockData) => {
          return(
            <div key={stockData.date} className='stock-data-by-date'>
              <p className='stock-date'>
                Reporting date: <br/>
                <span className='stock-date-speci'>{stockData.date}</span>
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
                    <a className='final-link' target='_blank' href={stockData.finalLink}>
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