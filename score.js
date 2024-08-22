let turn='x';
let title=document.querySelector('.play');
function game(id){
    let element=document.getElementById(id);
    if(turn==='x' && element.textContent===""){
        element.textContent='x';
        title.textContent='o';
        turn='o';

    }
    else if(turn==='o' && element.textContent===''){
        element.textContent='o';
        title.textContent='x';
        turn='x';
    }
    winner();
}

let score=[];

function end(num1,num2,num3){

    document.getElementById('item'+num1).style.backgroundColor='black';

    document.getElementById('item'+num2).style.backgroundColor='black';

    document.getElementById('item'+num3).style.backgroundColor='black';

    setInterval(function(){title.innerHTML+='.'},1000);
    setTimeout(function(){location.reload()},4000);

}


function winner() {

    for(let i=0;i<9;i++){
        score[i]=document.getElementById(`item${i+1}`).innerHTML;

    }  
     if(score[0]===score[1] && score[1]===score[2] &&score[0]!='' ){
        title.innerHTML=`${score[0]} is Winner `;
        end(1,2,3);
        
    }

    if(score[3]===score[4] && score[4]===score[5] &&score[4]!='' ){
        title.innerHTML=`${score[4]} is Winner `;
       end(4,5,6);
    }

    if(score[6]===score[7] && score[7]===score[8] &&score[6]!='' ){
        title.innerHTML=`${score[6]} is Winner `;
        end(7,8,9);
    }

    if(score[0]===score[3] && score[3]===score[6] &&score[0]!='' ){
        title.innerHTML=`${score[0]} is Winner `;
       end(1,4,7);
    }
    if(score[1]===score[4] && score[4]===score[7] &&score[1]!='' ){
        title.innerHTML=`${score[1]} is Winner `;
       end(2,5,8);
    }

    if(score[2]===score[5] && score[5]===score[8] &&score[2]!='' ){
        title.innerHTML=`${score[2]} is Winner `;
        end(3,6,9);
    }
    if(score[0]===score[4] && score[4]===score[8] &&score[0]!='' ){
        title.innerHTML=`${score[0]} is Winner `;
        end(1,5,9);
    }
    if(score[2]===score[4] && score[4]===score[6] &&score[2]!='' ){
        title.innerHTML=`${score[4]} is Winner `;
       end(3,5,7);
    }

    
}