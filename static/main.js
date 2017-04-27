var windowHeight = ($(window).height() / 2)
var windowWidth = ($(window).width()) //- (37.5*3)
console.log(windowHeight)

$(document).ready(function() {
  $('#mask').click(function() {
    console.log('MOTHER FUCKER')
    anime({
      targets: '.bottomArrow',
      opacity: [
        {value: 0.0,
          duration: 500,
          delay: 0,
          easing: 'linear'}
      ]
    })
    anime({
      targets: '.circle-init',
      translateX: [
        { value: 0,
          duration: 1000,
          easing: 'easeInOutExpo' },
      ],

      translateY: [
        { value: -windowHeight,
          duration: 250,
          delay: 0,
          easing: 'easeOutElastic'},
        { value: -windowWidth/8,
          duration: 1000,
          delay: 1000,
          easing: 'easeOutExpo'},
      ],
    });
  });
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
    console.log(anime)
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
  anime({
    targets: '.bottomArrow',
    translateY: [
      { value: $(window).height()/20,
        duration: 800,
        delay: 400,
        easing: 'easeInElastic'}
    ],
    loop: true,
    direction: 'alternate'
  });
  anime({
    targets: '.bottomArrow',
    opacity: [
      {value: 1.0,
        duration: 500,
        delay: 2750,
        easing: 'linear'}
    ]
  });

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
});


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
