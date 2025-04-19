import { useState, useEffect } from "react";

function SalesPage({ userName, userId }) {
  const [shoppingCartValue, setShoppingCartValue] = useState(0);
  const [minutesOnPage, setMinutesOnPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMinutesOnPage(prev => prev + 1);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch(`/user/${userId}/shoppingCartValue`)
      .then(res => res.json())
      .then(result => {
        if (result.value) {
          setShoppingCartValue(result.value);
        }
      })
      .catch(err => {
        console.error(`Error fetching user’s cart value: ${err}`);
      });
  }, [userId]);

  useEffect(() => {
    console.log("some reactive client event");
  }, [shoppingCartValue, userName]);

  return (
    <div>
      <Header userName={userName} />
      <ClientInfo
        shoppingCartValue={shoppingCartValue}
        minutesOnPage={minutesOnPage}
      />
    </div>
  );
}

function Header({ userName }) {
  return <h2>Spend more money, {userName}.</h2>;
}

function ClientInfo({ shoppingCartValue, minutesOnPage }) {
  return (
    <div>
      <p>Your cart value is: ${shoppingCartValue}</p>
      <p>You've been lingering for {minutesOnPage} minute(s)</p>
    </div>
  );
}

export default SalesPage;