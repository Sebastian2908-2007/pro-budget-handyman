import Image from "next/image";
import stars from '../app/assets/imgs/stars.webp';

const Review = ({props}) => {
    const {name,text} = props;

    let wordCounter = 0;
    /**this is used for the if statement that determines how many paragraphs there will be it is fed as the second argument to the actual format paragraph function*/
    let numberOfParagraphs = 1;
    /**this if statement determines how many paragraphs we are going to need based on how much "blogText" there is 62 words equals one paragraph*/
    for (let i=0; i< text.split(' ').length; i++ ) {
      if(wordCounter === 30){
        numberOfParagraphs++
        wordCounter = 0
    }else{
      wordCounter++ 
    }
    }
    /**This function returns an array of all of our paragraphs to be used in the map in our jsx*/
    function formatParagraphs(string, numlines) {
      let length = string.length;
      let paraLength = Math.round((length)/numlines);
      let paragraphs = [];
      for (let i=0; i<numlines; i++) {
          let marker = paraLength;
          //if the marker is right after a space, move marker back one character
          if (string.charAt(marker-1) === " ") {
              marker--; 
          }
          //move marker to end of a word if it's in the middle
          while(string.charAt(marker) !== " " && string.charAt(marker) !== "") {
              marker++;
          }
          let nextPara = string.substring(0, marker)
          paragraphs.push(nextPara)
          string = string.substring((nextPara.length+1),string.length)
      }
      return paragraphs
    }
    /**our paragraphs for map in jsx it takes db blog text and the numberofParagraphs determing in the if statement above */
    const myparagraphs = formatParagraphs(text,numberOfParagraphs);
    /**this is just to give my mapped elements an id*/
    let pKey = 0;

    
    return(
       <div className="rounded-lg shadow-md p-4 flex-col items-center">
        <div className="flex flex-row items-center justify-between font-semibold">
            <span>{name}</span>
             <Image
          className="w-[45%]"
          src={stars}
          alt="Pro Budget Handyman Google reviews section header"
          sizes='80vw'
        />
      </div>
      {myparagraphs.map((p) => (
            <p key={pKey++} className="p-2">
            {p}
          </p>
      ))}
      
       </div>
    );
};

export default Review;