import root from "./index.scss";
import {getAuth} from "./pages/auth";
import {getRegistration} from "./pages/registration";
import {getProfile} from "./pages/profile";
import {getErrors} from "./pages/errors";
import {getModal} from "./modules/modal";
import {getChats} from "./pages/chats";

const body = document.querySelector('body');
const main = document.createElement('main');
const nav = document.querySelectorAll('a');

body.classList.add('scroll', 'scroll-bold');
body.append(main);
window.addEventListener("load", function () {
    nav.forEach(function (item) {
        item.onclick = function (e) {
            e.preventDefault();
            loadPage(item.getAttribute('href'))
        }
    })
});

function loadPage(url) {
    url = url.replace('/', '');
    main.innerHTML = "";
     switch(url) {
         case "auth":
             main.insertAdjacentHTML("beforeend", getAuth());
             break;
         case "registration":
             main.insertAdjacentHTML("beforeend", getRegistration());
             break;
         case "profile":
             main.insertAdjacentHTML("beforeend", getProfile());
             break;
         case "chats":
             main.insertAdjacentHTML("beforeend", getChats());
             break;
         case "404":
             main.insertAdjacentHTML("beforeend", getErrors({typeError: "404", textError: "Уп-с, такой страницы нет!"}));
             break;
         case "500":
             main.insertAdjacentHTML("beforeend", getErrors({typeError: "500", textError: "Мы уже фиксим"}));
             break;
         case "modal":
             main.insertAdjacentHTML("beforeend", getModal());
             break;
         default:
             main.insertAdjacentHTML("beforeend", getErrors({typeError: "404", textError: "Уп-с, такой страницы нет!"}));
             break;

    }
}