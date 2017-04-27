var windowHeight = ($(window).height() / 2)
var windowWidth = ($(window).width()) //- (37.5*3)
console.log(windowHeight)
firstNameLetters = [['.s',-((windowWidth*3*.6)/6)],
['.p',-((windowWidth*2*.6)/6)],
['.e1',-((windowWidth*1*.6)/6)],
['.n',0],
['.c',((windowWidth*1*.6)/6)],
['.e2',((windowWidth*2*.6)/6)],
['.r',((windowWidth*3*.6)/6)]]

lastNameLetters = [['.t', -((windowWidth*2.5*.6)/6)],
['.a', -((windowWidth*1.5*.6)/6)],
['.y', -((windowWidth*.5*.6)/6)],
['.l', ((windowWidth*.5*.6)/6)],
['.o', ((windowWidth*1.5*.6)/6)],
['.r', ((windowWidth*2.5*.6)/6)],]


for(var i = 0; i < firstNameLetters.length;i++) {
  console.log(i)
  anime({
    targets: '.firstRow ' + firstNameLetters[i][0],
    translateX: [
      { value: firstNameLetters[i][1],
        duration: 1000,
        delay: 1500,
        easing: 'easeInOutExpo' },
    ],
    translateY: [
      { value: -windowHeight - (windowWidth / 14),
        duration: 1000,
        delay: 500,
        easing: 'easeOutElastic'},
    ]
  });
}


for(var i = 0; i < lastNameLetters.length;i++) {
  console.log(i)
  anime({
    targets: '.secondRow ' + lastNameLetters[i][0],
    translateX: [
      { value: lastNameLetters[i][1],
        duration: 1000,
        delay: 1500,
        easing: 'easeInOutExpo' },
    ],
    translateY: [
      { value: -windowHeight,
        duration: 1000,
        delay: 500,
        easing: 'easeOutElastic'},
    ]
  });
}

$(window).resize(function() {
  var windowHeight = ($(window).height() / 2)
  var windowWidth = ($(window).width())
  firstNameLetters = [['.s',-((windowWidth*3*.6)/6)],
  ['.p',-((windowWidth*2*.6)/6)],
  ['.e1',-((windowWidth*1*.6)/6)],
  ['.n',0],
  ['.c',((windowWidth*1*.6)/6)],
  ['.e2',((windowWidth*2*.6)/6)],
  ['.r',((windowWidth*3*.6)/6)]]

  lastNameLetters = [['.t', -((windowWidth*2.5*.6)/6)],
  ['.a', -((windowWidth*1.5*.6)/6)],
  ['.y', -((windowWidth*.5*.6)/6)],
  ['.l', ((windowWidth*.5*.6)/6)],
  ['.o', ((windowWidth*1.5*.6)/6)],
  ['.r', ((windowWidth*2.5*.6)/6)],]
  for(var i = 0; i < firstNameLetters.length;i++) {
    console.log(i)
    anime({
      targets: '.firstRow ' + firstNameLetters[i][0],
      translateX: [
        { value: firstNameLetters[i][1],
          duration: 1000,
          delay: 0,
          easing: 'easeInOutExpo' },
      ],
      translateY: [
        { value: -windowHeight - (windowWidth / 14),
          duration: 1000,
          delay: 0,
          easing: 'easeOutExpo'},
      ]
    });
  }
  for(var i = 0; i < lastNameLetters.length;i++) {
    console.log(i)
    anime({
      targets: '.secondRow ' + lastNameLetters[i][0],
      translateX: [
        { value: lastNameLetters[i][1],
          duration: 1000,
          delay: 0,
          easing: 'easeInOutExpo' },
      ],
      translateY: [
        { value: -windowHeight,
          duration: 1000,
          delay: 0,
          easing: 'easeOutExpo'},
      ]
    });
  }
})
