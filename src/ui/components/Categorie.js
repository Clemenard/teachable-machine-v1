var CATEGORIE = {'catCount': 0};
class Categorie {
   constructor() {
       var colour = 'green';
       let moduloCatCount = CATEGORIE.catCount % 3;
       switch (moduloCatCount) {
           case 1: colour = 'orange';
            break;
           case 2: colour = 'purple';
           break;
           default: break;
       }
  let html = '<div id="' + colour + '" class=" learning__class--' + colour + '">';
  html += '<h3 class="input-title-category">Title</h3>';
  html += '<div class="learning__class learning__class--disabled">';
   html += '<div class="examples">';
   html += '<div class="machine__status examples__status"><span class="examples__counter">0</span> examples</div>';
   html += '<div class="examples__wrapper">';
   html += ' <img src="assets/close.svg" class="examples__close-icon">';
   html += '  <a href="#" class="link link--reset">Reset</a>';
   html += '  <canvas class="examples__viewer"></canvas>';
   html += '  </div>';
   html += ' </div>';
   html += ' <div class="learning__class-column">';
   html += '   <div class="confidence">';
   html += '       <div class="machine__status confidence__status">Confidence</div>';
   html += '        <div class="machine__meter">';
   html += '            <div class="machine__value machine__value--color-' + colour + '">';
   html += '                <div class="machine__percentage machine__percentage--white">0%</div>';
   html += '            </div>';
   html += '        </div>';
   html += '    </div>';
   html += '    <a href="#" class="button button--record button--color-' + colour + '"><span class="button__content button__content--small">Train <br>' + colour + '</span></a>';
   html += ' </div>';
   html += '</div>  ';
   html += '</div>  ';
   $('#categories-container').append(html);
   CATEGORIE.catCount += 1;
}

}

export default Categorie;