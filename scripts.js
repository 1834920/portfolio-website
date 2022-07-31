/*const showMore = () => {
    document.getElementById('about-me-2').style.display = 'inline';
}

document.getElementById("more-about-me").addEventListener('click', showMore());


$('#more-about-me').on('click', event => {
    $(event.currentTarget).css('background-color', 'blue');  
  });
  */

  let moreAboutMeButton = document.getElementById('more-about-me');
  let moreAboutMePara = document.getElementById('about-me-2');
  let evenMorePara = document.getElementById('about-me-3');
  let evenMoreButton = document.getElementById('even-more-about-me');
  let showLessButton = document.getElementById('less');

  // These statements are "hiding" all the "more" paragraphs

  moreAboutMePara.hidden = true;
  moreAboutMeButton.hidden = false;
  evenMorePara.hidden = true;
  evenMoreButton.hidden = false;
  
  moreAboutMeButton.onclick = function() {
    moreAboutMePara.hidden = false;
    moreAboutMeButton.hidden = true;
  }

  evenMoreButton.onclick = function () {
    evenMorePara.hidden = false;
    evenMoreButton.hidden = true;
  }

  showLessButton.onclick = function () {
    moreAboutMePara.hidden = true;
    evenMorePara.hidden = true;
    moreAboutMeButton.hidden = false;
    evenMoreButton.hidden = false;

  }

  