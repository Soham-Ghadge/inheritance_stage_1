// import React, { useState, useEffect } from 'react';
// import { Typography } from '@material-ui/core';
// import '/Users/thesohamghadge/INERITANCE01/frontend/frontend/src/index.css';

// const CryptoInfo = ({ ID, parameters }) => {
//   const [cryptoData, setCryptoData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCryptoData = async () => {
//       try {
//         const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${ID}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data for cryptocurrency with ID ${ID}`);
//         }
//         const data = await response.json();
//         if (data.length === 0) {
//           throw new Error(`No data found for cryptocurrency with ID ${ID}`);
//         }

//         const cryptoParameters = {};
//         parameters.forEach(param => {
//           if (data[0][param]) {
//             cryptoParameters[param] = data[0][param];
//           }
//         });

//         setCryptoData(cryptoParameters);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchCryptoData();
//   }, [ID, parameters]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <Typography variant="h4" className="cryptoinfoHead">
//         {cryptoData.name} ({cryptoData.symbol})
//       </Typography>
//       {cryptoData.rank && <Typography variant="body1">Rank: {cryptoData.rank}</Typography>}
//       {cryptoData.market_cap_usd && <Typography variant="body1">Market Cap (USD): {cryptoData.market_cap_usd}</Typography>}
//       {cryptoData.price_usd && <Typography variant="body1">Price (USD): {cryptoData.price_usd}</Typography>}
//       {cryptoData.percent_change_1h && <Typography variant="body1">Percent Change (1h): {cryptoData.percent_change_1h}%</Typography>}
//       {cryptoData.percent_change_24h && <Typography variant="body1">Percent Change (24h): {cryptoData.percent_change_24h}%</Typography>}
//       {cryptoData.percent_change_7d && <Typography variant="body1">Percent Change (7d): {cryptoData.percent_change_7d}%</Typography>}
//       {cryptoData.volume24 && <Typography variant="body1">Volume (24h): {cryptoData.volume24}</Typography>}
//       {cryptoData.csupply && <Typography variant="body1">Circulating Supply: {cryptoData.csupply}</Typography>}
//       {cryptoData.tsupply && <Typography variant="body1">Total Supply: {cryptoData.tsupply}</Typography>}
//       {cryptoData.msupply && <Typography variant="body1">Maximum Supply: {cryptoData.msupply}</Typography>}
//     </div>
//   );
// };

// export default CryptoInfo;


// import React, { useState, useEffect } from 'react';
// import { Typography } from '@material-ui/core';
// import styled from '@emotion/styled';

// const StyledTypography = styled(Typography)`
//   && {
//     display: inline-block;
//     padding: 8px 12px;
//     margin: 4px;
//     background-color: #1976d2; /* Adjust background color as needed */
//     color: white;
//     border-radius: 999px; /* To create a circular badge */
//     font-size: 20px;
//     font-weight: bold;
//   }
// `;

// const CryptoInfo = ({ ID, parameters }) => {
//   const [cryptoData, setCryptoData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCryptoData = async () => {
//       try {
//         const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${ID}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data for cryptocurrency with ID ${ID}`);
//         }
//         const data = await response.json();
//         if (data.length === 0) {
//           throw new Error(`No data found for cryptocurrency with ID ${ID}`);
//         }

//         const cryptoParameters = {};
//         parameters.forEach(param => {
//           if (data[0][param]) {
//             cryptoParameters[param] = data[0][param];
//           }
//         });

//         setCryptoData(cryptoParameters);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchCryptoData();
//   }, [ID, parameters]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <Typography variant="h4" className="cryptoinfoHead">
//         {cryptoData.name} ({cryptoData.symbol})
//       </Typography>
//       {cryptoData.rank && <div><StyledTypography>Rank: {cryptoData.rank}</StyledTypography></div>}
//       {cryptoData.market_cap_usd && <div><StyledTypography>Market Cap (USD): {cryptoData.market_cap_usd}</StyledTypography></div>}
//       {cryptoData.price_usd && <div><StyledTypography>Price (USD): {cryptoData.price_usd}</StyledTypography></div>}
//       {cryptoData.percent_change_1h && <div><StyledTypography>Percent Change (1h): {cryptoData.percent_change_1h}%</StyledTypography></div>}
//       {cryptoData.percent_change_24h && <div><StyledTypography>Percent Change (24h): {cryptoData.percent_change_24h}%</StyledTypography></div>}
//       {cryptoData.percent_change_7d && <div><StyledTypography>Percent Change (7d): {cryptoData.percent_change_7d}%</StyledTypography></div>}
//       {cryptoData.volume24 && <div><StyledTypography>Volume (24h): {cryptoData.volume24}</StyledTypography></div>}
//       {cryptoData.csupply && <div><StyledTypography>Circulating Supply: {cryptoData.csupply}</StyledTypography></div>}
//       {cryptoData.tsupply && <div><StyledTypography>Total Supply: {cryptoData.tsupply}</StyledTypography></div>}
//       {cryptoData.msupply && <div><StyledTypography>Maximum Supply: {cryptoData.msupply}</StyledTypography></div>}
//     <div>
      
//     </div>
//     </div>


//   );
// };

// export default CryptoInfo;

//color schemes version
import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

const StyledTypography = styled(Typography)`
  && {
    display: inline-block;
    padding: 8px 12px;
    margin: 4px;
    border-radius: 999px; /* To create a circular badge */
    font-size: 14px;
    font-weight: bold;
  }

  &.green {
    background-color: green;
    color: white;
  }

  &.red {
    background-color: red;
    color: white;
  }

  &.blue {
    background-color: blue;
    color: white;
  }
`;

const CryptoInfo = ({ ID, parameters }) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${ID}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for cryptocurrency with ID ${ID}`);
        }
        const data = await response.json();
        if (data.length === 0) {
          throw new Error(`No data found for cryptocurrency with ID ${ID}`);
        }

        const cryptoParameters = {};
        parameters.forEach(param => {
          if (data[0][param]) {
            cryptoParameters[param] = data[0][param];
          }
        });

        setCryptoData(cryptoParameters);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, [ID, parameters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Typography variant="h4" className="cryptoinfoHead">
        {cryptoData.name} ({cryptoData.symbol})
      </Typography>
      {cryptoData.rank && (
        
          <StyledTypography className={cryptoData.percent_change_1h > 0 ? 'green' : cryptoData.percent_change_1h < 0 ? 'red' : 'blue'}>
            Rank: {cryptoData.rank}
          </StyledTypography>
      
      )}
      {cryptoData.market_cap_usd && (
        <div>
          <StyledTypography className={cryptoData.percent_change_24h > 0 ? 'green' : cryptoData.percent_change_24h < 0 ? 'red' : 'blue'}>
            Market Cap (USD): {cryptoData.market_cap_usd}
          </StyledTypography>
        </div>
      )}
      {cryptoData.price_usd && (
        <div>
          <StyledTypography className={cryptoData.percent_change_7d > 0 ? 'green' : cryptoData.percent_change_7d < 0 ? 'red' : 'blue'}>
            Price (USD): {cryptoData.price_usd}
          </StyledTypography>
        </div>
      )}
      {cryptoData.percent_change_1h && (
        <div>
          <StyledTypography className={cryptoData.percent_change_1h > 0 ? 'green' : cryptoData.percent_change_1h < 0 ? 'red' : 'blue'}>
            Percent Change (1h): {cryptoData.percent_change_1h}%
          </StyledTypography>
        </div>
      )}
      {cryptoData.percent_change_24h && (
        <div>
          <StyledTypography className={cryptoData.percent_change_24h > 0 ? 'green' : cryptoData.percent_change_24h < 0 ? 'red' : 'blue'}>
            Percent Change (24h): {cryptoData.percent_change_24h}%
          </StyledTypography>
        </div>
      )}
      {cryptoData.percent_change_7d && (
        <div>
          <StyledTypography className={cryptoData.percent_change_7d > 0 ? 'green' : cryptoData.percent_change_7d < 0 ? 'red' : 'blue'}>
            Percent Change (7d): {cryptoData.percent_change_7d}%
          </StyledTypography>
        </div>
      )}
      {cryptoData.volume24 && (
        <div>
          <StyledTypography className={cryptoData.percent_change_24h > 0 ? 'green' : cryptoData.percent_change_24h < 0 ? 'red' : 'blue'}>
            Volume (24h): {cryptoData.volume24}
          </StyledTypography>
        </div>
      )}
      {cryptoData.csupply && (
        <div>
          <StyledTypography className={cryptoData.csupply > 0 ? 'green' : 'blue'}>
            Circulating Supply: {cryptoData.csupply}
          </StyledTypography>
        </div>
      )}
      {cryptoData.tsupply && (
        <div>
          <StyledTypography className={cryptoData.tsupply > 0 ? 'green' : 'blue'}>
            Total Supply: {cryptoData.tsupply}
          </StyledTypography>
        </div>
      )}
      {cryptoData.msupply && (
        <div>
          <StyledTypography className={cryptoData.msupply > 0 ? 'green' : 'blue'}>
            Maximum Supply: {cryptoData.msupply}
          </StyledTypography>
        </div>
      )}
    </div>
  );
};

export default CryptoInfo;
