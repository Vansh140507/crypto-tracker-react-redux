export default function Coincard({coin}){
    return(
          <div className="card">
            <img src={coin.image} alt={coin.name}/>
            <h3>{coin.name}</h3>
            <p>price:${coin.current_price}</p>
            <p>market cap rank:{coin.market_cap_rank} </p>


        </div>
        
    );
}