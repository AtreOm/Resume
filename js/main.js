jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // JavaScript Chart
  var doughnutData = [{
      value: 70,
      color: "#2ecc71"
    },
    {
      value: 30,
      color: "#3498db"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData, {animation: true});

  // Bootstrap Chart
  var doughnutData = [{
    value: 90,
    color: "#e74c3c"
  },
  {
    value: 10,
    color: "#f1c40f"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData, {animation: true});

  // WordPress Chart
  var doughnutData = [{
    value: 65,
    color: "#9b59b6"
  },
  {
    value: 35,
    color: "#34495e"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData, {animation: true});

  // HTML Chart
  var doughnutData = [{
    value: 80,
    color: "#f39c12"
  },
  {
    value: 20,
    color: "#d35400"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData, {animation: true});

  // Photoshop Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#16a085"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData, {animation: true});

  // Illustrator Chart
  var doughnutData = [{
    value: 50,
    color: "#f1c40f"
  },
  {
    value: 50,
    color: "#e67e22"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData, {animation: true});
})