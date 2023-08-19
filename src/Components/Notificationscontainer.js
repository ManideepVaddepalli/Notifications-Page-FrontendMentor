import React, { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import notificationData from "../assets/data";

export default function Notificationscontainer() {
  const [notiData, setNotiData] = useState(notificationData);
  NotificationCount();
  function NotificationCount() {
    React.useEffect(() => {
      let number = 0;
      notiData.forEach((obj) => {
        number = obj.seen ? number : number + 1;
      });
      let count = document.getElementById("notification-count");
      count.innerText = number;
      console.log(number);
    });
  }
  useEffect(() => {
    let markAllButton = document.querySelector(".heading h3");
    markAllButton.addEventListener("click", () => {
      setNotiData(
        notiData.map((obje) => {
          return { ...obje, seen: true };
        })
      );
    });
  }, []);
  function toggleSeen(id) {
    setNotiData((prevSeen) => {
      return prevSeen.map((obje) => {
        return obje.id === id ? { ...obje, seen: true } : obje;
      });
    });
  }
  const notificationElements = notiData.map((Elem) => {
    return (
      <NotificationCard
        key={Elem.id}
        id={Elem.id}
        type={Elem.type}
        firstPerson={Elem.firstPerson}
        thirdPerson={Elem.thirdPerson}
        thirdGroup={Elem.thirdGroup}
        otherImage={Elem.otherImage}
        timepast={Elem.timepast}
        avatar={Elem.avatar}
        seenfirst={Elem.seen}
        clicklistner={toggleSeen}
        privateMessage={Elem.privateMessage}
      />
    );
  });
  return <div className="notifications-container">{notificationElements}</div>;
}
