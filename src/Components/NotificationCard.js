import angela from "../assets/images/avatar-angela-gray.webp";
import annakim from "../assets/images/avatar-anna-kim.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import mark from "../assets/images/avatar-mark-webber.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import chessIcon from "../assets/images/image-chess.webp";

export default function NotificationCard(props) {
  let middleContent = "";
  let avatarImg;
  let otherImage;
  switch (props.otherImage) {
    case "chess":
      otherImage = chessIcon;
      break;
    default:
  }
  switch (props.avatar) {
    case "mark":
      avatarImg = mark;
      break;
    case "angela":
      avatarImg = angela;
      break;
    case "annakim":
      avatarImg = annakim;
      break;
    case "jacob":
      avatarImg = jacob;
      break;
    case "kimberly":
      avatarImg = kimberly;
      break;
    case "nathan":
      avatarImg = nathan;
      break;
    case "rizky":
      avatarImg = rizky;
      break;
    default:
  }
  switch (props.type) {
    case "react":
      middleContent = "reacted to your recent post";
      break;
    case "follow":
      middleContent = "followed you";
      break;
    case "groupjoin":
      middleContent = "has joined your group";
      break;
    case "privatemsg":
      middleContent = "sent you a private message";
      break;
    case "comment":
      middleContent = "commented on your picture";
      break;
    case "groupleft":
      middleContent = "left the group";
      break;
    default:
  }
  return (
    <div
      className="notification-card"
      onClick={() => props.clicklistner(props.id)}
    >
      <div className="avatar">
        <img src={avatarImg} alt="this-isalt"></img>
      </div>
      <div className="notification-text" id={props.id}>
        <h5 className="notification-text-1stperson" id={props.id}>
          {props.firstPerson} &nbsp;
          <span className="notification-text-action" id={props.id}>
            {middleContent} &nbsp;
          </span>
          {props.thirdPerson && (
            <span className="notification-text-3rdperson" id={props.id}>
              {props.thirdPerson}
            </span>
          )}
          {props.thirdGroup && (
            <span className="notification-text-3rdgroup" id={props.id}>
              {props.thirdGroup}
            </span>
          )}
          {!props.seenfirst && (
            <div className="notification-text-seen" id={props.id}></div>
          )}
        </h5>
        <h6 className="notification-text-time" id={props.id}>
          {props.timepast}
        </h6>
        {props.privateMessage && (
          <p className="notification-text-privatemsg">{props.privateMessage}</p>
        )}
      </div>
      {props.type === "comment" && (
        <img
          className="notification-comment-image"
          src={otherImage}
          alt="this-isalt"
        ></img>
      )}
    </div>
  );
}
