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

  // These statements are "hiding" all the "more" paragraphs

  moreAboutMePara.hidden = true;
  moreAboutMeButton.hidden = false;

  moreAboutMeButton.onclick = function() {
    moreAboutMePara.hidden = false;
    moreAboutMeButton.hidden = true;
  }