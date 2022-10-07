// HOVER OVER RESUME BUTTOM IN NAV //

const mouseTarget = document.getElementById('mouse-event')

function mouseStyleHover()
{
  mouseTarget.style.backgroundColor = '#b2f2bb';
  mouseTarget.style.color = '#02573d';
    
};

function mouseStyleUnHover()
{
  mouseTarget.style.backgroundColor = '#02573d';
  mouseTarget.style.color = '#b2f2bb';
    
};


mouseTarget.addEventListener("mouseenter", mouseStyleHover);

mouseTarget.addEventListener("mouseleave", mouseStyleUnHover);
