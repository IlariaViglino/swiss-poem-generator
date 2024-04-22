//page reload

new Typewriter('#poem', {
    strings: `AI Swiss poem generator...`,
    autoStart: true,
    
  });


let form=document.querySelector("#poem-generator-form");

function generatePoem(event){
    event.preventDefault();
    let instructions=document.querySelector(".instructions");

    let apiKey = "do37btb04e66032f8eb1ab0493255777";
    let context = "You are a Swiss poets and poem expert, please carefully follow the instructions. Sign the poem with the Author's name inside the <strong></strong> element with the id of signature. Since Switzerland has multiple official languages, your can type the poem in English, German, French, Italian or Romansh, according to the original language of the poem";
    let prompt = `Write a Swiss poem about the topic: ${instructions.value}?`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement=document.querySelector("#poem");
    poemElement.innerHTML=`<span class="blink">⏳ Generating Swiss poem about ${instructions.value}</span>`;

function displayPoem(response){
    new Typewriter('#poem', {
        strings: `${response.data.answer}`,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}
axios.get(apiUrl).then(displayPoem);
   
    
    

}

form.addEventListener("submit",generatePoem);