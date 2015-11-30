
//iphone :active fix
document.addEventListener("touchstart", function() {},false);

var pokemans = [
  {Name: 'Squirtle', HP: 44, Damage: 48, Speed: 43 },
  {Name: 'Charmander', HP: 39, Damage: 52, Speed: 65 },
  {Name: 'Bulbasaur', HP: 45, Damage: 49, Speed: 44 },
  {Name: 'Caterpie', HP: 45, Damage: 30, Speed: 45 },
  {Name: 'Weedle', HP: 40, Damage: 35, Speed: 50 },
  {Name: 'Pidgey', HP: 40, Damage: 45, Speed: 56 },
  {Name: 'Rattata', HP: 30, Damage: 56, Speed: 72},
  {Name: 'Pikachu', HP: 35, Damage: 55, Speed: 90 },
  {Name: 'NidoranFemale', HP: 55, Damage: 47, Speed: 41 },
  {Name: 'NidoranMale', HP: 46, Damage: 57, Speed: 42 },
  {Name: 'Clefairy', HP: 70, Damage: 45, Speed: 35 },
  {Name: 'Vulpix', HP: 38, Damage: 41, Speed: 64 },
  {Name: 'Jigglypuff', HP: 115, Damage: 45, Speed: 20 },
  {Name: 'Oddish', HP: 45, Damage: 50, Speed: 30 },
  {Name: 'Meowth', HP: 40, Damage: 45, Speed: 90 },
  {Name: 'Psyduck', HP: 50, Damage: 52, Speed: 55 },
  {Name: 'Mankey', HP: 40, Damage: 80, Speed: 70 },
  {Name: 'Poliwag', HP: 40, Damage: 50, Speed: 91 }
];

var game = {
  cards: pokemans,
  dealtCards: [],
  rounds: 0,
  inPlay: [],
  playerScore: 0,
  autoplayerScore: 0,
  // Write a function to deal 3 cards to the player. Remove the cards from the 'cards' array and add them to the player.cards and dealtCards arrays.
  // Call the player 'viewCards' function
  dealPlayer: function() {
    //loop 3 times to append 3 cards
    for (var i = 0; i <= 2; i++) {
      //get random index number
      var index = Math.floor(pokemans.length * Math.random());

      //select card from array with randomized index
      //and assign to variable
      this.pokeman = pokemans[index];
      console.log(this.pokeman.Name);

      //display cards in dom
      // var newDiv = '<div id="' +this.pokeman.Name + '"></div>';
      // $(newDiv).appendTo( "#player-caords" );

      //add to player.cards
      player.cards.push(this.pokeman); // if this is how you add to an array, then this is how it should be done. alright
      player.viewCards(i);

      //remove current card from array
      pokemans.splice(index, 1);
    }

  },
  // Write a function to deal 3 cards to the autoplayer. Remove the cards from the 'cards' array
  // and add them to the player.cards and dealtCards arrays.
  // Call the autoplayer 'displayCards' function
  dealAutoplayer: function() {
    for (var i = 0; i < 3; i++) {
      //get random index number
      var index = Math.floor(pokemans.length * Math.random());

      //select card from array with randomized index
      //and assign to variable
      this.pokeman = pokemans[index];
      console.log(this.pokeman.Name);

      //add to player.cards
      autoplayer.cards.push(this.pokeman);
      autoplayer.displayCards();

      //remove current card from array
      pokemans.splice(index, 1);
    }
    console.log(pokemans);
  },
  // Write a function that determines the winner of the 2 played cards and updates the score
  // The pokemon with the highest speed should strike first and if their attack is higher than
  // the oponent's HP, they win. Otherwise, the oponent's pokemon may retaliate. Alert each attack and update stats. Keep playing until
  // one pokemon is knocked out. Update and print the scores, then clear the in-play section and remove the cards from the inPlay array.
  determineWinner: function() {
    // console.log("fighting is in progress. pls hold.");
    // console.log(game.inPlay[0].Name + " used quick attack!");
    // console.log("it wasn't very effective...");

    //inPlay[0] is player, [1] is bot
    var player = game.inPlay[0];
    var autoplayer = game.inPlay[1];

    //loop until pokemon runs out of HP
    while (player.HP > 0 && autoplayer.HP > 0) {
      //if player is faster than autoplayer
      if(player.Speed > autoplayer.Speed) {
        //player attacks first
        autoplayer.HP = autoplayer.HP - player.Damage;
        alert(player.Name + " used pee shiver. It was very effective!");
        //if autoplayer still alive, attacks next
        if (autoplayer.HP > 0) {
          //it wasn't very effective...
          alert(player.Name + " attacked " + autoplayer.Name + " again.");
          player.HP = player.HP - autoplayer.Damage;
        } else {
          //death
          alert(player.Name + " fainted.");
          game.inPlay.splice(0, 1); //rip player's pokemon
          game.autoplayerScore += 1;
        }

        //
        if (player.HP > 0) {
          alert(autoplayer.Name + " attacked ");
        }


      } else {
        //autoplayer attacks first
        alert(autoplayer.Name + " used Cleveland Steam Roller. Critical Hit!");
        player.HP = player.HP - autoplayer.Damage;
        //if player still alive, attacks
        if (player.HP > 0) {
          //critical hit!
          alert(autoplayer.Name + " attacked " + player.Name + " again.");
          autoplayer.HP = autoplayer.HP - player.Damage;
        } else {
          //
          alert(autoplayer.Name + " fainted.");
          game.inPlay.splice(1, 1); //rip autoplayer's pokemon
          game.playerScore += 1;
        }
      }

    }



  },
  // Write a function that displays the player score, autoplayer score, and round number on the scoreboard
  printScoreboard: function() {

  }
};

var player = { // can we add another array variable? for example...// since the other inPlay is unrelated because it's already enclosed in its own scope.
  cards: [], // is this the array variable for collecting the selected card? dont think so. that would be the players hand show me where is the "cards" being used?
  wins: 0, // ok i see what it is. so did the instructor include a global variable?
  // Write a function that appends a div to the player-cards section for each player card
  // The div should have an h2 with the Pokemon's name, a ul with the pokeman's other stats
  // and a button that says 'Play So-and-So'. When the button is clicked, it should trigger the
  // playCard function for that card
  viewCards: function(i) {
    console.log(player.cards);
    var playerCards = $("#player-cards"); // tlel me what happens? you assigned a jquery dom (div) object to a variable
    // that way playerDiv can hold the reference to that div tag

    //show cards
    var div = $("<div></div>");
    div.attr("id", player.cards[i].Name);
    playerCards.append(div);

    //display name
    var pokemanName = $('<h3 id="pokemanName">' + player.cards[i].Name + '</h3>');
    pokemanName.appendTo("#" + player.cards[i].Name);

    //show stats for each cards
    var newUl = $('<ul id="player-stats"></ul>');
    newUl.appendTo("#" + player.cards[i].Name);

    var hp = '<li id="player-hp"><p>HP: ' + player.cards[i].HP + '</p></li>';
    $(hp).appendTo(newUl);

    var dmg = '<li id="player-dmg"><p>DMG: ' + player.cards[i].Damage + '</p></li>';
    $(dmg).appendTo(newUl);

    var spd = '<li id="player-spd"><p>SPD: ' + player.cards[i].Speed + '</p></li>';
    $(spd).appendTo(newUl);

    document.getElementById(player.cards[i].Name).addEventListener("click", function () {
      //after the button is clicked, it does something here.
      //console.log("clicked!");
      var selectedPokeman = document.querySelector('#' + player.cards[i].Name);
      game.selectedCard = selectedPokeman; // created selectedCard game object to hold the selectedPokeman (so it can go out of scope and be used in playCard())
// move this to playCard function


    });

  },
  // This function should remove the clicked card from the 'player-cards' section and add it to
  // to the in-play section. It should also push the card object to the game's inPlay array,
  // delete it from the player.cards array.
  // And call the autoplayer to play their card
  playCard: function() {
    // adds the selected card to the in-play section
    $(game.selectedCard).appendTo('#in-play1'); //posts to dom
    // pushes the selected card into inPlay array for book keeping purposes

    console.log(game.selectedCard);
    // delete this selected card from the player.cards
    var i; // would save value to i outside of for loop scope.
    for (i=0; i < player.cards.length; i++) {
      if (player.cards[i].Name === game.selectedCard.id) {
        break;
      }
    }
    //ah interesting way, there are other ways to do this but this will do.
    game.inPlay.push(player.cards[i]); //push to array
    player.cards.splice(i, 1);
    console.log(player.cards);
    // call the autoplayer.playCard()
    autoplayer.playCard();
  }
};


var autoplayer = {
  cards: [],
  wins: 0,
  // This function should display the autoplayer's cards as if they were face-down in the
  // 'autoplayer-cards' section. The player should be able to see the number of cards, but none
  // of their details.
  displayCards: function() {
    console.log(autoplayer.cards);
    //display cards in dom
    var newDiv = '<div id="Pokecard"></div>';
    $(newDiv).appendTo("#autoplayer-cards");
  },
  // This function should remove a card at random from the 'player-cards' section and add it to
  // to the in-play section with the stats now visible. It should then delete the card from the autoplayer.cards, push it into the
  // game's inPlay array and call the game's 'determineWinner' function.
  playCard: function() {
    // adds the selected card to the in-play section
// selectedCard was supposed to be just for user's not bot
    // pushes the selected card into inPlay array for book keeping purposes
    // delete this selected card from the player.cards

    // dont need ot use for loop. just do random math and use that value to select the card
    // use that same value to remove from the autoplayer.cards.
    // does it make sense?
    //yes
// should be  between 0 and the autoPlayer.cards.length-1?
    var randomCard = Math.floor(Math.random()*3);
    var autoplayerPick = autoplayer.cards[randomCard];
    console.log(autoplayerPick);
// here you create a div element displaying autoplayerPick stats
    // append this div element to #in-play2
    //show cards
    var autoplayerCards = $("#autoplayer-cards");
    var div = $("<div></div>");
    div.attr("id", autoplayerPick.Name);
    autoplayerCards.append(div);

    //display name
    var pokemanName = $('<h3 id="pokemanName">' + autoplayerPick.Name + '</h3>');
    pokemanName.appendTo("#" + autoplayerPick.Name);

    //show stats for each cards
    var newUl = $('<ul id="autoplayer-stats"></ul>');
    newUl.appendTo("#" + autoplayerPick.Name);

    var hp = '<li id="autoplayer-hp"><p>HP: ' + autoplayerPick.HP + '</p></li>';
    $(hp).appendTo(newUl);

    var dmg = '<li id="autoplayer-dmg"><p>DMG: ' + autoplayerPick.Damage + '</p></li>';
    $(dmg).appendTo(newUl);

    var spd = '<li id="autoplayer-spd"><p>SPD: ' + autoplayerPick.Speed + '</p></li>';
    $(spd).appendTo(newUl);

    $(div).appendTo('#in-play2');
    autoplayer.cards.splice(randomCard, 1);
    // push the div into game.inPlay array? wut sure lol
    game.inPlay.push(autoplayerPick);
    //determine winnar
    game.determineWinner();
  }
};

// Call your deal functions
$(document).ready(function() {
  $('#deal').on('click', function() {
    if (player.cards.length < 3) {
      game.dealAutoplayer();
      game.dealPlayer();
    }
  });
});

$(document).ready(function() {
  $('#play').on('click', function() {
    player.playCard();
  });
});

function test() {
  var test = "testicles";
  console.log(test);
}
