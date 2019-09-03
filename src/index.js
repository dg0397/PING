import "./styles.scss";
import {importImages} from "./app/images";
import {alertInput,checkInputs,changeColorText} from "./app/validateInput"


importImages();

const input = document.querySelector('input');//select all inputs
const btn = document.querySelector('.btn'); //select the button
const form = document.querySelector('form');

form.reset();
input.addEventListener('blur', alertInput);
input.addEventListener("focus", changeColorText);
btn.addEventListener('click', checkInputs);
