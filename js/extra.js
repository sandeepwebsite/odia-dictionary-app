// menu

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



// speech script


function textspeak() {
    var text = document.getElementById('inputword').value;
    responsiveVoice.speak(text);
}


// function sayItOutLoud(id) {
//   const message = document.getElementById('inputword').value;
//   var speech = new SpeechSynthesisUtterance();
//   speech.lang = "hi-IN";
//   speech.text = message;
//   speech.volume = 5;
//   speech.rate = 1;
//   speech.pitch = 1;

//   window.speechSynthesis.speak(speech);
  
//   var u = new SpeechSynthesisUtterance();
//   u.text = document.getElementById('inputword').value;
//   speechSynthesis.speak(u);
// };






//Add Favorite

//Fevorite push to local storage -->
  function adFavorite() {
    document.getElementById("favorite").style.color = "red";
    var newSport = document.getElementById('inputword').value;
      if (localStorage.getItem('favoriteWords') == null) {
              localStorage.setItem('favoriteWords','[]');
      }
            var old_data = JSON.parse(localStorage.getItem('favoriteWords'));
            old_data.push(newSport);

            localStorage.setItem('favoriteWords',JSON.stringify(old_data));
    
      }
    function favView(){
      var retrievedFev = localStorage.getItem("favoriteWords");
      var favoriteView = JSON.parse(retrievedFev);
      if (favoriteView == null) {
        alert("Enter a Favorite Word First");
      } else {
      function removeDuplicates(favoriteView) { 
        return [...new Set(favoriteView)]; 
      }
      document.getElementById('favorite-view').innerHTML = removeDuplicates(favoriteView).map(i => `<li class="inliner">${i}</li>`).join('');
      document.getElementById("pop-up").style.display = "block";
      document.getElementById("forfav").style.display = "block";
      document.getElementById("forhistory").style.display = "none";



      $('li.inliner').on('click',function(){
    //GET THE TEXT INSIDE THAT SPECIFIC LI
    var content= $(this).text();
    //PLACE THE TEXT INSIDE THE INPUT FIELD, YOU CAN CHANGE YOUR SELECTOR TO TARGET THE RIGHT INPUT
    $('#inputword').val(content);
    //HERE YOU CAN DO SOMETHING ELSE LIKE SIBMITING THE FORM, OR CLICK A BUTTON.. OR SOMETHING ELSE
    document.getElementById("pop-up").style.display = "none";
      });
    }}

function historyView(){
      var retrievedHistory = localStorage.getItem("historyWords");
      var historyView = JSON.parse(retrievedHistory);

      var nonEmpty = historyView.filter(function(e) {
        return String(e).trim();
      });

      if (nonEmpty == null) {
        alert("Enter a Word First");
      } else {
        let historyLength = nonEmpty.length;
        if (historyLength >= 10) {
          document.getElementById('history-view').innerHTML = nonEmpty.slice(nonEmpty.length-10, nonEmpty.length).map(i => `<li class="inliner">${i}</li>`).join('');
        } else {
          document.getElementById('history-view').innerHTML = nonEmpty.map(i => `<li class="inliner">${i}</li>`).join('');
        }
      document.getElementById("pop-up").style.display = "block";
      document.getElementById("forhistory").style.display = "block";
      document.getElementById("forfav").style.display = "none";



     

    $('li.inliner').on('click',function(){
    //GET THE TEXT INSIDE THAT SPECIFIC LI
    var content= $(this).text();
    //PLACE THE TEXT INSIDE THE INPUT FIELD, YOU CAN CHANGE YOUR SELECTOR TO TARGET THE RIGHT INPUT
    $('#inputword').val(content);
    //HERE YOU CAN DO SOMETHING ELSE LIKE SIBMITING THE FORM, OR CLICK A BUTTON.. OR SOMETHING ELSE
    document.getElementById("pop-up").style.display = "none";

      });
    }}
    






//pop-up close btn
    function closebtn(){
      document.getElementById("pop-up").style.display = "none";
    }

  //clear input -->
    function clearInput(){
      document.getElementById('inputword').value = '';
      document.getElementById("close-icon").style.display = "none";
    }
    function displayClear(){
       document.getElementById("close-icon").style.display = "block";
     }

//delete favorite

  function deleteItems() {
    localStorage.removeItem("favoriteWords");
    window.location.reload();
  }

    function deleteHistory() {
    localStorage.removeItem("historyWords");
    window.location.reload();
  }
