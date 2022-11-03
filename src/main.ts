import { createFile } from "./createFile";


window.addEventListener('DOMContentLoaded', ()=>{
  const fileNameInput: HTMLInputElement | null = document.querySelector('#filename');
  const textInput: HTMLInputElement | null = document.querySelector('#text');
  const submitButton: HTMLButtonElement| null = document.querySelector('button');

  submitButton.addEventListener('click', ()=>{
    const filename = fileNameInput?.value;
    const text = textInput?.value;
    if(filename && text){
      createFile(filename, text);
    }
  })
})


