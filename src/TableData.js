import axios from "axios";
import { useEffect, useState } from "react"
import Display from './Display'

const TableData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        function fetchData() {
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false', { crossDomain: 'true' })
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        }
        fetchData();
    }, [])


    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Symbole</th>
                    <th>Current Price</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>

                {data.map((val, idx) => {
                    /* return(
                         <tr>
                             <td>{val.name}</td>
                             <td>{val.id}</td>
                             <td>{val.image}</td>
                             <td>{val.symbol}</td>
                             <td>{val.current_price}</td>
                             <td>{val.total_volume}</td>
                         </tr>
                     )*/
                     return(
                         <Display key={idx} props={val} />

                     )


                })}
            </tbody>
        </table>
    )

}
export default TableData;