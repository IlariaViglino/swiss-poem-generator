//page reload

new Typewriter('#poem', {
    strings: `Generate the poem here...`,
    autoStart: true,
    
  });



let form=document.querySelector("#poem-generator-form");

function poemType(event){
    event.preventDefault();
    let instructions=document.querySelector(".instructions");
    
    new Typewriter('#poem', {
        strings: `Poem about ${instructions.value}`,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

form.addEventListener("submit",poemType);