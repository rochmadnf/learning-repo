import "./bootstrap";

Echo.channel("trades").listen("NewTradeEvent", (e) => {
    console.log(e.trade);
    document.getElementById("latest_trade_user").innerText = e.trade;
});
