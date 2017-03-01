var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: false
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "CLOZE_Introduction-PILOT.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],
    
//PRACTICE//
    ["practice", "Form", {html: 'This is the <input name="practice1" type="text" size="10" class="obligatory" />(<i>first/second/third</i>) practice item.'}],
    ["practice", "Form", {html: 'This is <input name="practice2.1" type="text" size="10" class="obligatory" />(<i>another/last</i>) <input name="practice2.2" type="text" size="10" class="obligatory" />(<i>practice/experimental</i>) item.'}], 
    ["practice", "Form", {html: 'This is the <input name="practice3.1" type="text" size="10" class="obligatory" />(<i>final/last/third</i>) <input name="practice3.2" type="text" size="10" class="obligatory" />(<i>practice/experimental</i>) item.'}],
    
    ["sep", "Separator", { }], 
    
  //Experimental Items//
  //Uncountable Substance//
    //salt//
    ["ms1-zs", "Form", {html: 'Jeffrey often orders <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>salt/salts</i>) on his fries when he is at restaurants.'}], 
    ["ms1-ds", "Form", {html: 'Where did you put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>salt/salts</i>)? I cannot find it.'}], 
    //toothpaste//
    ["ms2-zs", "Form", {html: 'Did you put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>toothpaste/toothpastes</i>) on your toothbrush before b rushing your teeth?'}], 
    ["ms2-ds", "Form", {html: 'I thought I put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>toothpaste/toothpastes</i>) on the counter when I was finished.'}], 
    //mustard//
    ["ms3-zs", "Form", {html: 'Chelsea would like <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>mustard/mustards</i>) for her sandwich, please.'}], 
    ["ms3-ds", "Form", {html: 'John said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>mustard/mustards</i>) was in the refrigerator.'}], 
  //Uncountable Object//
    //furniture//
    ["mo1-zs", "Form", {html: 'This room is just full of beautiful <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>furniture/furnitures</i>).'}], 
    ["mo1-ds", "Form", {html: 'I was at the storage unit looking for <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>furniture/furnitures</i>) for the spare bedroom.'}], 
    //mail//
    ["mo2-zs", "Form", {html: 'Since today is a holiday, we will probably not get <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>mail/mails</i>).'}], 
    ["mo2-ds", "Form", {html: 'We should have the Post Office hold <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>mail/mails</i>) while we are gone for a week.'}], 
    //traffic//
    ["mo3-zs", "Form", {html: 'I leave for work an hour early because there is always <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>traffic/traffics</i>) on Main Street.'}], 
    ["mo3-ds", "Form", {html: '<input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>traffic/traffics</i>) on Liberty Street always causes congestion for over 10 blocks.'}], 
  //Countable [+prototypical]//
    //boy//
    ["c1-zp", "Form", {html: 'Why do <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>boy/boys</i>) always cause so much trouble?'}], 
    ["c1-i",  "Form", {html: 'I saw <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>boy/boys</i>) playing on the swing at the park.'}], 
    ["c1-ds", "Form", {html: 'Do you think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>boy/boys</i>) at the park would like to come over for lunch?'}], 
    ["c1-dp", "Form", {html: 'He said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>boy/boys</i>) were playing in the yard next door.'}], 
    //door//
    ["c2-zp", "Form", {html: 'The store had <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>door/doors</i>) of all different shapes and sizes.'}], 
    ["c2-i",  "Form", {html: 'I think we need to buy <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>door/doors</i>) fro the back of the house.'}], 
    ["c2-ds", "Form", {html: 'Would you like <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>door/doors</i>) To be blue or red?'}], 
    ["c2-dp", "Form", {html: 'Personally, I think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>door/doors</i>) on the left look better.'}], 
    //book//
    ["c3-zp", "Form", {html: 'We should buy and donate <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>book/books</i>) to the children in need.'}], 
    ["c3-i",  "Form", {html: 'Do you have <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>book/books</i>) that you would recommend to a young child?'}], 
    ["c3-ds", "Form", {html: 'Where did you put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>book/books</i>) that you were telling me about?'}], 
    ["c3-dp", "Form", {html: 'I cannot remember <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>book/books</i>) the teacher told us to buy for the class.'}], 
  //Countable [-prototypical]//
    //noodle//
    ["cnp1-zp", "Form", {html: 'Do you think we should have <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>noodle/noodles</i>) for dinner?'}], 
    ["cnp1-i",  "Form", {html: 'Tim said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>noodle/noodles</i>) was on the floor the other day.'}], 
    ["cnp1-ds", "Form", {html: 'Danielle said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>noodle/noodles</i>) which was on the floor had been there for three days.'}], 
    ["cnp1-dp", "Form", {html: 'I was wondering if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>noodle/noodles</i>) at dinner tasted a little strange.'}], 
    //crayon//
    ["cnp2-zp", "Form", {html: 'There are <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>crayon/crayons</i>) in the box. They are of all different colors.'}], 
    ["cnp2-i",  "Form", {html: 'We were worried that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>crayon/crayons</i>) had been lost in between the seats of the car.'}], 
    ["cnp2-ds", "Form", {html: 'He wants to use <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>crayon/crayons</i>) that is on the table next to you.'}], 
    ["cnp2-dp", "Form", {html: '<input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>crayon/crayons</i>) that we use for our holiday games are in the drawer in the kitchen.'}], 
    //stick//
    ["cnp3-zp", "Form", {html: 'She picked up <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stick/sticks</i>) and put them into the fire.'}], 
    ["cnp3-i",  "Form", {html: 'The squirrel was playing with <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stick/sticks</i>).'}], 
    ["cnp3-ds", "Form", {html: 'Do you think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stick/sticks</i>) broke because we were fighting over it?'}], 
    ["cnp3-dp", "Form", {html: 'Debbie asked if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stick/sticks</i>) could be put in a pile by the street.'}], 
  //Flexible//
    //chocolate//
    ["f1-zs", "Form", {html: 'The recipe requires that we use <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) for the desserts.'}], 
    ["f1-zp", "Form", {html: 'There are <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) on the table which can be eaten for a sweet treat.'}], 
    ["f1-i",  "Form", {html: 'Steven recommended <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) that was made in France. Yummy!'}], 
    ["f1-ds", "Form", {html: 'She wonders if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) that we have will be enough for the recipe.'}], 
    ["f1-dp", "Form", {html: 'The king said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>chocolate/chocolates</i>) were a gift as an appreciation of his gratitude.'}], 
    //stone//
    ["f2-zs", "Form", {html: 'They spent a lot of money on <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stone/stones</i>) for the new park.'}], 
    ["f2-zp", "Form", {html: 'Skye forgot <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stone/stones</i>) for her art project.'}], 
    ["f2-i",  "Form", {html: 'Chad said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stone/stones</i>) would be a nice addition to the gnome garden.'}], 
    ["f2-ds", "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stone/stones</i>) END'}], 
    ["f2-dp", "Form", {html: 'The gnomes thought that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>stone/stones</i>) were too much for the design.'}], 
    //string//
    ["f3-zs", "Form", {html: 'He had said that he needed <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) to finish the blanket he was making.'}], 
    ["f3-zp", "Form", {html: 'There were <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) on the floor before I cleaned the house.'}], 
    ["f3-i",  "Form", {html: 'Would it be better if we added <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) to the end of this?'}], 
    ["f3-ds", "Form", {html: '<input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) that I bought yesterday seems to have disappeared.'}], 
    ["f3-dp", "Form", {html: 'Tanner said that he took <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>string/strings</i>) that we cut for our own project. Argh!'}], 
];