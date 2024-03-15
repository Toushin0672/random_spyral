//キャラクターの連想配列
var sora = {Name:'sora', Country:'6other'};
var albedo = {Name:'albedo', Country:'1mondo'};
var amber = {Name:'amber', Country:'1mondo'};
var barbara = {Name:'barbara', Country:'1mondo'};
var bennett = {Name:'bennett', Country:'1mondo'};
var diluc = {Name:'diluc', Country:'1mondo'};
var diona = {Name:'diona', Country:'1mondo'};
var eula = {Name:'eula', Country:'1mondo'};
var fischl = {Name:'fischl', Country:'1mondo'};
var jean = {Name:'jean', Country:'1mondo'};
var kaeya = {Name:'kaeya', Country:'1mondo'};
var klee = {Name:'klee', Country:'1mondo'};
var lisa = {Name:'lisa', Country:'1mondo'};
var mika = {Name:'mika', Country:'1mondo'};
var mona = {Name:'mona', Country:'1mondo'};
var noelle = {Name:'noelle', Country:'1mondo'};
var razor = {Name:'razor', Country:'1mondo'};
var rosaria = {Name:'rosaria', Country:'1mondo'};
var sucrose = {Name:'sucrose', Country:'1mondo'};
var venti = {Name:'venti', Country:'1mondo'};
var baizhu = {Name:'baizhu', Country:'2ri-yue'};
var beidou = {Name:'beidou', Country:'2ri-yue'};
var chongyun = {Name:'chongyun', Country:'2ri-yue'};
var gaming = {Name:'gaming', Country:'2ri-yue'};
var ganyu = {Name:'ganyu', Country:'2ri-yue'};
var hutao = {Name:'hutao', Country:'2ri-yue'};
var keqing = {Name:'keqing', Country:'2ri-yue'};
var ningguang = {Name:'ningguang', Country:'2ri-yue'};
var qiqi = {Name:'qiqi', Country:'2ri-yue'};
var shenhe = {Name:'shenhe', Country:'2ri-yue'};
var tartaglia = {Name:'tartaglia', Country:'2ri-yue'};
var xiangling = {Name:'xiangling', Country:'2ri-yue'};
var xianyun = {Name:'xianyun', Country:'2ri-yue'};
var xiao = {Name:'xiao', Country:'2ri-yue'};
var xingqiu = {Name:'xingqiu', Country:'2ri-yue'};
var xinyan = {Name:'xinyan', Country:'2ri-yue'};
var yanfei = {Name:'yanfei', Country:'2ri-yue'};
var yaoyao = {Name:'yaoyao', Country:'2ri-yue'};
var yelan = {Name:'yelan', Country:'2ri-yue'};
var yunjin = {Name:'yunjin', Country:'2ri-yue'};
var zhongli = {Name:'zhongli', Country:'2ri-yue'};
var arataki = {Name:'arataki', Country:'3inazuma'};
var ayaka = {Name:'ayaka', Country:'3inazuma'};
var ayato = {Name:'ayato', Country:'3inazuma'};
var goro = {Name:'goro', Country:'3inazuma'};
var heizou = {Name:'heizou', Country:'3inazuma'};
var kazuha = {Name:'kazuha', Country:'3inazuma'};
var kirara = {Name:'kirara', Country:'3inazuma'};
var kokomi = {Name:'kokomi', Country:'3inazuma'};
var kujyou = {Name:'kujyou', Country:'3inazuma'};
var raiden = {Name:'raiden', Country:'3inazuma'};
var sayu = {Name:'sayu', Country:'3inazuma'};
var shinobu = {Name:'shinobu', Country:'3inazuma'};
var toma = {Name:'toma', Country:'3inazuma'};
var yaemiko = {Name:'yaemiko', Country:'3inazuma'};
var yoimiya = {Name:'yoimiya', Country:'3inazuma'};
var aruhaizenn = {Name:'aruhaizenn', Country:'4sume-ru'};
var dhishia = {Name:'dhishia', Country:'4sume-ru'};
var dori = {Name:'dori', Country:'4sume-ru'};
var faruzan = {Name:'faruzan', Country:'4sume-ru'};
var hourousya = {Name:'hourousya', Country:'4sume-ru'};
var kave = {Name:'kave', Country:'4sume-ru'};
var korei = {Name:'korei', Country:'4sume-ru'};
var kyandisu = {Name:'kyandisu', Country:'4sume-ru'};
var nahida = {Name:'nahida', Country:'4sume-ru'}; 
var nilirou = {Name:'nilirou', Country:'4sume-ru'};
var reira = {Name:'reira', Country:'4sume-ru'};
var seno = {Name:'seno', Country:'4sume-ru'};
var thinari = {Name:'thinari', Country:'4sume-ru'};
var chiori = {Name:'chiori', Country:'5fonte-nu'};
var huremine = {Name:'huremine', Country:'5fonte-nu'};
var hurina = {Name:'hurina', Country:'5fonte-nu'};
var navia = {Name:'navia', Country:'5fonte-nu'};
var nuviretto = {Name:'nuviretto', Country:'5fonte-nu'};
var rine = {Name:'rine', Country:'5fonte-nu'};
var rinetto = {Name:'rinetto', Country:'5fonte-nu'};
var riosesuri = {Name:'riosesuri', Country:'5fonte-nu'};
var shuvuruzu = {Name:'shuvuruzu', Country:'5fonte-nu'};
var syarurotto = {Name:'syarurotto', Country:'5fonte-nu'};
var aloy = {Name:'aloy', Country:'6other'};

var all_char =[
    sora,albedo,amber,barbara,bennett,diluc,diona,eula,fischl,jean,
    kaeya,klee,lisa,mika,mona,noelle,razor,rosaria,sucrose,venti,
    baizhu,beidou,chongyun,gaming,ganyu,hutao,keqing,ningguang,qiqi,shenhe,
    tartaglia,xiangling,xianyun,xiao,xingqiu,xinyan,yanfei,yaoyao,yelan,yunjin,
    zhongli,arataki,ayaka,ayato,goro,heizou,kazuha,kirara,kokomi,kujyou,
    raiden,sayu,shinobu,toma,yaemiko,yoimiya,aruhaizenn,dhishia,dori,faruzan,
    hourousya,kave,korei,kyandisu,nahida,nilirou,reira,seno,thinari,chiori,
    huremine,hurina,navia,nuviretto,rine,rinetto,riosesuri,shuvuruzu,syarurotto,aloy
];

//キャラクター画像表示
for(var i=0; i < all_char.length; i++){
    const label = document.createElement('label');
    label.setAttribute('for', 'checkbox' + i);
    
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checkbox' + i);
    checkbox.setAttribute('name', all_char[i]['Name']);
    checkbox.style.display = 'none';

    const image = document.createElement('img');
    image.setAttribute('src', './image/char_icon/' + all_char[i]['Country'] + '/' + all_char[i]['Name'] + '.png');

    label.appendChild(checkbox);
    label.appendChild(image);

    document.getElementById('character_list').appendChild(label);
}

//全キャラクター選択・解除
function all_select(bool){
    for(var i=0; i < all_char.length; i++){
        if(bool == 'true'){
            document.getElementById('checkbox'+ i).checked = true;
        }else if(bool == 'false'){
            document.getElementById('checkbox'+ i).checked = false;
        }
    }
}

//アクティブキャラのみ抽選
function select(){
    var select_box = [];
    for(var i=0; i < all_char.length; i++){
        if(document.getElementById('checkbox'+ i).checked == true){
            select_box.push(document.getElementById('checkbox'+ i).getAttribute('name'));
        }
    }
    if(select_box.length == 0){
        alert('キャラクターを選択してください。');
    }

    if(select_box.length > 8){
        for(var i = 0; i < 8; i++){
            var select_num = Math.floor(Math.random() *(select_box.length));
            var select_char = select_box[select_num];
            var getindex = search_index(select_char);
            document.getElementById('icon' + i).innerHTML = "<img src='./image/char_icon/" + getindex[1] + "/" + getindex[0] + ".png'>";
            document.getElementsByName(select_char)[0].checked = false;
            select_box.splice(select_num, 1);
        }
    }else if(select_box.length <= 8){
        for(var i = 0; 0 < select_box.length; i++){
            var select_num = Math.floor(Math.random() *(select_box.length));
            var select_char = select_box[select_num];
            var getindex = search_index(select_char);
            document.getElementById('icon' + i).innerHTML = "<img src='./image/char_icon/" + getindex[1] + "/" + getindex[0] + ".png'>";
            document.getElementsByName(select_char)[0].checked = false;
            select_box.splice(select_num, 1);
        }
    }
}

//all_charからselect_charで選ばれたキャラの連想配列を取得
function search_index(select_char){
    for(var i=0; i < all_char.length; i++){
        if(all_char[i]['Name'] == select_char){
            var char_name = all_char[i].Name;
            var char_country = all_char[i].Country;
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