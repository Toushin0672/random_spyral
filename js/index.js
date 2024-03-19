//全キャラのデータを入れる配列を作成
const ALL_CHAR = [];
//別jsファイルのjsonデータを'ALL_CHAR'配列に追加
for(var i=0; i < char_database.length; i++){
    ALL_CHAR.push(char_database[i]);
}

//キャラクター画像表示
for(var i=0; i < ALL_CHAR.length; i++){
    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox' + i);
    
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checkbox' + i);
    checkbox.setAttribute('name', ALL_CHAR[i]['Name']);
    checkbox.style.display = 'none';

    const image = document.createElement('img');
    image.setAttribute('src', './image/char_icon/' + ALL_CHAR[i]['Country'] + '/' + ALL_CHAR[i]['Name'] + '.png');
    switch(ALL_CHAR[i]['Rarity']){
        case '4':
            back_color = '#8457B2';
            break;
        case '5':
            back_color = '#B18A42';
            if(ALL_CHAR[i]['Name'] == 'aloy'){
                back_color ='#922D38';
            }
            break;
    }
    image.setAttribute('style', 'background-color: ' + back_color + ';');

    label.appendChild(checkbox);
    label.appendChild(image);

    document.getElementById('character_list').appendChild(label);
}

//ハンバーガーメニューの開閉
document.querySelector('.hamburger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.slide-menu').classList.toggle('active');
  });

/* 関数群 */
//キャラクターの属性に合わせてアクティブ化又は全選択、全解除
function char_select_active(val, num){
    switch(num){
        //全キャラクターの選択・解除
        case 0:
            if(val === 'true'){
                var bool = true;
            }else {
                var bool = false;
            }
            for(var i=0; i < ALL_CHAR.length; i++){
                document.getElementById('checkbox'+ i).checked = bool;
            }
        break;
        //元素毎
        case 1:
            for(var i=0; i < ALL_CHAR.length; i++){
                var char_name = document.getElementById('checkbox'+ i).getAttribute('name');
                var data = getstate(char_name);
                if(data['Element'] == val){
                    document.getElementById('checkbox'+ i).checked = true;
                }
            }
        break;
        //武器毎
        case 2:
            for(var i=0; i < ALL_CHAR.length; i++){
                var char_name = document.getElementById('checkbox'+ i).getAttribute('name');
                var data = getstate(char_name);
                if(data['Weapon'] == val){
                    document.getElementById('checkbox'+ i).checked = true;
                }
            }
        break;
        //国毎
        case 3:
            for(var i=0; i < ALL_CHAR.length; i++){
                var char_name = document.getElementById('checkbox'+ i).getAttribute('name');
                var data = getstate(char_name);
                if(data['Country'] == val){
                    document.getElementById('checkbox'+ i).checked = true;
                }
            }
        break;
        //レアリティ
        case 4:
            for(var i=0; i < ALL_CHAR.length; i++){
                var char_name = document.getElementById('checkbox'+ i).getAttribute('name');
                var data = getstate(char_name);
                if(data['Rarity'] == val){
                    document.getElementById('checkbox'+ i).checked = true;
                }
            }
        break;
        //性別
        case 5:
            for(var i=0; i < ALL_CHAR.length; i++){
                var char_name = document.getElementById('checkbox'+ i).getAttribute('name');
                var data = getstate(char_name);
                if(data['Sex'] == val){
                    document.getElementById('checkbox'+ i).checked = true;
                }
            }
        break;
    }
}

//キャラクターの名前を渡して連想配列を取得
function getstate(name){
    for(var i=0; i < ALL_CHAR.length; i++){
        if(ALL_CHAR[i]['Name'] == name){
            return ALL_CHAR[i];
        }
    }
}

//抽選機構
function char_drow(){
    //アクティブ状態のキャラをすべて配列に突っ込む
    var select_box = [];
    for(var i=0; i<ALL_CHAR.length; i++){
        if(document.getElementById('checkbox'+i).checked == true){
            select_box.push(document.getElementById('checkbox'+i).getAttribute('name'));
        }
    }

    if(select_box.length == 0){
        select_member_clear();
        alert('キャラクターを選択してください。');
    }

    for(var i=0; i < 8; i++){
        if(select_box.length != 0){
            var select_num = Math.floor(Math.random() *(select_box.length));
            var select_char = select_box[select_num];
            var getData = getstate(select_char);
            document.getElementById('icon' + i).innerHTML = "<img src='./image/char_icon/" + getData['Country'] + "/" + getData['Name'] + ".png'>";
            document.getElementsByName(select_char)[0].checked = false;
            select_box.splice(select_num, 1);
        }else if(select_box.length == 0){
            for(i+1; i < 8; i++){
                document.getElementById('icon' + i).innerHTML = '';
            }
        }
    }
}

//ALL_CHARからselect_charで選ばれたキャラの連想配列を取得
function search_index(select_char){
    for(var i=0; i < ALL_CHAR.length; i++){
        if(ALL_CHAR[i]['Name'] == select_char){
            var char_name = ALL_CHAR[i].Name;
            var char_country = ALL_CHAR[i].Country;
            return [char_name, char_country];
        }
    }
}

//選出メンバーの画像を消す
function select_member_clear(){
    for(var i=0; i < 8; i++){
        document.getElementById('icon' + i).innerHTML = '';
    }
}
