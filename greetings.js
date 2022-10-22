const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string형태의 변수지정
const HIDDEN_CLASSNAME = "hidden";
const USER_NAME = "username";

// submit 했을 때 username을 로컬스토리지에 저장
function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USER_NAME,username);
    paintGreetings(username);
}
// 반복작업으로 함수를 만들어줌
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USER_NAME);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit); //
} else {
   paintGreetings(savedUsername);
}