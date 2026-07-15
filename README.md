# 📊 Crypto Tracker

> **Track live cryptocurrency prices and market rankings — powered by React & Redux Toolkit.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux_Toolkit-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![API](https://img.shields.io/badge/CoinGecko-API-8DC647?style=for-the-badge&logo=bitcoin&logoColor=white)

---

## ✨ What is this?

**Crypto Tracker** is a React + Redux Toolkit web app that fetches and displays real-time cryptocurrency data using the **CoinGecko API** — completely free, no API key required!

---

## 🚀 Live Demo

> Coming soon...

---

## 📸 Preview

> Screenshot coming soon...

---

## ⚡ Features

- ✅ **Live Crypto Prices** — real-time data from CoinGecko API
- ✅ **Market Cap Rankings** — see top coins by market cap
- ✅ **Coin Images** — official crypto logos for each coin
- ✅ **Loading State** — user-friendly loading indicator
- ✅ **Error Handling** — graceful error messages
- ✅ **Redux Toolkit** — global state management
- ✅ **Async Thunk** — handles async API calls cleanly
- ✅ **Component Based** — clean separation of concerns

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **React 18** | UI components and rendering |
| **Redux Toolkit** | Global state management |
| **createAsyncThunk** | Async API calls with loading/error states |
| **useSelector** | Reading state from Redux store |
| **useDispatch** | Dispatching actions to Redux store |
| **CoinGecko API** | Free crypto data — no API key needed |
| **JavaScript ES6+** | Async/Await, destructuring |
| **HTML5 & CSS3** | Structure and styling |
| **Parcel** | Module bundling |

---

## 🔌 API Used

**CoinGecko** — completely free, no signup, no API key!

```
GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1
```

| Data | Key |
|------|-----|
| 🪙 Coin Name | `name` |
| 💰 Current Price | `current_price` |
| 📊 Market Cap Rank | `market_cap_rank` |
| 🖼️ Coin Image | `image` |
| 📈 Price Change 24h | `price_change_percentage_24h` |

---

## 📁 Project Structure

```
crypto-tracker-react-redux/
│
├── crypto.html       # Main HTML entry point
├── crypto.js         # Root React component + Redux Provider
├── store.js          # Redux store configuration
├── slicer.js         # Redux slice + createAsyncThunk
├── coincreate.js     # Main component — fetches & displays coins
├── coincard.js       # Individual coin card component
├── crypto.css        # Styling
└── README.md
```

---

## 🏃 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Vansh140507/crypto-tracker-react-redux.git

# 2. Navigate into folder
cd crypto-tracker-react-redux

# 3. Install dependencies
npm install

# 4. Install Redux Toolkit
npm install @reduxjs/toolkit react-redux

# 5. Run with Parcel
npx parcel crypto.html
```

Open **http://localhost:1234** 🎉

---

## 🧠 What I Learned

- Setting up **Redux Toolkit** from scratch with `configureStore`
- Creating **Redux slices** with `createSlice`
- Using **`createAsyncThunk`** for async API calls
- Managing **loading, error and data states** in Redux
- Using **`useSelector`** to read state from store
- Using **`useDispatch`** to trigger actions
- Passing **props** between parent and child components
- Handling **API errors** with `rejectWithValue`

---

## 🔮 Future Improvements

- [ ] Add search functionality to find specific coins
- [ ] Add pagination to load more coins
- [ ] Show 24h price change with green/red colors
- [ ] Add price chart using Chart.js
- [ ] Dark/Light mode toggle
- [ ] Sort by price, market cap or rank

---

## 👨‍💻 Author

**Vansh**
- 🎓 B.Tech IoT & Cybersecurity with Blockchain Technology — CGC Jhanjeri
- 📧 vanshbhatnagar2808@gmail.com
- 🐙 GitHub: [@Vansh140507](https://github.com/Vansh140507)
- 💼 LinkedIn: [Vansh Bhatnagar](https://www.linkedin.com/in/vansh-bhatnagar-4ba792370/)

---

<div align="center">

⭐ <b>If you found this useful, drop a star!</b> ⭐

*Built with ❤️ using React + Redux Toolkit*

</div>
